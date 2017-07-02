/**
 * Directive: Deleted
 */
angular.module('EmailApp')
  .directive('profile', function profile () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/directives/profile.tmpl.html",
      controllerAs: 'deleted',

      controller: function (InboxFactory) {
        
        this.messages = [];
			
		this.messages = InboxFactory.getDeletedMessages();
		console.log(this.messages);
      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });