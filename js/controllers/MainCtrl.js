
(function () {
    'use strict';

    /*global angular, Modernizr */
    angular
        .module('MainPage', [])
        .controller('MainController', [ '$scope', function ($scope) {

            $scope.mainMsg = "Testing WebRTC";

            $scope.isWebRtcSupported = !!window.RTCPeerConnection ||
                !!window.mozRTCPeerConnection || !!window.webkitRTCPeerConnection;

            console.log(Modernizr.websockets);
            $scope.isWebSocketSupported = Modernizr.websockets;
        }]);

}());