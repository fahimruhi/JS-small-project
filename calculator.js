function gethistory(){

	return document.getElementById("history-value").innerText;
}

function printhistory(num){

	document.getElementById("history-value").innerText=num;
}

//printhistory("10");

function getoutput(){

	return document.getElementById("output-value").innerText;
}

function printoutput(num){

	if(num==''){

		document.getElementById("output-value").innerText=num;
	}
	else{

		document.getElementById("output-value").innerText=getformattednumber(num);

	}

	
}

//printoutput('100');


function getformattednumber(num){

	var n= Number(num);
	var value= n.toLocaleString("en");
	return value;
}

printoutput('45874236');