module("Calculator Test Suit", {setup: function(){initialize();}});

test("Btn5 Click Test", function(assert){
	assert.expect(1);	
	var btn = $("#btn5").trigger("click");
	var result = txtInput.value;
	var expected = "5";
	assert.equal(result, expected, "Epected value: " + expected + " Actual value: " + result);
});

test("All Buttons Test", function(){
	var buttonQuantity = 10;
	expect(buttonQuantity * 2);
	for (var i=0; i < buttonQuantity; i++) {
		var btn = document.getElementById('btn' + i);
		$(btn).trigger('click');
		var result = txtInput.value[txtInput.value.length-1];
		var expected = String(i);
		equal(result, expected, 'Expected value: ' + expected +
			' Actual value: ' + result);
		var expectedLength = i < 2? 1 : i;
		equal(txtInput.value.length, expectedLength,
			'Expected string length: ' + expectedLength +
			' Actual value: ' + txtInput.value.length);
	}
});

test("Add Test", function(){
	expect(1);
	txtInput.value = '10';
	txtResult.value = '20';
	var btnPlus = document.getElementById('btnPlus');
	$(btnPlus).trigger('click');
	var expected = '30';
	equal(txtResult.value, expected, 'Expected value: ' + expected + 
	' Actual value: ' + txtResult.value);
	
});

test("Subtract test", function(){
	expect(1);
	txtInput.value = '10';
	txtResult.value = '20';
	var btnMinus = document.getElementById('btnMinus');
	$(btnMinus).trigger('click');
	var expected = '10';
	equal(txtResult.value, expected, 'Expected value: ' + expected +
		' Actual value: ' + txtResult.value);
});

test("Clear entry test", function(){
	expect(1);
	txtInput.value = '10';
	$("#btnClearEntry").trigger('click');
	var expected = '0';
	equal(txtInput.value, expected, 'Expected value: ' + expected +
		' Actual value: ' + txtInput.value);	
});


test("Clear test", function(){
	expect(2);
	txtInput.value = '10';
	$("#btnClear").trigger('click');
	var expected = '0';
	equal(txtInput.value, expected, 'Expected value: ' + expected +
		' Actual value: ' + txtInput.value);	
	equal(txtResult.value, expected, 'Expected value: ' + expected +
		' Actual value: ' + txtInput.value);	
});