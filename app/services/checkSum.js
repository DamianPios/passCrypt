(function (module) {

    "use strict";
    module.factory('checkSum', [function () {
            var checkSum = function (input) {
                var sum = 0;
                var temp = 0;
                for(var i = 0; i < input.length; i++) {
                    temp = Math.floor(input.charCodeAt(i) / 10);
                    console.log('charCodeAt(' + i + '): ' + input.charCodeAt(i));
                    console.log('dziesiątki: ' + temp);
                    sum += temp;
                    temp = input.charCodeAt(i) % 10;
                    console.log('jednostki: ' + temp);
                    sum += temp;
                }
//                sum = sum % 10;

                return sum;
            };

            return {
                calculate: checkSum
            };
        }]);

}(angular.module('passCrypt')));