"use strict";

angular.module('jtt_aping')
    .config(['$provide', function ($provide) {

    $provide.value("apingDefaultSettings", {
        templateUrl: "./social_template.html",
        items: 100, //items per request
        maxItems: 100, //max items per aping
        orderBy: "timestamp",
        orderReverse: "true",
        model: "social",
        getNativeData: false,
        removeDoubles: false,
        apingApiKeys: {
            youtube: [
                {'apiKey': 'AIzaSyAa10qY61h1rMIYiel1ZXQSYDK1bnf4JgM'}
            ],
            /*instagram: [
                {'access_token': '<YOUR_INSTAGRAM_TOKEN>'}
            ],*/
            facebook: [
                {'access_token': 'EAAOwoVTURc4BAOYVL6sZBdI1mrAxmTGFicDZCZCnEYNaBVnE1MhJox03Tkpnkhv40uPUzwxfjWmsklXkbvkBSWosomSf9LtE0uY9Q1aZBZCQVNPcGI7fCO5odqv5BbXCDq7bgmlZBpsmj4LLVQwXFYBg4k8Cgc2SQZD'}
            ],
            twitter: [
                {'bearer_token': 'AAAAAAAAAAAAAAAAAAAAAARsvgAAAAAAhhnti50EiiGiDE5jwvA51ISK6Jk%3DvlV8azogo7fcKmtCbxzNQpl6KjNNZpirVmG2dZSE1GKe36eVkS'}
            ],
            /*vimeo: [
                {'access_token': '<YOUR_VIMEO_TOKEN>'}
            ],*/
            tumblr: [
                {'api_key': 'gnDI2zV8kiA9LqPwTJESi9wypYcqQ4q1EemnQqHXEoyJgqG66s'}
            ],
            /*github: [
                {'access_token': '<YOUR_GITHUB_TOKEN>'}
            ],
            openweathermap: [
                {'api_key': '<YOUR_OPENWEATHERMAP_API_KEY>'}
            ]*/
        }

    });

}]);