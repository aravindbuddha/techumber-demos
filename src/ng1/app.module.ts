import { APP_COMPONENT_NAME, ng1AppComponent } from './app.component';
export const NG1_APP_MODULE = 'ng1AppModule';
import { downgradeComponent } from '@angular/upgrade/static';
import { ng4AppComponent } from '../ng4/_app.component';


export default angular
        .module(NG1_APP_MODULE, [])
        .component(APP_COMPONENT_NAME, ng1AppComponent)
        // .directive(
        // 'ng4-app-component',
        // downgradeComponent({ component: ng4AppComponent }) as angular.IDirectiveFactory
        // );

