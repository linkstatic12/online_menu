(function () {
  'use strict';

  angular
    .module('dishes')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Dishes',
      state: 'dishes',
      type: 'dropdown',
      roles: ['admin']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'dishes', {
      title: 'List Dishes',
      state: 'dishes.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'dishes', {
      title: 'Create Dish',
      state: 'dishes.create',
      roles: ['admin']
    });
  }
})();
