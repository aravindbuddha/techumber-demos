import { downgradeComponent } from '@angular/upgrade/static';
import { ng1AppComponent } from './app.component';

// Access global AngularJS 1.x object
export const ng1Module = angular.module('ng1Module', []);
ng1Module.component('ng1AppComponent', ng1AppComponent);
