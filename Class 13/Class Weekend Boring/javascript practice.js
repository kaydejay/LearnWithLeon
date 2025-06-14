document.querySelector('#check').addEventListener('click', check)

function check() {
    const day = document.querySelector('#day').value.toLowerCase()

    if(day==="tuesday" || day==="thursday") {
        displayChanger("YOU HAVE CLASS")
    }else if (day === "saturday" || day === "sunday") {
        displayChanger("It's the weekend")
    }else if (day === "wednesday"){
        displayChanger("HUMP DAY")
    }else{
        displayChanger("BORING")
    }

    function displayChanger (text) {
        document.querySelector("#placeToSee").innerText = text
}
}
