$(document).ready( function() {
  var choices = ['Rock', 'Paper', 'Scissors']
  var computer = choices[Math.floor(Math.random() * choices.length)];
  var yourChoice = '';
  var rock = $('#rock');
  var paper = $('#paper');
  var scissors = $('#scissors')
  var result = '';
  var wins = 0;
  var losses = 0;
  var push = 0;
  

  $('#rock').click(function() {
    yourChoice = 'Rock';
    paper.hide();
    scissors.hide();
    $('#youSelected').append('Rock');
  })

  $('#paper').click(function() {
    yourChoice = 'Paper';
    rock.hide();
    scissors.hide();
    $('#youSelected').append('Paper');
  })

  $('#scissors').click(function() {
    yourChoice = 'Scissors';
    rock.hide();
    paper.hide();
    $('#youSelected').append('Scissors');
  })



    $('#play').click(function() {
      var choices = ['Rock', 'Paper', 'Scissors']
      var computer = choices[Math.floor(Math.random() * choices.length)];

       $('#computerSelected').append(computer)
        computerResult();
        gameLogic();
     });
  

   

   function computerResult() {
   switch(computer) {
      case 'Rock':
        $('#computerChoice').append('<img class="chocies" src="images/rock.jpeg">')
        break;
      case 'Paper':
        $('#computerChoice').append('<img class="choices" src="images/paper.jpg">')
        break;
      case 'Scissors':
        $('#computerChoice').append('<img class="choices" src="images/scissors.jpg">')
        break;
    }
  }



    function gameLogic() {
    if ( yourChoice === 'Rock' && computer === 'Rock') {
      result = 'Push'
      $('#result').toggleClass('push');
      $('#result').append('<h2>' + result + '</h2>')
      push++
      $('#push').append(push)
    }
    else if ( yourChoice === 'Rock' && computer === 'Paper') {
      result = 'Paper covers rock....You lose';
      $('#result').toggleClass('lose');
      $('#result').append('<h2>' + result + '</h2>')
      losses++
      $('#losses').append(losses)
    }
    else if ( yourChoice === 'Rock' && computer === 'Scissors') {
      result = 'Rock beats scissors.....You win!';
      $('#result').toggleClass('win');
      $('#result').append('<h2>' + result + '</h2>')
      wins++
      $('#wins').append(wins)
    }
    else if ( yourChoice === 'Paper' && computer === 'Rock') {
      result = 'Paper covers rock....You win!';
      $('#result').toggleClass('win');
      $('#result').append('<h2>' + result + '</h2>')
      wins++
      $('#wins').append(wins)
    }
    else if ( yourChoice === 'Paper' && computer === 'Paper') {
      result = 'Push'
      $('#result').toggleClass('push');
      $('#result').append('<h2>' + result + '</h2>')
      push++
      $('#push').append(push)
    }
    else if ( yourChoice === 'Paper' && computer === 'Scissors') {
      result = 'Scissors beat paper.....You lose';
      $('#result').toggleClass('lose');
      $('#result').append('<h2>' + result + '</h2>')
      losses++
      $('#losses').append(losses)
    }
    else if ( yourChoice === 'Scissors' && computer === 'Paper') {
      result = 'Scissors beat paper.....You win!'
      $('#result').toggleClass('win');
      $('#result').append('<h2>' + result + '</h2>')
      wins++
      $('#wins').append(wins)
    }
    else if ( yourChoice === 'Scissors' && computer === 'Rock') {
      result = 'Rock beats scissors.....You lose'
      $('#result').toggleClass('lose');
      $('#result').append('<h2>' + result + '</h2>')
      losses++
      $('#losses').append(losses)
    }
    else if ( yourChoice === 'Scissors' && computer === 'Scissors') {
      result = 'Push'
      $('#result').toggleClass('push');
      $('#result').append('<h2>' + result + '</h2>')
      push++
      $('#push').append(push)
    }
    else {
      result = 'Error. Please refresh browser and try again.'
      $('#result').append('<h2>' + result + '</h2>')
    }
  }
 

  
    $('#playAgain').click(function () {
      //clear selection 
      $('#result').empty()
      $('#youSelected').empty()
      $('#computerSelected').empty()
      $('#computerChoice').empty()
      //reset image choices
      rock.show()
      paper.show()
      scissors.show()
      
      
  });

});