const firstOption = document.getElementById('firstButton');

firstOption.style.backgroundColor = 'black';


firstOption.onclick = function () {

  if (firstOption.style.backgroundColor == 'black') {

    firstOption.style.backgroundColor = 'white';
    firstOption.style.color = 'black';

  } else {

    firstOption.style.backgroundColor = "black";
    firstOption.style.color = "white";
  }
}


///****************** The Another Option *********/

const thereWillBeMagic = document.getElementById('bbbbbbbbbbbbbutton');

let magic = false;

thereWillBeMagic.onclick = function () {

  if(!magic) {
    thereWillBeMagic.classList.add('over_write_button_style');
    magic = true;
  } else {
    thereWillBeMagic.classList.remove('over_write_button_style');
    magic = false;
  }

}