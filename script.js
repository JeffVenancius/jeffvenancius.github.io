let index = 0
let keys
let field
let intro = false
let doneMobile = false
reportWindowSize()

window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
	if (window.innerWidth <= 1650 && !doneMobile) {
		setMobileHTML()
	}
	else  if (window.innerWidth > 1650 && doneMobile){
		setDesktopHTML()
	}
}
function setDesktopHTML(){
	let desktopVersion = `
	<header>
		<img src="./img/icon.jpg" alt="Jeff Venancius" title="Jeff Venancius">
		<p>Programador front-end.</p>
		<p>Game designer.</p>
		<p>Escritor, roteirista, redator e músico.</p>
		<div id="choices">
			<button id="Livros" onclick="onButton('Livros')">Livros</button>
			<button id="Música" onclick="onButton('Música')">Música</button>
			<button id="Outros" onclick="onButton('Outros')">Outros</button>
		</div>
	</header>
	<div id="contact">
		<div id="socialLinks">
			<a href="https://github.com/JeffVenancius" target="_blank" rel="noopener noreferrer"><img src="img/contact/github.svg" alt="Github"></a>
			<a href="https://www.linkedin.com/in/jefferson-venancius-3b062a116/" target="_blank" rel="noopener noreferrer"><img src="img/contact/linkedin.svg" alt="Linkedin"></a>
			<a href="mailto:jefferson.venancius@gmail.com"><img src="img/contact/mail.svg" alt="E-mail"></a>
		</div>
	</div>
	<main>
		<div id="placeholder"></div>
	</main>
	<footer><p>Made by Jeff Venancius</p></footer>
	<script src="portfolio.js"></script>
	<script src="script.js"></script>
	`
	document.querySelector('body').innerHTML = desktopVersion
	doneMobile = false
	setRender()
}

function setMobileHTML(){
	let mobileVersion = `
	<header id="header__mobile">
		<div id="bio__mobile">
			<p>Programador front-end.</p>
			<p>Game designer.</p>
			<p>Escritor, roteirista, redator e músico.</p>
		</div>
		<div id="choices" class="choices__mobile">
			<button id="Livros" onclick="onButton('Livros')">Livros</button>
			<button id="Música" onclick="onButton('Música')">Música</button>
			<button id="Outros" onclick="onButton('Outros')">Outros</button>
		</div>
	</header>
	<div id="contact__mobile">
		<div>
		<img id="profile__mobile"src="./img/icon.jpg" alt="Jeff Venancius" title="Jeff Venancius">
			<div id="socialLinks">
				<a href="https://github.com/JeffVenancius" target="_blank" rel="noopener noreferrer"><img src="img/contact/github.svg" alt="Github"></a>
				<a href="https://www.linkedin.com/in/jefferson-venancius-3b062a116/" target="_blank" rel="noopener noreferrer"><img src="img/contact/linkedin.svg" alt="Linkedin"></a>
				<a href="mailto:jefferson.venancius@gmail.com"><img src="img/contact/mail.svg" alt="E-mail"></a>
			</div>
		</div>
	</div>
	<main id="main__mobile">
		<div id="placeholder"></div>
	</main>
	<footer><p>Made by Jeff Venancius</p></footer>
	<script src="portfolio.js"></script>
	<script src="script.js"></script>
`
	document.querySelector('body').innerHTML = mobileVersion
	doneMobile = true
	setRender()
}

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
	if (!field) {return}
	keys = Object.keys(DB[field])
	let title = keys[index]
	let description = getInfo('desc')
	let link = getInfo('link')

	let arrowLess = index <= 0
	let arrowGreater = index >= keys.length-1

	let img = `./img/${[keys[index]]}.jpg`
	let inner = `
	<h1 id="title">${title}</h1>
	<div>
	${arrowLess ? '': '<img src="img/arrow.svg" class="button__arrow left" style="transform: scaleX(-1)" onclick="addId(-1)">'}
	<a href="${link}" target="_blank" rel="noopener noreferrer"><img id="cover__img" ${intro && 'class="cover__img"' } src="${img}"/></a>
	${arrowGreater ? '' : '<img src="img/arrow.svg" class="button__arrow right" onclick="addId(1)">'}
	</div>
	<p id="description"}>${description}</p>`
	document.querySelector('main').innerHTML = inner
	intro = false
}
