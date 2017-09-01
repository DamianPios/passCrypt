(function (module) {
    "use strict";

    module.factory('cryptService', ['charArray', function (charArray) {

            var service = {};

            service.crypt = function (str1, str2) {
                var strtemp = str1 + str2;
                var str = [];

                for(var i = 0; i < strtemp.length; i++) {
                    str[i] = (strtemp.charCodeAt(i) + str1.charCodeAt(i % str1.length));
                }

                for(var i = 0; i < str.length; i++) {

                    str[i] = charArray.charArray[str[i] % charArray.charArray.length];
                }

                return str = str.join('');
            };

            return service;
        }]);
}(angular.module('passCrypt')));