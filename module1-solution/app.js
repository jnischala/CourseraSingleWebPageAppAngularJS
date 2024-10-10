(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageColor = "black";

        $scope.checkLunch = function () {
            if (!$scope.lunchItems.trim()) {
                $scope.message = "Please enter data first";
                $scope.messageColor = "red";
            } else {
                var items = $scope.lunchItems.split(',').filter(item => item.trim().length > 0);
                if (items.length <= 3) {
                    $scope.message = "Enjoy!";
                    $scope.messageColor = "green";
                } else {
                    $scope.message = "Too much!";
                    $scope.messageColor = "green";
                }
            }
        };
    }
})();
