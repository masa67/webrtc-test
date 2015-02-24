
(function () {
    'use strict';

    /*global angular */
    angular
        .module('MainPage', [])
        .controller('MainController', [ '$scope', function ($scope) {

            $scope.mainMsg = "Testing WebRTC";

            $scope.isWebRtcSupported = !!window.RTCPeerConnection ||
                !!window.mozRTCPeerConnection || !!window.webkitRTCPeerConnection;
        }]);

}());