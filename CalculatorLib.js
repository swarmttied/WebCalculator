var txtInput;
var txtResult;

window.addEventListener('load', initialize, false);

function initialize() {
	
	txtInput = document.getElementById("txtInput");
	txtResult = document.getElementById("txtResult");
	
	txtInput.value = '0';
	
	for (var i = 0; i < 10; i++) {
		document.getElementById('btn'+i).addEventListener('click', numberClick, false);
	}
	
	$("#btnPlus").on('click', plusClick);
	$("#btnMinus").on('click', minusClick);
	$("#btnClearEntry").on('click', clearEntry);
	
	$("#btnClear").on('click', function() {
		txtInput.value = '0';
		txtResult.value = 0;
	})
}

function clearEntry() {
	txtInput.value = '0';
}

function numberClick() {
	txtInput.value = txtInput.value == '0' ?
		this.innerText : txtInput.value + this.innerText;
}

function plusClick() {
	txtResult.value = Number(txtResult.value) + Number(txtInput.value);
	clearEntry();

}

function minusClick() {
	txtResult.value = Number(txtResult.value) - Number(txtInput.value);
	clearEntry();
}