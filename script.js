let randomUpper = createArray(65, 90);
let randomLower = createArray(97, 122);
let randomNumber = createArray(48, 57);
let randomSymbols = createArray(33, 47).concat(createArray(58, 64));

let passwordRange = document.getElementById("passwordRange")
function rangeValue(){
    valueOfRange= document.getElementById("passwordRange")
   
    val = ((valueOfRange.value/2)*10-1);
    console.log(val)
    passwordRange = document.getElementById("passwordRange").value
    document.getElementById("rangeDisplay").innerHTML = passwordRange;
    valueOfRange.style.background ='linear-gradient(to right, #a4ffaf 0%, #a4ffaf ' + val + '%  , black '+ val +'%, black 100%)';
    
    
    return(passwordRange)
}

  function copyFinalPassword(){
    let copyPassword= document.getElementById("passwordDisplay").innerHTML
    if(copyPassword=="Select Any Fields"){
        alert("Select Any Password Fields")
    }else{
        let textArea = document.createElement("textarea")
        textArea.innerText=copyPassword;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert("Password Copied")
    }

}
  


function password(){
    let passwordDisplay = document.getElementById("passwordDisplay");
    let passwordRange = rangeValue();
    let isUpperCase = document.getElementById("upperCase").checked;
    let isLowerCase = document.getElementById("lowerCase").checked;
    let isNumbers = document.getElementById("numbers").checked;
    let isSymbols = document.getElementById("symbols").checked;
    let StrengthDisplay = document.getElementById("StrengthDisplay")
    let strengthBarOne = document.getElementById("strengthBarOne")
    let strengthBarTwo = document.getElementById("strengthBarTwo")
    let strengthBarThree = document.getElementById("strengthBarThree")
    let strengthBarFour = document.getElementById("strengthBarFour")


    let finalPassword = generatePassword(passwordRange,isUpperCase,isLowerCase,isNumbers,isSymbols,StrengthDisplay);
      passwordDisplay.innerHTML = finalPassword
    
     
    let upper = finalPassword.match(/[A-Z]/)
    let lower = finalPassword.match(/[a-z]/)
    let num = finalPassword.match(/[0-9]/)
    let symb = finalPassword.match(/[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\>\?\@]/);

    if(finalPassword=="Select Any Fields"){
        StrengthDisplay.innerHTML="NO STRENGTH"
        strengthBarOne.style.backgroundColor="black"
        strengthBarTwo.style.backgroundColor="black"
        strengthBarThree.style.backgroundColor="black"
        strengthBarFour.style.backgroundColor="black"
    }else{
        if(upper||lower||num||symb){
            StrengthDisplay.innerHTML="EASY"
            strengthBarOne.style.backgroundColor="yellow"
            strengthBarTwo.style.backgroundColor="black"
            strengthBarThree.style.backgroundColor="black"
            strengthBarFour.style.backgroundColor="black"
        }
        if((upper&&lower)||(upper&&num)||(upper&&symb)||(lower&&num)||(symb&&lower)||(num&&symb)){
            StrengthDisplay.innerHTML="MEDIUM"
            strengthBarOne.style.backgroundColor="yellow"
            strengthBarTwo.style.backgroundColor="yellow"
            strengthBarThree.style.backgroundColor="black"
            strengthBarFour.style.backgroundColor="black"
        }
        if((upper&&lower&&num)||(upper&&lower&&symb)||(symb&&lower&&num)){
            StrengthDisplay.innerHTML="HARD"
            strengthBarOne.style.backgroundColor="yellow"
            strengthBarTwo.style.backgroundColor="yellow"
            strengthBarThree.style.backgroundColor="yellow"
            strengthBarFour.style.backgroundColor="black"
        }
        if(upper&&lower&&num&&symb){
            StrengthDisplay.innerHTML="STRONG"
            strengthBarOne.style.backgroundColor="yellow"
            strengthBarTwo.style.backgroundColor="yellow"
            strengthBarThree.style.backgroundColor="yellow"
            strengthBarFour.style.backgroundColor="yellow"
        }
        
    }
}

function generatePassword(passwordRange,isUpperCase,isLowerCase,isNumbers,isSymbols){
    let valueArray = []
  

   if(!isLowerCase && !isUpperCase && !isNumbers && !isSymbols){
    return ("Select Any Fields")
    
   
   }else {
            if(isLowerCase){
            valueArray = randomLower
            
            }
            if(isUpperCase){
                valueArray = valueArray.concat(randomUpper)
               
                }
             if(isNumbers){
            valueArray = valueArray.concat(randomNumber)
           
            }
            if(isSymbols){
                valueArray = valueArray.concat(randomSymbols)
              
                }
        let passwordArray = [];
        for(let i = 0; i < passwordRange; i++){
           let characters = valueArray[Math.floor(Math.random()*valueArray.length)]
           passwordArray.push(String.fromCharCode(characters))
           
        } 
        
     
    return passwordArray.join("")
         }
   
}




function createArray(low,high){
    let array = []
    for(i = low; i <= high; i++){
        array.push(i)
    }
    return array
}