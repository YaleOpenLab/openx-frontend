import Storage from "./Storage";
import * as axios from "axios";
import { from } from 'rxjs';
import { filter, map, mergeMap } from "rxjs/operators";
import { extraProjectData } from '../data';

const addExtraData = projects => {
  if (projects.constructor === Array) {
    projects = projects.map(project => {
      project.extra = extraProjectData.find(record => record.id === project.Index);
      return project;
    });
    return projects;
  } else {
    projects.data.extra = extraProjectData.find(record => record.id === projects.data.Index);
    return projects;
  }
};

export class Http {
  static userRegister(name, username, pwd) {
    const data = {name: name, username: username, pwd: pwd, seedpwd: pwd};
    return this.get("user/register", data).pipe(
      mergeMap(() => this.get("investor/register", data)),
      mergeMap(() => this.get("recipient/register", data)),
    )
  }

  static userValidate(username, pwhash) {
    return this.get("user/validate", {
      username: username,
      pwhash: pwhash
    });
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
      // filter out all projects if not solar
      filter(() => !type || type === 'pv-solar'),
      map(addExtraData),
    );
  }

  static originatorGet(id) {
    return this.get("public/user", { index: id });
  }

  static projectGet(id) {
    return this.get("project/get", { index: id }).pipe(
      map(addExtraData),
    );
  }

  static investorValidate() {
    return this.get("investor/validate", {
      // username: Storage.get('username'), // todo remove this
      username: 'varun@visscher.io',
      // pwhash: Storage.get('token')
      pwhash: 'e9a75486736a550af4fea861e2378305c4a555a05094dee1dca2f68afea49cc3a50e8de6ea131ea521311f4d6fb054a146e8282f8e35ff2e6368c1a62e909716'
    })
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
