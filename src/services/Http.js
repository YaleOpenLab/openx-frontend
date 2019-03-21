import { Storage } from './Storage';
import * as axios from 'axios';
import { from } from 'rxjs';

export class Http {

  // todo: verify whether seed password should be equal to password
  static userRegister(name, username, pwd) {
    return this.get('user/register', {
      name: name,
      username: username,
      pwd: pwd,
      seedpwd: pwd,
    })
  }

  static userValidate(username, pwhash) {
    return this.get('user/validate', {
      username: username,
      pwhash: pwhash,
    })
  }

  static userBalanceXlm() {
    const storage = new Storage();
    const session = storage.session;

    return this.get('user/balance/xlm', {
      username: session.username,
      pwhash: session.pwhash,
    })
  }

  static projectAll() {
    return this.get('project/all').map(data => data.data ? data.data : data);
  }

  static projectGet(id) {
    return this.get('project/get', {index: id})
  }

  static investorRegister(name, username, pwd, seedpwd) {
    return this.get('investor/register', {
      name: name,
      username: username,
      pwd: pwd,
      seedpwd: seedpwd,
    })
  }

  static recipientRegister(name, username, pwd, seedpwd) {
    return this.get('recipient/register', {
      name: name,
      username: username,
      pwd: pwd,
      seedpwd: seedpwd,
    })
  }

  static get(path, data) {
    return from(axios({
      method: 'GET',
      url: `http://34.73.202.205:8080/${path}`,
      params: data,
      headers: {
        'Content-Type': 'application/x-www-form/urlencoded',
      }
    }));
  }
}