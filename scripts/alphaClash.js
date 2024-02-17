function randomAlphabet(){
    const alphabet = generateRandomAlphabet();
    const upperCase = alphabet.toUpperCase();
    const displayRandomAlphabet = document.getElementById('displayRandomAlphabet');
    displayRandomAlphabet.innerText = upperCase;
    setBackGroundColor(alphabet);
}

document.addEventListener('keyup', function keyPressed(event){
    console.log(event.key);
    let score = 0;
    const scoreTxt = document.getElementById('score');
    // const scoreNumber = parseInt(scoreTxt.innerText);

    const displayRandomAlphabet = document.getElementById('displayRandomAlphabet');
    const character = displayRandomAlphabet.innerText;
    const InnerTxt = character.toLowerCase();
    
    if(event.key === InnerTxt){
        // console.log('you are winner');
        score += 1;
        scoreTxt.innerText= score;
        randomAlphabet();
        return score;
    }
    else{
        console.log('you have pressed wrong key');
        randomAlphabet();
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

