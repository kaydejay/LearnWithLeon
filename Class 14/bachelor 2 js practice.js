const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext (){
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
}
function claireNext (){
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
	sharleen.classList.add('hidden')
}
function sharleenNext () {
	sharleen.classList.toggle('hidden')
	andi.classList.add('hidden')
	claire.classList.add('hidden')
}
