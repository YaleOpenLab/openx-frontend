import Storage from './Storage';
import * as axios from 'axios';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { sha3_512 } from 'js-sha3';

export class Http {
  static investorInvest(id, amount) {
    return this.get('investor/invest', {
      username: Storage.get('username'),
      pwhash: Storage.get('token'),
      seedpwd: "x",
      projIndex: id,
      amount: amount,
    }).pipe(
      map(response => {
        if (response.data && response.data.Code && response.data.Code === 404) {
          throw new Error('Transaction failed.');
        }

        return response;
      })
    )
  }

  static registerService(entity, {username, email, pwd}) {
		const hash = sha3_512(pwd);
		const data = {name: username, username: username, email:email, pwhash: hash, seedpwd: "x"};
    return this.postProtected(`${entity}/register`, data);
  }

	static getToken(username, pwd) {
		const hash = sha3_512(pwd);
		const data = {username: username, pwhash: hash};
		return this.post('token', data).pipe(map(value => {
			if(value.data.Token) {
				Storage.set('token', value.data.Token);
				Storage.set('username', username);
			}
      return value;
    }));
  }

  static validateService(entity, username) {
  	console.log(username)
    return this.getProtected(`${entity}/validate`, {
      username: username,
    }).pipe(map(value => {
      return value;
    }));
  }

  static updateAccount(data) {
    return this.postProtected('user/update', {...data});
  }

  static userAskXlm(username, hash) {
    return this.get('user/askxlm', {
      username: username ? username : Storage.get('username'),
      pwhash: hash ? hash : Storage.get('token'),
    })
  }

  static projectAll(type) {
    return this.get('project/all').pipe(
      // filter out empty projects
      map(result => result.data.filter(data => !!data.Name)),
      // TODO: fix when type is defined
      map(data => {
        if (!type || type === 'pv-solar') {
          return data;
        } else {
          // Return empty array for now to display empty content in other type projects
          return [];
        }
      })
    );
  }

  static originatorGet(id) {
    return this.get('public/user', {index: id});
  }

  static projectGet(id) {
    return this.get('project/get', {index: id});
  }

  static investorValidate() {
    return this.get('investor/validate', {
      username: Storage.get('username'),
      pwhash: Storage.get('token')
    });
  }

  static recipientValidate() {
    return this.get('recipient/validate', {
      username: Storage.get('username'), // todo remove this
      pwhash: Storage.get('token')
    });
  }

	static get(path, data) {
		return this.request("GET", path, data);
	}

	static post(path, data) {
		return this.request("POST", path, data);
	}

	static postProtected(path, data) {
		const dataWithToken = {
			...data,
			token: Storage.get('token') ? Storage.get('token') : null,
		};
		return this.post(path, dataWithToken);
	}

	static getProtected(path, data) {
		const dataWithToken = {
			...data,
			token: Storage.get('token'),
		};
		return this.get(path, dataWithToken);
	}

  static request(method, path, data) {
    return from(
      axios({
        method: method,
        url: `http://api.openx.solar/${path}`,
        params: data,
        headers: {
          'Content-Type': 'application/x-www-form/urlencoded'
        }
      })
    ).pipe(response => {
    	response.subscribe(resp => {
    		if(resp.data.Code === 401) {
					Storage.remove('token');
					Storage.remove('username');
					window.location.reload();
				}
			});
			return response;
		});
  }
}
