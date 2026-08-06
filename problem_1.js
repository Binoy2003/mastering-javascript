function matchWinner(teamAGoals, teamBGoals) {
  if(teamAGoals > teamBGoals){
    return "Team A Won";
  }else if(teamAGoals < teamBGoals){
    return "Team B Won";
  }else{
    return "Draw";
  }
}


console.log(matchWinner(2,2));