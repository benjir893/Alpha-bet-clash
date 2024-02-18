function randomAlphabet(){
    const alphabet = generateRandomAlphabet();
    const upperCase = alphabet.toUpperCase();
    const displayRandomAlphabet = document.getElementById('displayRandomAlphabet');
    displayRandomAlphabet.innerText = upperCase;
    setBackGroundColor(alphabet);
}

function scoreProcessing(event){
    const innerTxt = getElementValueById('displayRandomAlphabet');
    const alphabet = innerTxt.toLowerCase();
    if(event.key=== alphabet){
        const currentScore = getValueByElementId('score');
        const newScore = currentScore +1;
        setElementTxtById('score',newScore);
        setElementTxtById('finalScoreDisplay',newScore);
        removeBackGround(alphabet);
        randomAlphabet();
    }
    else{
        const LifeScore = getValueByElementId('life');
        const newLifeScore = LifeScore -1;
        if(newLifeScore >= 0){

            setElementTxtById('life',newLifeScore);
            removeBackGround(alphabet);
            randomAlphabet();
        }
        else{
            // console.log('you dont have life ');
            screenHide('playGroundScreen')
            screenShow('finalScore');
        }
    }    
}
document.addEventListener('keyup', scoreProcessing)
// document.addEventListener('keyup', function scoreProcessing(event){
    

//     const displayRandomAlphabet = document.getElementById('displayRandomAlphabet');
//     const character = displayRandomAlphabet.innerText;
//     const InnerTxt = character.toLowerCase();
    
//     if(event.key === InnerTxt){
//        const scoreTxt = document.getElementById('score');
//        const scorevalue = scoreTxt.innerText;
//        const score = parseInt(scorevalue);
//        const newScore = score +1;
//        scoreTxt.innerText = newScore;
//        removeBackGround(InnerTxt);
//         randomAlphabet();
        
//     }
//     else{
//         console.log('you have pressed wrong key');
//         const lifeTxt = document.getElementById('life');
//         const lifeValue = lifeTxt.innerText;
//         const lifeScore = parseInt(lifeValue);
//         const newLifeScore = lifeScore-1;
//         lifeTxt.innerText = newLifeScore;
//         if(newLifeScore >0){
//             removeBackGround(InnerTxt);
//             randomAlphabet();
//         }
//         else{
//             screenShow('finalScore');
//         }
//     }

// })

function playNow(){
    screenHide('homeSceen');
    screenShow('playGroundScreen');
    randomAlphabet();
    // screenOnOff('homeSceen','playGroundScreen');
    
    // const homeScreen = document.getElementById('homeSceen');
    // homeScreen.classList.add('hidden');
    // const playGroundScreen = document.getElementById('playGroundScreen');
    // playGroundScreen.classList.remove('hidden');
}
function playAgainbtnFunction(){
    setElementTxtById('life',5);
    setElementTxtById('score',0);
    setElementTxtById('finalScoreDisplay',0);
    screenHide('finalScore');
    screenShow('playGroundScreen')
}
