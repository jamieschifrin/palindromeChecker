// console.log('connected')
// var elem = document.getElementById("a");
// elem.onkeyup = function(e){
//     if(e.keyCode == 13){
//     //    console.log('you hit enter')
//        var  myArgument = document.getElementById("a").value;
//        displayResult(myArgument);
//     }
// }


function displayResult(test) {
    console.log('displayResult called on', test)
    if(palindrome(test)){
        // console.log('it is a palindrome!')
        document.getElementById('answer').innerHTML ="<h2 id='rightAnswer'> You made a palindrome!</h2>"
    } else {
        // console.log("that's not a palindorm you dumbass")
        document.getElementById('answer').innerHTML ="<h2 id='wrongAnswer'> Boy... you screwed that up</h2>"
    }
}

function palindrome(str) {
    var regex = /[a-zA-Z0-9]/gi;
    var letters = str.match(regex);
     if (letters == null){
    //    console.log('no letters')
       return true;
     }
    for (var i = 0; i < letters.length; i++){
        letters[i]=letters[i].toLowerCase();
      }
    
    
    var lenghtOfHalfTheWord = Math.floor(letters.length / 2)
    // console.log('length of half the word:', lenghtOfHalfTheWord)
      for (var j = 0; j < lenghtOfHalfTheWord; j++)
      {
        var leftTest = letters[j];
        var rightTest = letters[(letters.length - j -1)]
        // console.log(rightTest, leftTest);
        if (leftTest != rightTest){
          return false
        } 
      }
      return true
    
    }
    palindrome("0_0 (: /-\ :) 0-0"); 