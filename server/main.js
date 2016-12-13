import { Meteor } from 'meteor/meteor';



Meteor.startup(() => {
  if (Glossary.find().count() === 0) {
      console.log("here i am")
    JSON.parse(Assets.getText("glossary.json")).glossary.forEach(function (item, index, array) {
      Glossary.insert(item);
    });
};

});

Meteor.startup(() => {
    
if (Quiz.find().count() === 0) {
      console.log("quiz here")
    JSON.parse(Assets.getText("quizone.json")).questions.forEach(function (item, index, array) {
      Quiz.insert(array);
        Quiz.insert(item);
    });
};
    
    
});


    



