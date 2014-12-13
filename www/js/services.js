angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Notifications', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var notifications = [
    { 
      id: 0, 
      display: 'Scruff McGruff',
      icon: 'ion-android-checkbox' 
    },
    { 
      id: 1, 
      display: 'G.I. Joe',
      icon: 'ion-android-checkbox' 
    },
    { 
      id: 2, 
      display: 'Miss Frizzle',
      icon: 'ion-android-checkbox-blank' 
    },
    { 
      id: 3, 
      display: 'Ash Ketchum',
      icon: 'ion-android-checkbox' 
    }
  ];

  return {
    all: function() {
      return notifications;
    },
    get: function(id) {
      // Simple index lookup
      return notifications[id];
    }

  }
})




;//end of file