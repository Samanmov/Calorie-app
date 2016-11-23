angular.module('starter', ['ionic', 'firebase', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('meny', {
    url: '/meny',
    abstract: true,
    templateUrl: 'templates/meny.html'
  })

  // Each tab has its own nav history stack:

  .state('meny.hem', {
    url: '/hem',
    views: {
      'meny-hem': {
        templateUrl: 'templates/meny-hem.html'
      }
    }
  })

  .state('meny.blogg', {
      url: '/blogg',
      views: {
        'meny-blogg': {
          templateUrl: 'templates/meny-blogg.html',
          controller: 'bloggCtrl'
        }
      }
    })
   .state('meny.add', {
      url: '/add',
      views: {
        'meny-blogg': {
          templateUrl: 'templates/meny-blogg-add.html',
          controller: 'saveCtrl'
        }
      }
    })

  
  .state('meny.singleItem', {
      url: '/blog/:id',
      views: {
        'meny-blogg': {
          templateUrl: 'templates/meny-blogg-item.html',
          controller: 'bloggItem'
        }
      }
    })
  .state('meny.editItem', {
      url: '/edit/:id',
      views: {
        'meny-blogg': {
          templateUrl: 'templates/meny-blogg-edit.html',
          controller: 'editCtrl'
        }
      }
    })

  .state('meny.kontakt', {
      url: '/kontakt',
      views: {
        'meny-kontakt': {
          templateUrl: 'templates/meny-kontakt.html',
          //controller: 'ContactCtrl'
        }
      }
    })
    .state('meny._id', { 
    url: '/livsmedel/:id',
    views: {
      'meny-livsmedel': {
        templateUrl: 'templates/meny-livsmedel-id.html',
        controller: 'showItemCtrl'
      }
    }
  })
    

  .state('meny.livsmedel', { 
    url: '/livsmedel',
    views: {
      'meny-livsmedel': {
        templateUrl: 'templates/meny-livsmedel.html',
        controller: 'searchCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/meny/hem');

});
