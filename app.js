const firstButton = document.getElementById('first-button');
let hiddenDiv = document.getElementById('hidden-div');
const secondButton = document.getElementById('second-button');
const thirdButton = document.getElementById('third-button');
const fourthButton = document.getElementById('fourth-button');
const fithButton = document.getElementById('fith-button');

firstButton.addEventListener('click', () => {
   const burn = `When you where born "Never Gonna Give You UP" by Rick Astley was a top 5 hit! 
   Panasonic came out with their D series cell phone, you could talk 
   for UP TO 60 MINUTES! Even NIKE made headlines with their brand new 
   'Just Do It' sloagan. Holy cow what a year!`;
    hiddenDiv.textContent = `${burn}`

});
secondButton.addEventListener('click', () => {
    const burn = `When you where in 8th grade wikipedia was launched.. How did you 
ever get a report done without wiki??? Hopefully you where able to make the premier of 
    the original shrek? At least tell me you listened to 'fallin' by alicia keys on your 
    original ipod or maybe you still had a 
    portable cd player lol. All jokes aside that song slaps :)`;
     hiddenDiv.textContent = `${burn}`
     
 });
 thirdButton.addEventListener('click', () => {
    const burn = `Ahhhhh you enter a bar for the first time, Poker Face is blaring from the juke box. 
    You look at your phone to make sure your crops in farmville are doing well, its the hottest 
    new game of the year! Before you can access farmville you see a post about the inauguration of 
    Obama!! Our first black president! You think to yourself "wow this is amazing, the US is really turning
    the corner. Im excited to see who the intelligent people of our country will 
    elect next!"`;
     
    hiddenDiv.textContent = `${burn}`
     
 });
 fourthButton.addEventListener('click', () => {
    const burn = `January 21st 2021. You made it! Covid-19 is rampid in our country. 
    Our populus is constantly in-fighting about the goverment and our world is basically 
    at a stand still. Buttt FUCK that shit its your birthday!! Your smile always 
    lights up the room(im addicted to it)! Your laugh is contagious! Your ears.. well 
    I bet they hear everything!!! Happy birthday Ana :) Love ya bud`;
     
    hiddenDiv.textContent = `${burn}`
     
 });
 fithButton.addEventListener('click', () => {
    const burn = `1 more birthday = 1 year older = one more reason to 
    call you old:) your REAL GIFT begins now.`;
     
    hiddenDiv.textContent = `${burn}`
     
 }); 