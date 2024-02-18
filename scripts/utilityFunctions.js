function screenHide(elementId){
    const hideElement = document.getElementById(elementId);
    hideElement.classList.add('hidden');

}

function screenShow(elementId){
    const displayElement = document.getElementById(elementId);
    displayElement.classList.remove('hidden');
}

function setBackGroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-700');
}

function removeBackGround(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-700');
}

function getElementValueById(elementId){
    const elementTxt = document.getElementById(elementId);
    const elementValue = elementTxt.innerText;
    return elementValue;
}
function setElementTxtById(elementId, value){
    const elementTxt = document.getElementById(elementId);
    elementTxt.innerText = value;
}
function getValueByElementId(elementId){
    const elementTxt = document.getElementById(elementId);
    const elementValue = elementTxt.innerText;
    const value = parseInt(elementValue);
    return value;
}

function generateRandomAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabets.split('');

    const randomNumer = Math.random()*25;
    const randomIndex = Math.round(randomNumer);
    const getrandomAlphabet = alphabetsArray[randomIndex];
    return getrandomAlphabet;
}