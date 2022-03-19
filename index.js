let upperCaseLetters = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

const lowerCaseLetters = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = ["!","@","#","$","%","*","&","*","&","(",")","{","}","[","]"];

const generatepassword = document.querySelector("#generatepassword");
generatepassword.addEventListener("click",submitdata); //trigerring the function when user clicks on generate link.

function submitdata(){
  //getting the object of each type.
  let totalCount = document.getElementById("ageOutputId"); 
  let includeuppercaseletters = document.getElementById("includeuppercaseletters");
  let includelowercaseletters = document.getElementById("includelowercaseletters");
  let includenumbers = document.getElementById("includenumbers");
  let includesymbols = document.getElementById("includesymbols");

  //checking whether user checked the button or not.If yes,it would return True else no.
  includeuppercaseletters = includeuppercaseletters.checked; 
  includelowercaseletters = includelowercaseletters.checked;
  includenumbers =  includenumbers.checked;
  includesymbols = includesymbols.checked;
  totalCount = totalCount.innerHTML; //getting the length of the character user wants 

  let allCharacters = []; //an array that would store type of characters that user have checked on.

  //if user has checked, then appending that type of characters in the all characters.
  if (includeuppercaseletters === true){
    allCharacters = allCharacters.concat(upperCaseLetters); 
  }
  if (includelowercaseletters === true){
    allCharacters = allCharacters.concat(lowerCaseLetters); 
  }
 
  if (includenumbers === true){
    allCharacters = allCharacters.concat(numbers); 
  }
  if (includesymbols === true){
    allCharacters = allCharacters.concat(symbols); 
  }

   //checking if user have checked any option or not.
 
  if (allCharacters.length === 0){
        console.log(99);
        allCharacters = allCharacters.concat(lowerCaseLetters); 
        output = helperfunction(totalCount,allCharacters)
  }
 else{
  output =  helperfunction(totalCount,allCharacters)
  }
  document.querySelector("#answer").value = output;

}


//helper function that would produce a random characters from all characters.
function helperfunction(totalCount,allCharacters){
  let finalcharacters = []; //this array would contain the actual characters user wants(Depends upon the length user has input)
  for(let i=0; i < totalCount;i++){
        randomNumber = Math.floor(Math.random() * allCharacters.length); //producing random numbers and getting the random characters from the array.
        finalcharacters.push(allCharacters[randomNumber]);
  }
  let output = finalcharacters.join(''); //after getting the final character in array, convertng them to string
  return output
}

//copying the answer in the clipboard.
const button = document.querySelector("#button");
console.log(button);
button.addEventListener("click",copy);

function copy(){
  var copyText = document.getElementById("answer"); 
  copyText.select(); //selecting the answer
  navigator.clipboard.writeText(copyText.value);
}
