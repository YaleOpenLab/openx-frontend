import Storage from './Storage';
import * as axios from 'axios';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {sha3_512} from 'js-sha3';
import {DATA} from "../helpers/enums/temporary-data";

export class Http {
    static investorInvest(id, amount, seedpwd) {
        return this.postProtected('investor/invest', {
            username: Storage.get('username'),
            seedpwd: seedpwd,
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

    static registerService(entity, {username, name, email, pwd, pwhash, seedpwd}) {
        const hash = pwhash ? pwhash : sha3_512(pwd);
        const data = {name: name || username, username: username, email: email, pwhash: hash, seedpwd: entity === "user" ? pwd : seedpwd};
        return this.postProtected(`${entity}/register`, data, );
    }

    static registerEntityService(entity, {username, name, email, pwd, pwhash, seedpwd}) {
        const hash = pwhash ? pwhash : sha3_512(pwd);
        const data = {name: name ? name : username, entityType:entity, username: username, email: email, pwhash: hash, seedpwd: seedpwd};
        return this.postProtected(`entity/register`, data, );
    }

    static getToken(username, pwd) {
        const hash = sha3_512(pwd);
        const data = {username: username, pwhash: hash};
        return this.post('token', data).pipe(map(value => {
            if (value.data.Token) {
                Storage.set('token', value.data.Token);
                Storage.set('username', username);
            }
            return value;
        }));
    }

    static validateService(entity, username) {
        if (!entity || !username) {
            throw("Unhandled Error");
        }
        return this.getProtected(`${entity}/validate`, {
            username: username,
        }, ).pipe(map(value => {
            return value;
        }));
    }

    static getDashboard(entity, username) {
        if (!entity || !username) {
            throw("Unhandled Error");
        }
        return this.getProtected(`${entity}/dashboard`, {
            username: username,
        }, ).pipe(map(value => {
            return value;
        }));
    }

    static validateEntityService(entity, username) {
        if (!entity || !username) {
            throw("Unhandled Error");
        }
        return this.getProtected(`entity/validate`, {
            username: username,
        }, ).pipe(map(value => {
            return value;
        }));
    }

    static updateAccount(data) {
        let modifiedValues = {};
        if(data.newPassword){
            modifiedValues = {pwhash: sha3_512(data.newPassword)}
        }

        const sendData = {
            ...data,
            ...modifiedValues
        };

        return this.postProtected('user/update', sendData, );
    }

    static getUserRoles(data) {
        return this.getProtected('user/roles', {...data});
    }

    static progress(data) {
        return this.postProtected('user/progress', {...data});
    }

    static userAskXlm(username, hash) {
        return this.get('user/askxlm', {
            username: username ? username : Storage.get('username'),
            pwhash: hash ? hash : Storage.get('token'),
        })
    }

    static projectAll(type) {
        return this.getProtected('project/all').pipe(
            map(result => {
                return result.data
            }),
            map(data => {
                if (!type || type === 'pv-solar') {
                    return data.map(project => {
                        return {...project, ...DATA};
                    });
                } else {
                    return [];
                }
            })
        );
    }

    static originatorGet(id) {
        return this.get('public/user', {index: id});
    }

    static projectGet(id) {
        return this.getProtected('project/get', {username: Storage.get("username"), index: id}).pipe(
            map(result => {
                return {
                    data: {
                        ...result.data,
                        ...DATA,
                    }
                }
            })
        );
    }

    // Manage Funds

    static manageTransfer = (values) => {
        return this.getProtected('user/sendxlm', {
            username: Storage.get('username'),
            ...values,
        });

    };

    static manageSweep = (values) => {
        return this.getProtected('user/sweep', {
            username: Storage.get('username'),
            ...values,
        });

    };

    static manageP2P = (values) => {
        return this.getProtected('user/trustasset', {
            username: Storage.get('username'),
            ...values,
        });

    };

    static manageSeed = (values) => {
        return this.getProtected('user/sendrecovery', {
            username: Storage.get('username'),
            ...values,
        });

    };


    static get(path, data, version) {
        return this.request("GET", path, data, version);
    }

    static post(path, data, version) {
        return this.request("POST", path, data, version);
    }

    static postProtected(path, data, version) {
        const dataWithToken = {
            ...data,
            token: Storage.get('token') ? Storage.get('token') : null,
        };
        return this.post(path, dataWithToken, version);
    }

    static getProtected(path, data, version) {
        const dataWithToken = {
            ...data,
            token: Storage.get('token'),
        };
        return this.get(path, dataWithToken, version);
    }

    static request(method, path, data, version = 'api2') {
        return from(
            axios({
                method: method,
                url: `https://${version}.openx.solar/${path}`,
                params: data,
                headers: {
                    'Content-Type': 'application/x-www-form/urlencoded'
                }
            })
        ).pipe(response => {

            response.subscribe(resp => {
                if (resp.data.Code === 401) {
                    // Storage.remove('token');
                    // Storage.remove('username');
                    // window.location.reload();
                }
            }, error => {
                if (error.response && error.response.status === 401) {
                    return {data: {Code: 401}}
                }
            });

            return response;
        });
    }
}
