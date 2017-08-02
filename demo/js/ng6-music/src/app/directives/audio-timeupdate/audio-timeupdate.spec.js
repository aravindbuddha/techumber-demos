// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import AudioTimeupdateModule from './audio-timeupdate';
import AudioTimeupdateController from './audio-timeupdate.controller';
import AudioTimeupdateComponent from './audio-timeupdate.component';
import AudioTimeupdateTemplate from './audio-timeupdate.html';

describe('AudioTimeupdate', ()=>{
	let $rootScope,
	makeController;

	beforeEach(angular.mock.module(AudioTimeupdateModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new AudioTimeupdateController();
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
			expect(AudioTimeupdateTemplate).to.match(/{{\s?vm\.name\s?}}/g);
		});
	});


	describe('Directive', ()=>{
			// test the component/directive itself
			let directive = AudioTimeupdateDirective();

			it('should use the right template',()=>{
				expect(directive.template).to.equal(AudioTimeupdateTemplate);
			});

			it('should use controllerAs', ()=>{
				expect(directive).to.have.property('controllerAs');
			});

			it('should use the right controller', ()=>{
				expect(directive.controller).to.equal(AudioTimeupdateController);
			});
	});
});
