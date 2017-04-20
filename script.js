angular.module('Scoreboard', ['ngMaterial'])

.controller('ScoreboardController', ['$scope', function($scope) {
    $scope.scores = [0, 0];

    $scope.increment = function(index) {
        $scope.scores[index]++;
    };

    $scope.decrement = function(index) {
        $scope.scores[index]--;
    };

    $scope.reset = function() {
        for (var i = 0; i < $scope.scores.length; i++) {
            $scope.scores[i] = 0;
        }
    };
}]);