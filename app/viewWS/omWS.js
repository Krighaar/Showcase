'use strict';

angular.module('myApp.omWS', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/om', {
            templateUrl: 'viewWS/omWS.html',
            controller: 'ViewWSCtrl'
        });
    }])

    .controller('ViewWSCtrl', [function() {

    }]);/**
 * Created by Peter on 28-04-2015.
 */
