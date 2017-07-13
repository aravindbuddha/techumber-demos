export const APP_COMPONENT_NAME = 'ng1AppComponent';

// before angular 1.5 component 

export const ng1AppComponent = {
	template: `
		<ng4-app-component></ng4-app-component>
		<h1>Wow!! this is Angualr1 component. </h1>
	`,
	controllerAs: '$ctrl',
	controller: class ng1AppComponent {
		constructor() {}
	}
};


