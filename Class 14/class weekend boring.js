document.querySelector('#check').addEventListener('click', check)

function check()

const day = document.querySelector('#day').value.toLowerCase()

if(day === "tuesday" || day === "thursday"){
  console.log("YOU HAVE CLASS")
}else if(day === "sunday" || day === "saturday"){
  console.log("IT'S THE WEEKEND")
}else{
  console.log("BORING")
}

document.querySelector('#check').addEventListener('click', check)

function check () {
  const day = document.querySelector('#day').value.toLowerCase ()

  if(day === "tuesday" || day === "thursday"){
    console.log("CLASS DAY")
  }
  else if(day === "saturday" || day === "sunday"){
    console.log("It's the weekend")
  }
  else{
    console.log("BORING")
  }
}
