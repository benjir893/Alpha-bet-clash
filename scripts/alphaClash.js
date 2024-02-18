function randomAlphabet(){
    const alphabet = generateRandomAlphabet();
    const upperCase = alphabet.toUpperCase();
    const displayRandomAlphabet = document.getElementById('displayRandomAlphabet');
    displayRandomAlphabet.innerText = upperCase;
    setBackGroundColor(alphabet);
}

document.addEventListener('keyup', function keyPressed(event){
    

    const displayRandomAlphabet = document.getElementById('displayRandomAlphabet');
    const character = displayRandomAlphabet.innerText;
    const InnerTxt = character.toLowerCase();
    
    if(event.key === InnerTxt){
       const scoreTxt = document.getElementById('score');
       const scorevalue = scoreTxt.innerText;
       const score = parseInt(scorevalue);
       const newScore = score +1;
       scoreTxt.innerText = newScore;
       removeBackGround(InnerTxt);
        randomAlphabet();
        
    }
    else{
        console.log('you have pressed wrong key');
        const lifeTxt = document.getElementById('life');
        const lifeValue = lifeTxt.innerText;
        const lifeScore = parseInt(lifeValue);
        const newLifeScore = lifeScore-1;
        lifeTxt.innerText = newLifeScore;
        if(newLifeScore >0){
            removeBackGround(InnerTxt);
            randomAlphabet();
        }
        else{
            screenShow('finalScore');
        }
    }

})

function playNow(){
    screenHide('homeSceen');
    screenShow('playGoundScreen');
    randomAlphabet();
    // screenOnOff('homeSceen','playGoundScreen');
    
    // const homeScreen = document.getElementById('homeSceen');
    // homeScreen.classList.add('hidden');
    // const playGroundScreen = document.getElementById('playGoundScreen');
    // playGroundScreen.classList.remove('hidden');
}

