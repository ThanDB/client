import { Component, OnInit } from '@angular/core';
import {AuthenticationService, User} from './authentication.service';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login.template.html',
    styleUrls: ['login.css'],
     providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
    public user = new User('', '');
    public errorMsg = '';

    constructor(
        private _service: AuthenticationService) {}

    login() {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    }

    ngOnInit() { }

}