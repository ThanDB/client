import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

let users = [
  new User('admin@admin.com', 'admin'),
  new User('user1@gmail.com', 'a23')
];

@Injectable()
export class AuthenticationService {
     private _loginUrl: string = 'http://localhost:8080/auth';

  constructor(
    private _router: Router, private _http: Http) {}

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['/login']);
  }

  login(user: User) {
    let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser) {
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this._router.navigate(['/home']);
      return true;
    }
    return false;

  }

   checkCredentials() {
    if (localStorage.getItem('user') === null) {
        this._router.navigate(['/login']);
    }
  } 

    getAuthenRestful() {
        return this._http.get(this._loginUrl).map(res => res.json());
    }
    postAuthenRestful(user: User) {
        let body = JSON.stringify({ 'email': user.email, 'password': user.password });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: 'post' });

        return this._http.post(this._loginUrl, body, options)
            .map(res => res.json());
    }
}