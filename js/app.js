angular.module("palindromeApp", []);

angular.module("palindromeApp").controller("palindromeCtrl", function($scope){
	$scope.resultado = '';

	$scope.isPalindrome = function(string) {
		var novaString = string.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
  		var stringInvertida = novaString.split("").reverse().join("");

	  	if(novaString === stringInvertida){
	    	$scope.resultado = "Sim, isso é um palindromo!";
	  	} else {
	  		$scope.resultado = "Não, isso não é um palindromo!";
	  	}
	}	

});