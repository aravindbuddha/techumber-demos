// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import AudioEndedModule from './audio-ended';
import AudioEndedController from './audio-ended.controller';
import AudioEndedComponent from './audio-ended.component';
import AudioEndedTemplate from './audio-ended.html';

describe('AudioEnded', ()=>{
	let $rootScope,
	makeController;

	beforeEach(angular.mock.module(AudioEndedModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new AudioEndedController();
		};
	}));

	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});

	describe('Controller', ()=>{
		// test your controller here

		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			let controller = makeController();

			expect(controller).to.have.property('name');
		});
	});

	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}

		it('should have name in template [REMOVE]', ()=>{
			expect(AudioEndedTemplate).to.match(/{{\s?vm\.name\s?}}/g);
		});
	});


	describe('Directive', ()=>{
			// test the component/directive itself
			let directive = AudioEndedDirective();

			it('should use the right template',()=>{
				expect(directive.template).to.equal(AudioEndedTemplate);
			});

			it('should use controllerAs', ()=>{
				expect(directive).to.have.property('controllerAs');
			});

			it('should use the right controller', ()=>{
				expect(directive.controller).to.equal(AudioEndedController);
			});
	});
});
