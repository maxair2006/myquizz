class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elemen
    question.hide()

    //write code to change the background color here
    background("purple")
    //write code to show a heading for showing the result of Quiz
    text("RESULTS",300,20)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
    if(allContestants!==undefined){
      var position = 200
      text("correct answers are in green colour")
      for(var plr in allContestants){
        var answer = "2"
        if(answer === allContestants[plr].answer)
        fill("green")
        else
        fill("red")
        position+=50
        text(allContestants[plr].name+":"+allContestants[plr].answer,200,position)
      }
      
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
