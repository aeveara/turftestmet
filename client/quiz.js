import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



Template.quiz.helpers({
    questions: function() {
    return Quiz.find().fetch();
  },
    checked: function(){
        var isCompleted = this.completed;
        if(isCompleted){
            return "checked";
        } else {
            return "";
        }
    }
    
// choiceClass: function(){
// 
//return Session.equals("selectedChoice", this.choice) ?
//    "selected": ""; 
//
// }


});


Template.quiz.events({
    'change [type=radio]': function(){
    var documentId = this.choice;
    var isCompleted = this.completed;
    if(isCompleted){
        Quiz.update({ _id: documentId }, {$set: { completed: false }});
        console.log("Task marked as incomplete.");
    } else {
        Quiz.update({ _id: documentId }, {$set: { completed: true }});
        console.log(this.choice);
    }
}

  
});

Template.quizCount.helpers({
'totalQuiz': function(){
       return Quiz.find().count();
    },
    'completedQuiz': function(){
        return Quiz.find({ completed: true }).count();
    }
});

Template.review.helpers({
    questions: function(){
         return Quiz.find().fetch(); 
    }
  
});

Template.review.events({
    
});







//starts timer below


var countdown = new ReactiveCountdown(30);

countdown.start(function() {
            
});



Template.timer.helpers({

    'getCountdown': function() {
        return countdown.get();
    }

});

Template.timeout.events({
        'click #brb': function(){
countdown.stop(function() {
            
});
     
    },
    
    'click #b2q': function(){
        history.back(-1);
    }
});


