(function (module) {
    "use strict";
    module.factory('pages', [function () {

            var pages = [
                {
                    name: 'facebook'
                }, {
                    name: 'instagram'
                }, {
                    name: 'gmail'
                }, {
                    name: 'other'
                }
            ];
            var data = function () {
                return pages;
            };


            var addPage = function (page) {

                pages[pages.length - 1] = {name: page};


                pages.push({name: 'other'});

                return pages.length - 2;
            };

            var deletePage = function (idx) {
                pages.splice(idx, 1);
                console.log(pages);
            };

            return {
                data: data,
                addPage: addPage,
                deletePage: deletePage
            };
        }]);
}(angular.module('passCrypt')));