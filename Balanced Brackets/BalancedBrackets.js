// Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and 
// square-brackets [] would be considered valid in code and mathematics (is balanced).

function isBalanced (str) {
    var counter = 0
    for(var i =0; i<str.length; i++){
      if(str[i] === "(" || str[i] === "{" || str[i] === "["){
        counter++
      }
    
    else if(str[i] === ")" || str[i] === "}" || str[i] === "]"){
      counter--
    }
  
  }
  
  if( str[0] === "(" && str[str.length -1] == ")" && counter === 0){
    return true
  }
  else if( str[0] === "[" && str[str.length -1] == "]" && counter === 0){
    return true
  }
  else if( str[0] === "{" && str[str.length -1] == "}" && counter === 0){
    return true
  }
  return false
  }
  