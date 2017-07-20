import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule,downgradeComponent } from '@angular/upgrade/static';
import { ng4AppComponent } from './_app.component'; 
import { ng1Module } from '../ng1/app.module';

// Downgrade Angular components to support in AngualrJs
ng1Module.directive('ng4AppComponent', downgradeComponent({component: ng4AppComponent}));


@NgModule({
  declarations: [
    ng4AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    ng4AppComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [ng1Module.name]);
  }
}