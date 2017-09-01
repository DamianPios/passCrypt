(function (module) {
    "use strict";
    module.factory('charArray', [function () {
            var service = {};

            service.charArray = [];

            service.createArray = function () {
                var char = [];
                for(var i = 0; i < 94; i++) {
                    char[i] = String.fromCharCode(i + 33);
                }

                char.splice(0, 15);
                char.splice(10, 7);
                char.splice(36, 6);
                char.splice(62, 4);

                char.push('Ą');
                char.push('ą');
                char.push('Ć');
                char.push('ć');
                char.push('Ę');
                char.push('ę');
                char.push('Ł');
                char.push('ł');
                char.push('Ń');
                char.push('ń');
                char.push('Ś');
                char.push('ś');
                char.push('Ó');
                char.push('ó');
                char.push('Ż');
                char.push('ż');
                char.push('Ź');
                char.push('ź');
                char.push('!');
                char.push('$');
                char.push('%');
                char.push('&');
                char.push('?');
                char.push('@');
                char.push('+', '=', '-', '_', '(', ')');

                this.charArray = char;

                for(var i = 0; i < this.charArray.length; i++) {
                    console.log(i + ': ' + this.charArray[i]);
                }
            };

            service.changeArray = function (addChar, delChar) {
                if(addChar !== undefined) {
                    var add = addChar.split(',');

                    for(var i = 0; i < add.length; i++) {
                        if(this.charArray.indexOf(add[i]) === -1) {
                            this.charArray.push(add[i]);
                        }
                    }
                }

                if(delChar !== undefined) {
                    var del = delChar.split(',');

                    for(var i = 0; i < del.length; i++) {
                        if(this.charArray.indexOf(del[i]) !== -1) {
                            this.charArray.splice(this.charArray.indexOf(del[i]), 1);
                        }
                    }
                }

                for(var i = 0; i < this.charArray.length; i++) {
                    console.log(i + ': ' + this.charArray[i]);
                }
            };

            return service;
        }]);
}(angular.module('passCrypt')));