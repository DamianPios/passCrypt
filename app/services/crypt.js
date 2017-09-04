(function (module) {
    "use strict";

    module.factory('cryptService', ['charArray', function (charArray) {

            var service = {};

            service.crypt = function (str1, str2, str3) {
                var strCrypt = str1 + str2;
                var strtemp = str2 + str1 + str3;
                var str = [];

                console.log(strCrypt);
                console.log(strtemp);

                for(var i = 0; i < strtemp.length; i++) {
                    str[i] = (strtemp.charCodeAt(i) + strCrypt.charCodeAt(i % strCrypt.length));
                }

                for(var i = 0; i < str.length; i++) {

                    str[i] = charArray.charArray[str[i] % charArray.charArray.length];
                }

                return str = str.join('');
            };

            return service;
        }]);
}(angular.module('passCrypt')));