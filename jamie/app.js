console.log('connected')
var elem = document.getElementById("a");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
    
       var  myArgument = document.getElementById("a").value;
       displayResult(myArgument);
    }
}


function displayResult(test) {
    console.log('displayResult called on', test)
    if(palindrome(test)){
     
        document.getElementById('answer').innerHTML ="<h2 id='correct'> Yes, your phrase is a Palandrome</h2>"
    } else {
      
        document.getElementById('answer').innerHTML ="<h2 id='incorrect'>Nope not a Palandrome</h2>"
    }
}

function palindrome(str) {
    var regex = /[a-zA-Z0-9]/gi;
    var letters = str.match(regex);
     if (letters == null){
    
       return true;
     }
    for (var i = 0; i < letters.length; i++){
        letters[i]=letters[i].toLowerCase();
      }
    
    
    var lenghtOfHalfTheWord = Math.floor(letters.length / 2)
   
      for (var j = 0; j < lenghtOfHalfTheWord; j++)
      {
        var leftTest = letters[j];
        var rightTest = letters[(letters.length - j -1)]
        
        if (leftTest != rightTest){
          return false
        } 
      }
      return true
    
    }
    palindrome("0_0 (: /-\ :) 0-0"); 