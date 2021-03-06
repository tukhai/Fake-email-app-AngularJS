/**
 * Factory: InboxFactory
 */

angular.module('EmailApp')
	.factory('InboxFactory', function InboxFactory ($q, $http, $location) {
		'use strict';
		var exports = {};
		
		exports.messages = null;
		exports.deletedMessages = [];

		exports.goToMessage = function(id) {
			if ( angular.isNumber(id) ) {
				// $location.path('inbox/email/' + id)
				console.log('inbox/email/' + id)
				$location.path('inbox/email/' + id)
			}
		}

		exports.deleteMessage = function (id, index) {
			exports.deletedMessages.push(this.messages.splice(index, 1)[0]);
		}

		/*exports.getMessages = function () {
		  return $http.get('json/emails.json')
			.error(function (data) {
			  console.log('There was an error!', data);
			});
		};*/
		
		/*Still extract data from json/emails.json, but use Promises to hook up the Factory and Controller*/
		exports.getMessagesAsync = function () {
			var deferred = $q.defer();
			return $http.get('json/emails.json')
				.success(function (data) {
				    exports.messages = data;
				    deferred.resolve(data);
				})
				.error(function (data) {
				    deferred.reject(data);
				});
			return deferred.promise;
		};
		
		exports.getMessages = function() {
			return exports.messages;
		};
		
		exports.getDeletedMessages = function() {
			return exports.deletedMessages;
		};

		return exports;
	});
