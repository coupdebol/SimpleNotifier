angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Notifications) {
	
	$scope.edit = function(id){
		alert(Notifications.get(id).display);
	};
	$scope.notifications = Notifications.all();

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
