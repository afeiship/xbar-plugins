# angular-dynamic-title
AngularJS directive to dynamically change page title using angular-ui-router.


## Usage:
+ bower install `afeiship/angular-dynamic-title`
+ html part:
```html
<title dynamic-title>Title</title>


<a href="javascript:;" ui-sref="state1">State1 page</a>
<a href="javascript:;" ui-sref="state2">State2 page</a>

```

+ ui-router config:
```javascript
var TestModule = angular.module('TestApp', ['ui.router','nx.widget'])
    .config(function ($stateProvider, $urlRouterProvider) {
      //
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("/state1");
      //
      // Now set up the states
      $stateProvider
        .state('state1', {
          url: "/state1",
          templateUrl: "partials/state1.html",
          data:{
            pageTitle:'State1 page title11111'
          }
        })
        .state('state2', {
          url: "/state2",
          templateUrl: "partials/state2.html",data:{
            pageTitle:'State2 page title222222'
          }
        });
    })
    .controller('MainCtrl', function ($scope) {
      console.log('initial ctrl!');
    });
```


## Resources:
+ http://stackoverflow.com/questions/23813599/set-page-title-using-ui-router
+ http://stackoverflow.com/questions/20183222/updating-title-tag-using-angularjs-and-ui-router
