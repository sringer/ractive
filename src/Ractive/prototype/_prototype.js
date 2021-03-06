define([
	'Ractive/prototype/get/_get',
	'Ractive/prototype/set',
	'Ractive/prototype/update',
	'Ractive/prototype/updateModel',
	'Ractive/prototype/animate/_animate',
	'Ractive/prototype/on',
	'Ractive/prototype/off',
	'Ractive/prototype/observe/_observe',
	'Ractive/prototype/fire',
	'Ractive/prototype/find',
	'Ractive/prototype/findAll',
	'Ractive/prototype/findComponent',
	'Ractive/prototype/findAllComponents',
	'Ractive/prototype/render',
	'Ractive/prototype/renderHTML',
	'Ractive/prototype/toHTML',
	'Ractive/prototype/teardown',
	'Ractive/prototype/add',
	'Ractive/prototype/subtract',
	'Ractive/prototype/toggle',
	'Ractive/prototype/merge/_merge',
	'Ractive/prototype/detach',
	'Ractive/prototype/insert'
], function (
	get,
	set,
	update,
	updateModel,
	animate,
	on,
	off,
	observe,
	fire,
	find,
	findAll,
	findComponent,
	findAllComponents,
	render,
	renderHTML,
	toHTML,
	teardown,
	add,
	subtract,
	toggle,
	merge,
	detach,
	insert
) {

	'use strict';

	return {
		get: get,
		set: set,
		update: update,
		updateModel: updateModel,
		animate: animate,
		on: on,
		off: off,
		observe: observe,
		fire: fire,
		find: find,
		findAll: findAll,
		findComponent: findComponent,
		findAllComponents: findAllComponents,
		renderHTML: renderHTML,
		toHTML: toHTML,
		render: render,
		teardown: teardown,
		add: add,
		subtract: subtract,
		toggle: toggle,
		merge: merge,
		detach: detach,
		insert: insert
	};

});