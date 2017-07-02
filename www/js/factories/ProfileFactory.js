/**
 * Factory: DeletedFactory
 */

angular.module('EmailApp')
	.factory('ProfileFactory', function ProfileFactory ($q, $http, $location) {
		'use strict';
		var exports = {};

		exports.save = function(newProfile) {
			exports.profile = newProfile;
		};

		exports.get = function() {
			return exports.profile;
		}
		
		exports.profile = {
			avatarUrl: 'http://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg',
			name: 'Gabriel Chin',
			title: 'UI designer, Product developer',
			about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies nibh eget magna gravida, aliquam interdum nisi fringilla ultricies nibh eget magna.',
			phoneNumber: '+65 97712522',
			emails: [
				'gabriel.chin@clefintelligence.com', 
				'gabrielchin@hotmail.com'
			],
			skills: [
				{
					name: 'ADOBE XD',
					value: 30,
					type: 'Professional'
				},
				{
					name: 'ADOBE PHOTOSHOP',
					value: 40,
					type: 'Professional'
				},
				{
					name: 'MICROSOFT EXCEL',
					value: 50,
					type: 'Professional'
				},
				{
					name: 'C++',
					value: 90,
					type: 'Professional'
				},
				{
					name: 'LEADERSHIP',
					value: 70,
					type: 'Personal'
				},
				{
					name: 'COMMUNICATION',
					value: 80,
					type: 'Personal'
				},
				{
					name: 'TEAMWORK',
					value: 90,
					type: 'Personal'
				}
			]
		};

		return exports;
	});
