/**
 * Directive: Deleted
 */
angular.module('EmailApp')
  .directive('deleted', function deleted () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/directives/deleted.tmpl.html",
      controllerAs: 'deleted',

      controller: function (InboxFactory) {
        this.messages = [];
        this.messages = InboxFactory.getDeletedMessages();
      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });