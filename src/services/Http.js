import Storage from "./Storage";
import * as axios from "axios";
import { from } from "rxjs";
import { filter, map } from "rxjs/operators";

export class Http {
  // todo: verify whether seed password should be equal to password
  static userRegister(name, username, pwd) {
    return this.get("user/register", {
      name: name,
      username: username,
      pwd: pwd,
      seedpwd: pwd
    });
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
    );
  }

  static originatorGet(id) {
    return this.get("public/user", { index: id });
  }

  static projectGet(id) {
    return this.get("project/get", { index: id });
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
