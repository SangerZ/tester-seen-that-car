angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.camera', {
    url: '/page2',
    views: {
      'tab3': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      }
    }
  })

  .state('tabsController.history', {
    url: '/page3',
    views: {
      'tab4': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.explore', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/explore.html',
        controller: 'exploreCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.myFeed', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/myFeed.html',
        controller: 'myFeedCtrl'
      }
    }
  })

  .state('friendsList', {
    url: '/page9',
    templateUrl: 'templates/friendsList.html',
    controller: 'friendsListCtrl'
  })

  .state('filtering', {
    url: '/page10',
    templateUrl: 'templates/filtering.html',
    controller: 'filteringCtrl'
  })

$urlRouterProvider.otherwise('/page7')


});