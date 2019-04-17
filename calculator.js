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

	if(num==""){

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

// printoutput('12345');


function reversenumberformat(num){

	return Number(num.replace(/,/g,''));
}
// alert(reversenumberformat(getoutput()));

var operator = document.getElementsByClassName("operator")
for(var i=0;i<operator.length;i++)
{
	operator[i].addEventListener("click",function(){
		alert("the operator clicked:"+this.id);
	})
}

var number = document.getElementsByClassName("number")
for(var i=0;i<number.length;i++)
{
	number[i].addEventListener("click",function(){
		alert("the Number clicked:"+this.id);
	})
}
