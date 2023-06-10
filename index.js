
var questions = {
    1 : "Which type of JavaScript language is ___ "      
}

var question = []

function QuestionAnswers(question , opt1, opt2, opt3, opt4, ans){
    this.question = question;
    this.opt1 = opt1;
    this.opt2 = opt2;
    this.opt3 = opt3;
    this.opt4 = opt4;
    this.ans = ans;
}

var i =0
question[0] = new QuestionAnswers( "Which type of JavaScript language is ___" , "Object-Oriented", "Object-Based", "Assembly-language", "High-level", "btn1" );
question[1] = new QuestionAnswers( "Which one of the following also known as Conditional Expression:" , "Alternative to if-else", "Switch statement", "If-then-else statement", "Immediate if","btn3"  );
question[2] = new QuestionAnswers( "In JavaScript, what is a block of statement?" , "Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement", "btn1" );
question[3] = new QuestionAnswers( "When interpreter encounters an empty statements, what it will do:" , "Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements", "btn3" );
question[4] = new QuestionAnswers( 'The "function" and " var" are known as:' , "Keywords", "Data types", "Declaration statements", "Prototypes", 'btn2' );


function show(x){
document.getElementById("question").innerHTML = question[x].question;
document.getElementById("btn0").innerHTML = question[x].opt1;
document.getElementById("btn1").innerHTML = question[x].opt2;
document.getElementById("btn2").innerHTML = question[x].opt3;
document.getElementById("btn3").innerHTML = question[x].opt4;
document.getElementById("progress").innerHTML = "Question " + (i+1) + " of " + question.length ;

}
show(i);

function next(id){
    console.log(id);
    Validate(i,id)
    i++;
    if(i>=question.length){
     var percent = percentage();
       document.getElementById("result").innerHTML = "Marks scored = " + score + " , Percentage scored = " + percent
        return;
    }

    show(i)
    
}
function percentage(){
    return (score/question.length)*100;
}
var score = 0
function Validate(i,id){
    if(question[i].ans === id){
        score++;
    } 
}


