import Storage from "./Storage";
import * as axios from "axios";
import { from } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { extraProjectData } from "../data";

const addExtraData = projects => {
  if (projects.constructor === Array) {
    projects = projects.map(project => {
      project.extra = extraProjectData.find(
        record => record.id === project.Index
      );
      return project;
    });
    return projects;
  } else {
    projects.data.extra = extraProjectData.find(
      record => record.id === projects.data.Index
    );
    return projects;
  }
};

export class Http {
  static userRegister(name, username, pwd) {
    const data = { name: name, username: username, pwd: pwd, seedpwd: pwd };
    return this.get("user/register", data).pipe(
      mergeMap(() => this.get("investor/register", data)),
      mergeMap(() => this.get("recipient/register", data))
    );
  }

  static userValidate(username, pwhash) {
    return this.get("user/validate", {
      username: username,
      pwhash: pwhash
    }).pipe(map(value => {
      Storage.set("token", pwhash);
      Storage.set("username", username);
      return value;
    }));
  }
  static updateUserAccount(username, pwhash, data) {
    let userInfo = {
      username: username,
      pwhash: pwhash
    };
    let additionalParams = data;
    return this.get("user/update", { ...userInfo, ...additionalParams });
  }

  static userAskXlm(username, hash) {
    return this.get("user/askxlm", {
      username: username ? username : Storage.get('username'),
      pwhash: hash ? hash : Storage.get('token'),
    })
  }

  static userBalanceXlm() {
    const session = Storage.session;

    return this.get("user/balance/xlm", {
      username: session.username,
      pwhash: session.pwhash
    });
  }

  static projectAll(type) {
    return this.get("project/all").pipe(
      // filter out empty projects
      map(result => result.data.filter(data => data.Index > 4)),
      // TODO: fix when type is defined
      map(data => {
        if (!type || type === "pv-solar") {
          return data;
        } else {
          // Return empty array for now to display empty content in other type projects
          return [];
        }
      }),
      map(addExtraData)
    );
  }

  static originatorGet(id) {
    return this.get("public/user", { index: id });
  }

  static projectGet(id) {
    return this.get("project/get", { index: id }).pipe(map(addExtraData));
  }

  static investorValidate() {
    return this.get("investor/validate", {
      username: Storage.get("username"),
      pwhash: Storage.get("token")
    });
  }

  static investorRegister(name, username, pwd, seedpwd) {
    return this.get("investor/register", {
      name: name,
      username: username,
      pwd: pwd,
      seedpwd: seedpwd
    });
  }

  static recipientRegister(name, username, pwd, seedpwd) {
    return this.get("recipient/register", {
      name: name,
      username: username,
      pwd: pwd,
      seedpwd: seedpwd
    });
  }

  static recipientValidate() {
    return this.get("recipient/validate", {
      username: Storage.get("username"), // todo remove this
      pwhash: Storage.get("token")
    });
  }

  static get(path, data) {
    return from(
      axios({
        method: "GET",
        url: `http://34.73.202.205:8080/${path}`,
        params: data,
        headers: {
          "Content-Type": "application/x-www-form/urlencoded"
        }
      })
    );
  }
}
