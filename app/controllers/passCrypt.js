(function (module) {
    "use strict";
    module.controller('passCrypt', ['$scope', 'cryptService', 'charArray', function ($scope, cryptService, charArray) {


            var prepareChars = function () {
                var array = charArray.charArray.slice(0);

                for(var i = 0; i < (array.length / 10); i++) {
                    var j = (i + 1) * 10;
                    array.splice(j, 0, '\n');
                }

                $scope.array = array.join(' ');
            };

            $scope.array = '';

            charArray.createArray();
            prepareChars();



            $scope.generate = function (_login, _pass) {
                var login = _login.toString();
                var pass = _pass.toString();
                $scope.output = cryptService.crypt(login, pass);
            };

            $scope.changeArray = function (addChar, delChar) {
                charArray.changeArray(addChar, delChar);
                init();
                prepareChars();
            };

            $scope.restore = function () {
                charArray.createArray();
                init();
                prepareChars();
            };

            var init = function () {
                $scope.charDel = '';
                $scope.charAdd = '';
            };



        }]);
}(angular.module('passCrypt')));