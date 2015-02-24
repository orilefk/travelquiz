$(document).ready(function(){

	/*---Press Start---*/
	$('#start').on('click', function(){
		$('#intro_wrap').fadeOut(500);
		$('#question_wrap').delay(500).fadeIn(500);
		qManager.showQuestion();
	})
	var points = 0;
	/*---Clicking on an answer image*/
	$('.unselected').click(function(){
		$('.selected').removeClass('selected').addClass('unselected');
		$(this).removeClass('unselected').addClass('selected');
	})
	/*---submitting an answer---*/
	$('#next').on('click', function(){
		qManager.checkAnswer();
		points = points + qManager.checkAnswer();
		console.log('points= ', points);
		$('.selected').removeClass('selected').addClass('unselected');
		qManager.currentNum++;
		qManager.showQuestion();
	})


/*---Questions---*/
	var question1 = {
		question: "What kind of 'active to relaxed' distribution do you prefer while on vacation?",
		pic: ["images/veryactive.png", "images/mostlyactive.png", "images/mostlyrelaxed.png", "images/veryrelaxed.png"],
		answers: ["Very active", "Mostly active", "Mostly relaxed", "Very relaxed"],
		points: [1, 2, 3, 4]
	};
	var question2 = {
		question: "Which of the following best describes your vacation weather preference?",
		pic: ["images/cristiano-ronaldo.png", "images/luke-chadwick.png", "images/ryan-giggs.png", "images/steven-gerrard.png"],
		answers: ["It must be warm", "Warm, but doesn't matter so much", "Cool, but doesn't matter so much", "It must be cool"],
		points: [1, 2, 3, 4]
	};
	var question3 = {
		question: "How much interaction would you like with natives and strangers?",
		pic: ["images/teddy-sheringham.png", "images/robin-van-persie.png", "images/ryan-giggs.png", "images/alan-shearer.png"],
		answers: ["A lot of interaction", "Some interactions", "I'd rather keep mostly to myself", "I don't want to meet anyone"],
		points: [1, 2, 3, 4]
	};
	var question4 = {
		question: "Do you like to try new and exotic foods?",
		pic: ["images/tony-yeboah.png", "images/peter-ndlovu.png", "images/jj-okocha.png", "images/nwankwo-kanu.png"],
		answers: ["Yes, the weirder the better!", "Sometimes, but nothing too crazy", "Maybe, but I'll need to know more", "Never!"],
		points: [1, 2, 3, 4]
	};
	var question5 = {
		question: "Do you like traveling to popular destinations or to places less well known?",
		pic: ["images/teddy-sheringham.png", "images/ian-rush.png", "images/les-ferdinand.png", "images/eric-cantona.png"],
		answers: ["The stranger the better!", "Adventurous but also known", "Pretty well known places", "Only the most happening places"],
		points: [1, 2, 3, 4]
	};

	var qlist = [question1, question2, question3, question4, question5];
/*---Question Manager---*/
var qManager = {

	currentNum: 0,
	

	showQuestion: function() {
		var currentQuestion = qlist[this.currentNum];
		var questionPic = currentQuestion.pic;
		var questionAnswers = currentQuestion.answers;

		$('#progress').text(this.currentNum +1);
		$('#question_text').text(currentQuestion.question);
		$('#answer1').find('img').attr("src", questionPic[0]);
		$('#answer2').find('img').attr("src", questionPic[1]);
		$('#answer3').find('img').attr("src", questionPic[2]);
		$('#answer4').find('img').attr("src", questionPic[3]);
		$('#answer1 .answer-text').text(questionAnswers[0]);
		$('#answer2 .answer-text').text(questionAnswers[1]);
		$('#answer3 .answer-text').text(questionAnswers[2]);
		$('#answer4 .answer-text').text(questionAnswers[3]);
		if(qManager.currentNum == 4){
			console.log('last question');
			$('#next').attr('value', '    Submit');

		};
	},

	checkAnswer: function(){

		var currentQuestion = qlist[this.currentNum];
		if($('#answer1 > p').hasClass('selected')){var addPoints = 1};
		if($('#answer2 > p').hasClass('selected')){var addPoints = 2};
		if($('#answer3 > p').hasClass('selected')){var addPoints = 3};
		if($('#answer4 > p').hasClass('selected')){var addPoints = 4};
		return addPoints;
	}
}
});