var variable = '' + 
'<!DOCTYPE html>' + 
'<html lang="en">' + 
'<head>' + 
'  <meta charset="UTF-8">' + 
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">' + 
'  <title>Rock Paper Scissors Game</title>' + 
'</head>' + 
'<body>' + 
'  <script>' + 
'    var wins = 0;' + 
'    var ties = 0;' + 
'    var losses = 0;' + 
'' + 
'    var rounds = prompt("How many rounds do you want to play?");' + 
'    rounds = parseInt(rounds);' + 
'' + 
'    for (var i = 0; i < rounds; i++) {' + 
'      var userChoice = prompt("Round " + (i + 1) + ": Choose rock (r), paper (p), or scissors (s)").toLowerCase();' + 
'' + 
'      var computerChoice = Math.floor(Math.random() * 3);' + 
'' + 
'      var computerChoiceString;' + 
'      switch (computerChoice) {' + 
'        case 0:' + 
'          computerChoiceString = \'r\';' + 
'          break;' + 
'        case 1:' + 
'          computerChoiceString = \'p\';' + 
'          break;' + 
'        case 2:' + 
'          computerChoiceString = \'s\';' + 
'          break;' + 
'      }' + 
'' + 
'      if (' + 
'        (userChoice === \'r\' && computerChoiceString === \'s\') ||' + 
'        (userChoice === \'p\' && computerChoiceString === \'r\') ||' + 
'        (userChoice === \'s\' && computerChoiceString === \'p\')' + 
'      ) {' + 
'        wins++;' + 
'        alert("You won this round!");' + 
'      } else if (userChoice === computerChoiceString) {' + 
'        ties++;' + 
'        alert("It\'s a tie!");' + 
'      } else {' + 
'        losses++;' + 
'        alert("You lost this round!");' + 
'      }' + 
'    }' + 
'' + 
'    alert("Game Over!\\n\\nWins: " + wins + "\\nTies: " + ties + "\\nLosses: " + losses);' + 
'  </script>' + 
'</body>' + 
'</html>' + 
'' + 
'';