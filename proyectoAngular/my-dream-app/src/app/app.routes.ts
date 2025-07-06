
import { Routes } from '@angular/router';
import { About } from './about/about';
import { HelloWorld } from './hello-world/hello-world';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'hello', component: HelloWorld }
];
