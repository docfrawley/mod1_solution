(function (){

'use strict';

  angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter){
  $scope.name ="";
  $scope.displayState = function(){
    var totalNum = calculateN($scope.name);
    if (totalNum==0){
      $scope.whatDisplay = "Please enter data first";
    } else if (totalNum>0 && totalNum < 4) {
      $scope.whatDisplay = "Enjoy!";
    } else {
      $scope.whatDisplay = "Too Much!";
    }
  }
};

  function calculateN(string){
    var tempArray = string.split(',');
    var finalArray = [];
    for (var i=0; i<tempArray.length; i++){
      tempArray[i] = tempArray[i].replace(/\s/g, '');
      var numValue = calValue(tempArray[i]);
      if (numValue > 0 ){
        finalArray.push(tempArray[i]);
      }
    }
    console.log(finalArray.length,"...",finalArray);

    return finalArray.length;

  };

  function calValue(string){
    var totalStringValue = 0;
    for (var i=0; i<string.length; i++){
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  };


})();
