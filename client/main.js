import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';
import './terms.html';
import './lesson.html';
import './quiz.html';
import './accordion.html';
import './quiz.js';


Router.route('/', {name: 'home'}, function () {
  this.render('/');
});

Router.route('/playbook', function () {
  this.render('playbook');
});

Router.route('/turfterms', function () {
  this.render('turfterms');
});

Router.route('/playerstats', function () {
  this.render('playerstats');
});
Router.route('/settings', function () {
  this.render('settings');
});

Router.route('/live', function () {
  this.render('live');
});

Router.route('/editprofile', function () {
  this.render('editprofile');
});

Router.route('/chooseteam', function () {
  this.render('chooseteam');
});

Router.route('/lesson', function () {
  this.render('lesson');
});

Router.route('/lessontwo', function () {
  this.render('lessontwo');
});

Router.route('/quiz', function () {
  this.render('quiz');
});

Router.route('/postquiz', function () {
  this.render('postquiz');
});

Router.route('/postquizlose', function () {
  this.render('postquizlose');
});

Router.route('/map', function () {
  this.render('map');
});

Router.route('/timeout', function () {
  this.render('timeout');
});

Router.route('/review', function () {
  this.render('review');
});

Tracker.autorun(function () {
  var current = Router.current();
  Tracker.afterFlush(function () {
    $(window).scrollTop(0);
  });
});

Meteor.startup(function () {

    sAlert.config({
        effect: '',
        position: 'top',
        timeout: 5000,
        html: true,
        onRouteClose: true,
        stack: true,
        offset: 0,
        beep: false,
        onClose: _.noop 
    });

});


Template.chooseteam.helpers({
    selectedClass:function(){
        
    }
});

Template.chooseteam.events({
  'click .back-home': function(){
      history.back(-1);
  },
    'click button': function(){
       var spans = document.getElementsByTagName('span');
     
        var btnword = document.querySelector(".select-team");
        var set = document.getElementById("set");
        
        btnword.style.display = "none";
        set.style.display = "block";
       
         var team = spans[0].innerHTML;  
      Session.set( 'selectedTeam', team);
        var mine = Session.get('selectedTeam');
       console.log(mine)
       
}
});

Template.live.helpers({
    myteam:function(){
  
    }
});




Template.turfterms.helpers({
'glossary':function(){
    return Glossary.find();

}  

});

Template.turfterms.events({
    'click .front': function(){
          event.preventDefault();


      var define = document.querySelector(".back");
        var back = document.querySelector(".define-word");
        var out = document.querySelector(".out"); 
       
        
        out.style.display="block";
        define.style.display= "block";
        back.style.display= "block";
        define.style.backgroundImage="url('/img/polygonred.svg')";
        define.style.backgroundRepeat = "no-repeat";
        define.style.webkitTransform = "translateZ(1px)";

        back.style.height="300px";
         back.style.width="250px";
        back.style.margin="0 auto";
         back.style.maxWidth="375px";
       $(back).addClass('define-word');
         define.style.marginLeft="-20px";
        define.style.zIndex = "900";
       
        
        Session.set( 'selectedTerm', this.definition);
        var selected = Session.get('selectedTerm');
        console.log(selected)

        back.innerHTML = (this.definition);
       
    },
    
    'click .out': function(){
        event.preventDefault();
        var back = document.querySelector(".back");
        
        back.style.display= "none";
       
        
        
        
    }
});


Template.lesson.events({
    'click .transcription-red .tran-btn': function(){
        var transred = document.querySelector(".transcription-red");
        
        transred.style.height="150px";
        transred.style.width="350px";
        transred.style.overflow="auto";
    },
     'click .transcription-green .tran-btn': function(){
        var transgreen = document.querySelector(".transcription-green");
        
        transgreen.style.height="150px";
        transgreen.style.width="350px";
        transgreen.style.overflow="auto";
    },
     'click .transcription-blue .tran-btn': function(){
        var transblue = document.querySelector(".transcription-blue");
        
        transblue.style.height="150px";
        transblue.style.width="350px";
        transblue.style.overflow="auto";
    },
    
      'click .transcription-foam .tran-btn': function(){
        var transfoam = document.querySelector(".transcription-foam");
        
        transfoam.style.height="150px";
        transfoam.style.width="350px";
        transfoam.style.overflow="auto";
    },
    
    
    'click .close': function(){
         var transred = document.querySelector(".transcription-red");
        
        transred.style.height="40px";
        transred.style.width="350px";
        transred.style.overflow="hidden"; 
    
    var transfoam = document.querySelector(".transcription-foam");
        
        transfoam.style.height="40px";
        transfoam.style.width="350px";
        transfoam.style.overflow="hidden";
      
     var transblue = document.querySelector(".transcription-blue");
        
        transblue.style.height="40px";
        transblue.style.width="350px";
        transblue.style.overflow="hidden";    
      
    var transgreen = document.querySelector(".transcription-green");
        
        transgreen.style.height="40px";
        transgreen.style.width="350px";
        transgreen.style.overflow="hidden";  
    },
    
    'click .quiz-btn': function(){
        sAlert.warning('2 minutes on the clock!', {onRouteClose: false, timeout: 3000});
    }
    
    
});

Template.lessontwo.events({
    'click .transcription-red .tran-btn': function(){
        var transred = document.querySelector(".transcription-red");
        
        transred.style.height="150px";
        transred.style.width="350px";
        transred.style.overflow="auto";
    },
     'click .transcription-green .tran-btn': function(){
        var transgreen = document.querySelector(".transcription-green");
        
        transgreen.style.height="150px";
        transgreen.style.width="350px";
        transgreen.style.overflow="auto";
    },
     'click .transcription-blue .tran-btn': function(){
        var transblue = document.querySelector(".transcription-blue");
        
        transblue.style.height="150px";
        transblue.style.width="350px";
        transblue.style.overflow="auto";
    },
    
      'click .transcription-foam .tran-btn': function(){
        var transfoam = document.querySelector(".transcription-foam");
        
        transfoam.style.height="150px";
        transfoam.style.width="350px";
        transfoam.style.overflow="auto";
    },
    
    
    'click .close': function(){
         var transred = document.querySelector(".transcription-red");
        
        transred.style.height="40px";
        transred.style.width="350px";
        transred.style.overflow="hidden"; 
    
    var transfoam = document.querySelector(".transcription-foam");
        
        transfoam.style.height="40px";
        transfoam.style.width="350px";
        transfoam.style.overflow="hidden";
      
     var transblue = document.querySelector(".transcription-blue");
        
        transblue.style.height="40px";
        transblue.style.width="350px";
        transblue.style.overflow="hidden";    
      
    var transgreen = document.querySelector(".transcription-green");
        
        transgreen.style.height="40px";
        transgreen.style.width="350px";
        transgreen.style.overflow="hidden";  
    },
    
    'click .quiz-btn': function(){
        sAlert.warning('2 minutes on the clock!', {onRouteClose: false, timeout: 3000});
    }
    
    
});




Template.settings.events({
    'click .back-home': function(){
      history.back(-1);
  },
  
    'click .settings-btn': function(){
        var gmap = document.querySelector('.map-container');
        
        gmap.style.display = "block";
    }
})

var MAP_ZOOM = 7;


Template.map.onRendered(function() {
  GoogleMaps.load({key: 'AIzaSyAVFbSzBa6X9TXKimEO5G4g4i2f-6pJT_Q'});
});

Template.map.helpers({  
  geolocationError: function() {
    var error = Geolocation.error();
    return error && error.message;
  },
  mapOptions: function() {
    var latLng = Geolocation.latLng();
    // Initialize the map once we have the latLng.
    if (GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: MAP_ZOOM,
          disableDefaultUI: true,
          scrollwheel: false
      };
    }
  }
    
});

Template.map.onCreated(function() {  
  var self = this;

    
     var stadiums=[       
[ 'Titans',		 36.166461,	-86.771289],
['Steelers',		40.446786,	-80.015761],
['Ravens',		 39.277969,	-76.622767],
['Colts',	39.760056, -86.163806],
['Jets',		 40.812194,	 -74.076983],
['Broncos',		39.743936, -105.020097],
['Dolphins',		 25.957919,	 -80.238842],
['Patriots',		 42.090925,	 -71.26435],
['Chargers',		 32.783117,	 -117.119525],
['Texans',		 29.684781,	 -95.410956],
['Bills',		 42.773739,	 -78.786978],
['Jaguars',		 30.323925,	 -81.637356],
['Browns',		 41.506022,	 -81.699564],
['Raiders',		 37.751411,	 -122.200889],
['Chiefs',		 39.048914,	 -94.484039],
['Bengals',		 39.095442,	 -84.516039],
['Giants',		 40.812194,	 -74.076983],
['Buccaneers',		 27.975967,	 -82.50335],
['Vikings',		44.973881, -93.258094],
['Cardinals',		 33.5277,	 -112.262608],
['Cowboys',		 32.747778,	 -97.092778],
['Falcons',		 33.757614,	 -84.400972],
['Eagles',		 39.900775,	 -75.167453],
['Bears',		 41.862306,	 -87.616672],
['Redskins',		 38.907697,	 -76.864517],
['Packers',		 44.501306, -88.062167],
['Saints',		 29.950931,	 -90.081364],
['Forty-Niners',		 37.713486,	 -122.386256],
['Rams',		 38.632975,	 -90.188547],
['Seahawks',		 47.595153, -122.331625],
['Lions',		 42.340156,	 -83.045808],
['Panthers',		 35.225808,	 -80.852861]         
];
 
  GoogleMaps.ready('map', function(map) {
            
   for(i=0; i < stadiums.length; i++){
   var stadium = stadiums[i];
       console.log(stadiums[i])
         var infowindow = new google.maps.InfoWindow({
    content: 'your team is the ' + stadium[0] ,
    maxWidth: 200
  });  
    var marker = new google.maps.Marker({
      position: {lat: stadium[1], lng: stadium[2]},
       map: map.instance,
        icon: '/img/stadium.png',
        title: stadium[0],
        infowindow: infowindow
   
      });

      marker.addListener('click', function() {

  infowindow.open(map.instance, this);
});    
 }
     

      

       

     
  });
});
 
