export const APP_COMPONENT_NAME = 'ng1AppComponent';

// before angular 1.5 component 
export class ng1AppCtrl  {
	constructor() {}
}

export const ng1AppComponent = {
	template: `
		 <ng4-app-component></ng4-app-component>
		<h1>Wow!! this is Angualr1 component. </h1>
	`,
	controller: ng1AppCtrl
};


