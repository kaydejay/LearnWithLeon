document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here

  if(day === "tuesday" || day === "thursday"){
    displayChanger('CLASS DAY!')
  }else if(day === "saturday" || day === "sunday"){
    displayChanger('Weekend!')
  }else{
    displayChanger('BORRRRRRINNNNNGGGGG!!!')
  }
}

function displayChanger (text) {
  document.querySelector("#placeToSee").innerText = text
}
