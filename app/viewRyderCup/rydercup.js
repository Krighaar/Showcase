'use strict';

angular.module('myApp.rydercup', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/rydercup', {
            templateUrl: 'viewrydercup/rydercup.html',
            controller: 'ViewRydercupCtrl'
        });
    }])

    .controller('ViewRydercupCtrl', ['$scope', function ($scope) {
        var Players = [
            {name: "Peter", HCP: "7.8", antalRC: "1", nickName: "Fætter", remarks:"Rookie", team: "sj", club: "vgk"},
            {name: "Casper", HCP: "12,9", antalRC: "3", nickName: "Como", remarks:"Captain", team: "sj", club: "hansted"},
            {name: "Martin von Bülow", HCP: "12,9", antalRC: "3", nickName: "von Bülow", remarks:"", team: "sj", club: "ledrebord"},
            {name: "Jeppe Schack", HCP: "1,9", antalRC: "3", nickName: "Skalle", remarks:"", team: "sj", club: "ccc"},
            {name: "Flemming Johannesen", HCP: "6,9", antalRC: "3", nickName: "Flemming", remarks:"", team: "sj", club: "vgk"},

        ];


        $scope.players = Players;
    }])

    .filter('remark', function () {
        return function (input) {
            return (input === "Captain") ? "glyphicon glyphicon-triangle-top" : "";
        }
    });
/**
 * Created by Peter on 28-04-2015.
 */

