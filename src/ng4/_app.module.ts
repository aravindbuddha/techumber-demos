/* tslint:globals angular:false */
import { NG1_APP_MODULE } from '../ng1/app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { ng4AppComponent } from './_app.component'; 
declare var angular: angular.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

angular.module(NG1_APP_MODULE)
  .directive(
    'ng4-app-component',
    downgradeComponent({component: ng4AppComponent}) as angular.IDirectiveFactory
  );
console.log(downgradeComponent({component: ng4AppComponent}) as angular.IDirectiveFactory);
console.log(angular.module(NG1_APP_MODULE));

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [ 
    ng4AppComponent 
  ],
  entryComponents: [
    ng4AppComponent
  ]
})
export class AppModule {
  constructor(
    private upgrade: UpgradeModule
  ) { }
  ngDoBootstrap() {
    // This is to bootstrap ng1 applicaiton
    this.upgrade.bootstrap(document.body, [angular.module(NG1_APP_MODULE).name], { strictDi: true });
  }
}
