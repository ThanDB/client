import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent }    from './login.component';
import { PrivateComponent }    from './private.component';

export const routes: RouterConfig = [
  { path: '', component: LoginComponent },
  { path: 'home', component: PrivateComponent }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
