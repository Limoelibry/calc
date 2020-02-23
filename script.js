const  inputCalc = document.querySelector('.up'),
	   resultCalc = document.querySelector('.bottom');

function input(i){
	inputCalc.value = inputCalc.value + i

}
function result(){
	if(undefined == eval(inputCalc.value)){
		resultCalc.value = '0,00';
		inputCalc.value = '0,00';
	}if( eval(inputCalc.value) == Infinity){

		resultCalc.value = '0,00';
		inputCalc.value = 'Нельзя поделить на ноль';

	}
	resultCalc.value = eval(inputCalc.value);
	inputCalc.value = eval(inputCalc.value);

}
function backspace(){

	inputCalc.value = inputCalc.value.substring(0,inputCalc.value.length-1);

}
function resetCalc(){

	inputCalc.value = inputCalc.value.substring(0,inputCalc.value.length-inputCalc.value.length);
	resultCalc.value = resultCalc.value.substring(0,resultCalc.value.length-resultCalc.value.length);



}

