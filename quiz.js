//select all element
const start = document.getElementById("start"); 

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");

const timegauge = document.getElementById("timegauge");

const progress = document.getElementById("progress");

const divscore = document. getElementById("score");

const emoji = document.getElementById("emoji");

// create questions

let questions = [

	{
		question: "choose one??", 
		imgsrc: "calculator.png", 
		choiceA: "right",  
		choiceB: "wrong", 
		choiceC: "wrong",
		correct: "A" 

	},

	{
		qusetion: "", 
		imgsrc: " ", 
		choiceA: "",  
		choiceB: "", 
		choiceC: "",
		correct: ""

	}];

// create some variables

const lastQuestionIndex= questions.length-1;
let runningQuesationIndex = 0;
const questionTime= 10;
const guageWidth = 150;
const gaugeProgressUnit= guageWidth/ questionTime;
let count = 0;
let TIMER;
let score=0;





// render a question
function questionRender(){
	let q = questions[runningQuesationIndex];

	question.innerHTML = "<p>" + q.question + "</p>";
	// qImg. innerHTML = "<img src=" + q.imgSrc + ">";
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
}


start.addEventListener("click",startQuiz);

//start quiz
function startQuiz(){

	start.style.display= "none";
	questionRender();
	quiz.style.display= "block";
	renderProgress();
	renderCounter();
	TIMER = setInterval(renderCounter,1000);
}




// render progress
function renderProgress(){

	for(let qIndex =0; qIndex <= lastQuestionIndex; qIndex++ ){
		progress.innerHTML += "<div class='prog' id=" + qIndex +"</div>";
	}
}


//counter render

function renderCounter(){

	if( count <= questionTime){

		counter.innerHTML = count;
		timegauge.style.width= count * gaugeProgressUnit;
		count++ 
	} else{
		count=0;
		//change progress color to red
		answerIsWrong();
		if(runningQuesationIndex < lastQuestionIndex){
			runningQuesationIndex++;
			questionRender();
	}
		else {
			clearInterval(TIMER);
			scoreRender();
			}

	}

// 	let score = 0;

}


function checkAnswer(answer){
	if (answer== questions[runningQuesationIndex].correct){

		score++
		answerIsCorrect();

	//change progress color to green
	} else {
		//answer is wrong
		//change progress color to red
		answerIsWrong();

	}

	count=0;
	if(runningQuesationIndex < lastQuestionIndex){
			runningQuesationIndex++;
			questionRender();
	}else {
			clearInterval(TIMER);
			scoreRender();
			}

}

function answerIsCorrect(){

	//console.log(runningQuesationIndex)

	//document.getElementById(runningQuesationIndex).style.backgroundColor="green" 
}

function answerIsWrong(){

	document.getElementById(runningQuesationIndex).style.backgroundColor="red" 
}

function scoreRender(){

	divscore.style.display="block";
	const scorePercent = math.round(100 * score/questions.length);
}