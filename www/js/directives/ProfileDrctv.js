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
      controllerAs: 'profile',

      controller: function (ProfileFactory) {
        this.isEditing = false;
        this.profileSaved = ProfileFactory.get();
        this.newSkill = {
          name: 'New Skill',
          value: 50,
          type: 'Professional'
        };
        this.newEmail = 'myother@email.com';

        this.setEditMode = function(value) {
          this.isEditing = value;
          if (value === true) {
            this.profilePreview = JSON.parse(JSON.stringify(ProfileFactory.get()));
          }
          else {
            this.profileSaved = ProfileFactory.get();
          }
        };
        this.save = function() {
          console.log(this.profilePreview);
          ProfileFactory.save(JSON.parse(JSON.stringify(this.profilePreview)));
          this.setEditMode(false);
        };
        this.cancel = function() {
          this.setEditMode(false);
        };
        this.addSkill = function() {
          this.profilePreview.skills.push(JSON.parse(JSON.stringify(this.newSkill)));
          this.newSkill = {
            name: 'New Skill',
            value: 50,
            type: 'Professional'
          };
        };
        this.removeSkill = function($index) {
          this.profilePreview.skills.splice($index, 1);
        };

        this.removeEmail = function($index) {
          this.profilePreview.emails.splice($index, 1);
        };

        this.addEmail = function() {
          console.log(this.newEmail);
          this.profilePreview.emails.push(this.newEmail);
          this.newEmail = 'myother@email.com';
        };

      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });