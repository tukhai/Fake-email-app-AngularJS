/**
 * Factory: DeletedFactory
 */

angular.module('EmailApp')
	.factory('ProfileFactory', function ProfileFactory ($q, $http, $location) {
		'use strict';
		var exports = {};
		
		exports.messages = [];

		exports.goToMessage = function(id) {
			if ( angular.isNumber(id) ) {
				// $location.path('inbox/email/' + id)
				//console.log('deleted/email/' + id)
				//$location.path('deleted/email/' + id)
			}
		}

		exports.deleteMessage = function (id, index) {
			this.messages.splice(index, 1);
		}

		/*exports.getMessages = function () {
		  return $http.get('json/emails.json')
			.error(function (data) {
			  console.log('There was an error!', data);
			});
		};*/
		
		/*Still extract data from json/emails.json, but use Promises to hook up the Factory and Controller*/
		exports.getMessages = function () {
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

		return exports;
	});
