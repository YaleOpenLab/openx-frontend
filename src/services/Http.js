import Storage from "./Storage";
import * as axios from "axios";
import { from } from "rxjs";
import { map } from "rxjs/operators";

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

  static projectAll() {
    return this.get("project/all").pipe(
      map(result => {
        // Temporary filter out fake data
        let output = [];
        output = result.data.filter(data => {
          return data.Index > 4;
        });

        return output;
      })
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
