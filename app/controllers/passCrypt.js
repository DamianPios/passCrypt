(function (module) {
    "use strict";
    module.controller('passCrypt',
        ['$scope', 'cryptService', 'charArray', 'pages', 'toaster', '$timeout',
            function ($scope, cryptService, charArray, pages, toaster, $timeout) {

                $scope.otherAdd = false;
                $scope.array = '';

                var init = function () {
                    $scope.charDel = '';
                    $scope.charAdd = '';
                };

                var readPages = function () {
                    $scope.services = pages.data();
                };

                var prepareChars = function () {
                    var array = charArray.charArray.slice(0);

                    for(var i = 0; i < (array.length / 10); i++) {
                        var j = (i + 1) * 10;
                        array.splice(j, 0, '\n');
                    }

                    $scope.array = array.join(' ');
                };

                charArray.createArray();
                prepareChars();
                readPages();

                $scope.generate = function (_service, _login, _pass) {
                    var service = _service.name.toString();
                    var login = _login.toString();
                    var pass = _pass.toString();
                    $scope.output = cryptService.crypt(service, login, pass);
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

                $scope.changeField = function (field) {
                    if(field === 'other') {
                        $scope.otherAdd = true;
                        $scope.service = '';
                        $('#serviceInput').focus();
                    } else {
                        $scope.otherAdd = false;
                        readPages();
                    }

                };

                $scope.add = function (newService) {
                    if(newService == '') {
                        toaster.warning('Nazwa nie może być pusta');
                        $('#serviceInput').focus();
                    } else {
                        var canAdd;

                        for(var i = 0; i < $scope.services.length; i++) {
                            if($scope.services[i].name == newService) {
                                canAdd = false;
                                toaster.warning('Serwis już instnieje!');
                                $scope.service = $scope.services[i];
                                $scope.changeField(true);
                                break;
                            } else {
                                canAdd = true;
                            }
                        }

                        if(canAdd) {
                            var id = pages.addPage(newService);
                            $scope.changeField(true);
                            $scope.service = $scope.services[id];
                            toaster.info('Serwis dodany');
                        }
                    }
                };

                $scope.cancel = function () {
                    $scope.changeField(true);
                    $scope.service = $scope.services[0];
                };

                $scope.delete = function (idx) {
                    pages.deletePage(idx);
                    readPages();
                    $scope.service = $scope.services[0];
                };

                $scope.toaster = function () {

                    if($scope.crypt.$invalid) {
                        $('#generate').prop('disabled', true);
                        $timeout(function () {
                            $('#generate').prop('disabled', false);
                        }, 5500);

                        var msg = 'Wypełnij ';
                        if($scope.crypt.login.$invalid) {
                            if($scope.crypt.pass.$invalid) {
                                msg += 'pola login i hasło';
                            } else {
                                msg += 'pole login';
                            }
                        } else {
                            msg += 'pole hasło';
                        }

                        msg += '!';
                        toaster.error(msg);
                    }
                };
            }]);
}(angular.module('passCrypt')));