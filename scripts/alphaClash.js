function randomAlphabet(){
    const alphabet = generateRandomAlphabet();
    const upperCase = alphabet.toUpperCase();
    const displayRandomAlphabet = document.getElementById('displayRandomAlphabet');
    displayRandomAlphabet.innerText = upperCase;
    setBackGroundColor(alphabet);
}

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

