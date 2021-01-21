const firstButton = document.getElementById('first-button');
let hiddenDiv = document.getElementById('hidden-div');
const secondButton = document.getElementById('second-button');


firstButton.addEventListener('click', () => {
   const burn = `When you where born "Never Gonna Give You UP" by Rick Astley was  top 5 hit! 
   Panasonic came out with their D series cell phone, you could talk 
   for UP TO 60 MINUTES!! holy cow what a year!`;
    hiddenDiv.textContent = `${burn}`

    
    
    
});
secondButton.addEventListener('click', () => {
    const burn = `When you where in 8th grade wikipedia was launched.. how did you 
ever get a report done without wiki??? Hopefully you able to make the premier of 
    the original shrek? At least tell me you listened to fallin' by alicia keys on your 
    original ipod or maybe you still had a 
    cd player lol. All jokes aside that song slaps :)`;
     hiddenDiv.textContent = `${burn}`
     
 });
 