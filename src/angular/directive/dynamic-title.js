(function () {
  //'use strict';

  angular.module('nx.widget')
    .directive('dynamicTitle', dynamicTitle);

  /** @ngInject */
  function dynamicTitle($rootScope, $timeout) {
    return {
      restrict: 'A',
      link: function (scope, element) {

        var listener = function (event, toState) {

          var title = 'Default title';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function () {
            //element.text(title);

            //todo:hook for wechat:
            changeTitle(title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }


  function changeTitle(title) {
    var body = document.getElementsByTagName('body')[0];
    document.title = title;
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "favicon.ico");
    iframe.style.visibility='hidden';
    iframe.style.position='absolute';
    iframe.style.zIndex=-1;

    iframe.addEventListener('load', function () {
      setTimeout(function () {
        iframe.removeEventListener('load',arguments.callee);
        document.body.removeChild(iframe);
      }, 0);
    });

    document.body.appendChild(iframe);
  }


})();
