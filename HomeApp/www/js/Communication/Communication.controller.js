'use strict';

angular.module('starter')
    .controller('CommunicationCtrl', function($scope, $timeout, $http, PhoneService) {

        $scope.sendMessage = _sendMessage;
        $scope.message = {
            text: '',
            sentMessages: [],
            recipient:''
        }

        function _sendMessage() {
            if ($scope.message.text) {
                PhoneService.sendMessage($scope.message.text, $scope.message.recipient);
                $scope.message.sentMessages.push('User to ' + $scope.message.recipient + ': ' + $scope.message.text);
                $scope.message.text = '';
            }
        }
    });
