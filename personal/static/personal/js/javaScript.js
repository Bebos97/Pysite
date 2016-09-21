/**
 * Created by Asus on 25/07/2016.
 */

$(document).ready(function(){
    if($(document).width() < 768) {
        document.getElementById("logo").style.width = "100%";
        document.getElementById("content").style.width = "100%";
        document.getElementById("main").style.width = "100%";
        $("nav").removeClass("navbar navbar-fixed-top");
        $(window).on("scroll", function() {

        });
    }
    else{
        document.getElementById("content").style.marginTop = "20%";
        document.getElementById("content").style.width = "70%";
        document.getElementById("main").style.width = "50%";
        $("nav").addClass("navbar-fixed-top");
        $(window).on("scroll", function() {
        var s = 100 - Math.min(33, $(document).scrollTop());
        $("img").height(s);
        var n = 100 - Math.min(33, $(document).scrollTop());
        $("nav").height(n);
        });
    }
});

var questions = [
    [ "What does the ALU mean?",
       "*Arithmetic Logic Unit","African Leadership University","Academy of Life"],
    [ "What does the RAM mean?",
      "Red Aqua Magneta", "Rapid Air Movement", "*Random Access Memory" ],
    [ "What's my Name?",
      "Rakish", "*Daniel", "Peter" ],
    [ "How many bits are in byte?",
      "*8", "16", "4", "5" ],
    [ "How does modulus looks like?",
      "*%", "/", "^", "$", "!" ]
];

var congrats = [ "You got it!", "Did you cheat?", "Correct", "Boring, isn't it?" ];
var tch = [ "Nope.", "Wish", "Sorry, wrong answer", "Back to school!" ];

function randomOrder() { return Math.random() > 0.5 ? 1 : -1; }

questions = questions.sort(randomOrder);
congrats  = congrats.sort(randomOrder);
tch       = tch.sort(randomOrder);

var qcount  = 0;
var correct = 0;
var okCount = 0;
var oopsCount = 0;

function nextQuestion()
{
    var question = questions[qcount];
    document.getElementById("QText").innerHTML = question[0];
    var select = document.getElementById("choices");
    select.options.length = 1;
    for ( var a = 1; a < question.length; ++a )
    {
        var ans = question[a];
        if ( ans.charAt(0) == "*" ) ans = ans.substring(1);
        select.options[a] = new Option( ans, question[a] );
    }
}

function checkAnswer( )
{
    var ans = document.getElementById("choices").value;
    if ( ans == "" ) return; // no answer given
    if ( ans.charAt(0) == "*" )
    {
        alert( congrats[ okCount++ % congrats.length ] );
        ++correct;
    } else {
        alert( tch[ oopsCount++ % tch.length ] );
    }
    ++qcount;
    if ( qcount < questions.length )
    {
        nextQuestion();
    } else {
        alert( "Your final score was " + correct + " out of " + qcount );
        document.getElementById("Quiz").style.display = "none";
    }
}

window.onload = nextQuestion;

