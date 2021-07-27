var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);

  // // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyBL9PoqenXj8gafL-AsM5BsWjp_hWm-mqU",
  //   authDomain: "proc-37-7fa0a.firebaseapp.com",
  //   databaseURL: "https://proc-37-7fa0a-default-rtdb.firebaseio.com",
  //   projectId: "proc-37-7fa0a",
  //   storageBucket: "proc-37-7fa0a.appspot.com",
  //   messagingSenderId: "958315559484",
  //   appId: "1:958315559484:web:7d781f8e5634355904e139"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // console.log(firebase)


  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
