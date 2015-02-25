$(document).ready(function(){

	/*---Press Start---*/
	$('#start').on('click', function(){
		$('#intro_wrap').fadeOut(500);
		$('#question_wrap').delay(500).fadeIn(500);
		qManager.showQuestion();
	})

	/*---Global Variables---*/
	var points = 0;
	var recommendation = '';
	var globalNum = 

	/*----Start over on icon click---*/
	$('#logo_image').on('click', function(){
		points = 0;
		recommendation = '';
		qManager.currentNum = 0;
		$('#question_wrap').fadeOut(500);
		$('#recommendation_wrap').fadeOut(500);
		$('#intro_wrap').delay(500).fadeIn(500);
		$('.selected').removeClass('selected').addClass('unselected');
		$('#recommendation_wrap').removeClass();
	});

	/*---Clicking on an answer image*/
	$('.unselected').click(function(){
		$('.selected').removeClass('selected').addClass('unselected');
		$(this).removeClass('unselected').addClass('selected');
	})
	/*---submitting an answer---*/
	$('#next').on('click', function(){
	if($('#answer1 > p').hasClass('unselected') && $('#answer2 > p').hasClass('unselected') &&
		$('#answer3 > p').hasClass('unselected') && $('#answer4 > p').hasClass('unselected')) {
		alert('Choose a response ya doofus!')
		}
	else {
		points = points + qManager.checkAnswer();
		console.log('points= ', points);

		if (qManager.currentNum == qlist.length-1) {
			recEngine.makeRecommendation();
			recommendation = recEngine.makeRecommendation();
			recEngine.displayRecommendation();
			$('#question_wrap').fadeOut(500);
			$('#recommendation_wrap').delay(500).fadeIn(500);
			console.log('recommendation: ', recommendation);
		}
		else {
		qManager.checkAnswer();
		$('.selected').removeClass('selected').addClass('unselected');
		qManager.currentNum++;
		qManager.showQuestion();
		}
	}
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
		pic: ["images/cold.png", "images/cool.png", "images/warm.png", "images/hot.png"],
		answers: ["I don't care at all", "Warm, but doesn't matter so much", "I'm hoping it's warm", "Warm is my #1 prioroty!"],
		points: [1, 2, 3, 4]
	};
	var question3 = {
		question: "How much interaction would you like with natives and strangers?",
		pic: ["images/manystrangers.png", "images/somestrangers.png", "images/mostlyself.png", "images/alone.png"],
		answers: ["A lot of interaction", "Some interactions", "I'd rather keep mostly to myself", "I don't want to meet anyone"],
		points: [1, 2, 3, 4]
	};
	var question4 = {
		question: "Do you like to try new and exotic foods?",
		pic: ["images/exotic.png", "images/cheese.png", "images/knowmore.png", "images/plain.png"],
		answers: ["Yes, the weirder the better!", "Sometimes, but nothing too crazy", "Maybe, but I'll need to know more", "Never!"],
		points: [1, 2, 3, 4]
	};
	var question5 = {
		question: "Do you like traveling to popular destinations or to places less well known?",
		pic: ["images/unknown.png", "images/adventurous.png", "images/known.png", "images/wellknown.png"],
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

/*---Travel Recommendation Engine---*/

var recEngine = {

	makeRecommendation: function() {
		var rec = '';
		var destinations = ['Scandinavia', 'Trinidad', 'Israel', 'Amsterdam', 'Hawaii'];
		if(points <= 6) {rec = destinations[0];}
		else if(points <= 10) {rec = destinations[1];}
		else if(points <= 14) {rec = destinations[2];}
		else if(points <= 17) {rec = destinations[3];}
		else{rec = destinations[4];}
		return rec;
	},

	displayRecommendation: function() {
		$('#recommendation_wrap').addClass(recommendation);
		$('#rec_name').text(recommendation);
	}


}
});