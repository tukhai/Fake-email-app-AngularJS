/**
 * Controller: InboxCtrl
 */
angular.module('EmailApp')
    /*.controller('InboxCtrl',
		function InboxCtrl ( ) {
			'use strict';
			console.log('Inbox Loaded!')
		});*/
		
	/*.controller('InboxCtrl',
		function InboxCtrl ( $scope, InboxFactory ) {
			'use strict';
			$scope.meta = {
				title: "My Inbox"
			};
			InboxFactory.getMessages()
				.success(function(jsonData, statusCode){
					console.log('The request was successful!', statusCode);
					console.dir(jsonData);
					// Now add the Email messages to the controller's scope
					$scope.data = {
					    emails: jsonData
					};
				});
		});*/
		
	/*.controller('InboxCtrl',
		function InboxCtrl ( $scope ) {
			'use strict';
			$scope.meta = {
				title: "My Inbox"
			};
		});*/
		
	.controller('InboxCtrl',
		function InboxCtrl ( ) {
		    'use strict';

		    this.title = "My Inbox";
		});