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

function generateRandomAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabets.split('');

    const randomNumer = Math.random()*25;
    const randomIndex = Math.round(randomNumer);
    const getrandomAlphabet = alphabetsArray[randomIndex];
    return getrandomAlphabet;
}

function scoring(){
    const sum = 0;
    
}