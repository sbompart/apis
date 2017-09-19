/**
 * Created by scbr_ on 26-06-2017.
 */
'use strict';

var proyecto = angular.module('proyectoApp',[
    'ngRoute',
    'duParallax',
    'ngMaterial'
])

    .config(function($routeProvider, $locationProvider, $mdThemingProvider) {
        $routeProvider
            .when("/error", {
                templateUrl : "public/error.html",
                controller : "prueb"
            })

            .when("/", {
                templateUrl: "public/home.html",
                controller: "homeCtrl"
            })

            .otherwise({
                redirectTo: '/'
            });
        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);

        $mdThemingProvider.theme('default')
            .dark();
    });

proyecto.controller('AppCtrl', ['$scope', '$mdSidenav', '$http',
    function ($scope, $mdSidenav, $http) {
        $scope.isAdmin = false;
        $scope.sessionName = 'Saul Bompart';
        $scope.open = false;

        var a = 0;
        var tick = ['tick','tock'];
        var ticktock = function () {
          console.log(tick[0+a],":",a,tick[false+0]);
          a = !a;
        };

        ticktock();
        ticktock();
        ticktock();
        ticktock();
        ticktock();

        console.log("----AppCtrl-----")
        $http.get('/api/persons')
            .then(
                function (data) {
                   console.log("data",data)
                },
                function (err) {
                    console.log("err",err)
                }
            );
            /*.success(function (data) {
                console.log("*****",data);
            })
            .error(function (err) {
            console.log("err",err)
        });*/
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
            // $scope.open = !$scope.open;
        };

        $scope.menu = [
            {
                name: 'Usuarios',
                url: '/users',
                icon: 'perm_identity'
            },{
                name: 'Perfiles',
                url: '/perfils',
                icon: 'list'
            }
        ];

    }]);

proyecto.controller('prueb', function ($scope) {
    $scope.msg = 'PAsooo';
    console.log("pasooooo");
});

proyecto.controller('LoginCtrl', function ($scope) {
    $scope.msg = 'PAsooo';
    console.log("pasooooo");
});

proyecto.controller('homeCtrl', ['$scope', 'parallaxHelper',
function ($scope, parallaxHelper) {
    console.log("----")
    $scope.background = parallaxHelper.createAnimator(-0.3, 150, -150);
    $scope.user = {
        name: 'John Doe',
        email: '',
        phone: '',
        address: 'Mountain View, CA',
        donation: 19.99
    };
}]);