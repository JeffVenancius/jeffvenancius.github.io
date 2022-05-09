let index = 0
let keys
let field
let intro = false
function onButton(buttonName) { // importing DB from ./portfolio.js
	index = 0
	field = buttonName
	toggleButton()
	intro = true
	setRender()
}

function toggleButton() {
	let btn = 'button__on'
	let isOn = document.querySelector('.' + btn)
	isOn && isOn.classList.remove(btn)
	document.querySelector('#' + field).classList.add(btn)
}

function getInfo(info) {
	return DB[field][keys[index]][info]
}

function addId(counter) {
	index += counter
	setRender()
}

function setRender(){
	keys = Object.keys(DB[field])
	let title = keys[index]
	let description = getInfo('desc')
	let link = getInfo('link')

	let arrowLess = index <= 0
	let arrowGreater = index >= keys.length-1

	let img = `./img/${[keys[index]]}.jpg`
	let inner = `
	<h1 id="temp__title">${title}</h1>
	<div>
	${arrowLess ? '': '<img src="img/arrow.svg" class="button__arrow" style="transform: scaleX(-1)" onclick="addId(-1)">'}
	<a href="${link}" target="_blank" rel="noopener noreferrer"><img id="cover__img" ${intro && 'class="temp__cover__img"' } src="${img}"/></a>
	${arrowGreater ? '' : '<img src="img/arrow.svg" class="button__arrow" onclick="addId(1)">'}
	</div>
	<p id="temp__description">${description}</p>`
	document.querySelector('main').innerHTML = inner
	// intro = false
}
