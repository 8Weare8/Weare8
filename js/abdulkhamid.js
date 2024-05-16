const menuButton = document.querySelector('.burger')
const btnDarkMode = document.querySelector('.dark-mode-btn')
const themeIcon = document.getElementById('logo_img1')
const themeIcon2 = document.getElementById('logo_img2')

// cheking dark mode from system settings
if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
	themeIcon.src = '/img/logo/dark-small-logo.jpg'
	themeIcon2.src = '/img/logo/dark-small-logo.jpg'
}

// checking dark mode and language from local storage
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
	themeIcon.src = '/img/logo/dark-small-logo.jpg'
	themeIcon2.src = '/img/logo/dark-small-logo.jpg'
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-btn--active')
	document.body.classList.remove('dark')
	themeIcon.src = '/img/logo/light-small-logo.jpg'
	themeIcon2.src = '/img/logo/light-small-logo.jpg'
}

// if system settings change, change the scheme

window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', (event) => {
		const newColorScheme = event.matches ? 'dark' : 'light'

		if (newColorScheme === 'dark') {
			btnDarkMode.classList.add('dark-mode-btn--active')
			document.body.classList.add('dark')
			localStorage.setItem('darkMode', 'dark')
			themeIcon.src = '/img/logo/dark-small-logo.jpg'
			themeIcon2.src = '/img/logo/dark-small-logo.jpg'
		} else {
			btnDarkMode.classList.remove('dark-mode-btn--active')
			document.body.classList.remove('dark')
			localStorage.setItem('darkMode', 'light')
			themeIcon.src = '/img/logo/light-small-logo.jpg'
			themeIcon2.src = '/img/logo/light-small-logo.jpg'
		}
	})

// turn on hamburger menu
if (menuButton) {
	const menuBody = document.querySelector('.menu')
	menuButton.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		menuButton.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}
// turn on dark mode when button is clicked
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	const isDark = document.body.classList.toggle('dark')

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
		themeIcon.src = '/img/logo/dark-small-logo.jpg'
		themeIcon2.src = '/img/logo/dark-small-logo.jpg'
	} else {
		localStorage.setItem('darkMode', 'light')
		themeIcon.src = '/img/logo/light-small-logo.jpg'
		themeIcon2.src = '/img/logo/light-small-logo.jpg'
	}
}

//translate
function translateTurkish() {
	if(document.getElementById('slogan') != null){
	let sloganTr =
		'Başarımın farkındaydım ama iyileşmeye çalışmaktan asla vazgeçmedim. - Michael Jordan'
	document.getElementById('slogan').innerHTML = sloganTr
	}
	if(document.getElementById('welcome') != null){
	let welcomeTr = 'Merhaba, benim adım'
	document.getElementById('welcome').innerHTML = welcomeTr
	}
	if(document.getElementById('name') != null){
	let nameTr = 'Abdülhamid'
	document.getElementById('name').innerHTML = nameTr
	}
	if(document.getElementById('more') != null){
	let moreTr = '<-- daha fazla bilgi edinmek için tıklayın'
	document.getElementById('more').innerHTML = moreTr
	}
	if(document.getElementById('projects') != null){
	let projectsTr = 'Projeler'
	document.getElementById('projects').innerHTML = projectsTr
	}
	if(document.getElementById('footer_slogan') != null){
	let footerSloganTr = 'Senin hayalin, Benim tutkum'
	document.getElementById('footer_slogan').innerHTML = footerSloganTr
	}
	if(document.getElementById('home') != null){
	let homeTr = 'Ana Sayfa'
	document.getElementById('home').innerHTML = homeTr
	}
	if(document.getElementById('contact') != null){
	let contactTr = 'Iletişim'
	document.getElementById('contact').innerHTML = contactTr
	}
	if(document.getElementById('back') != null){
	let backTr = 'Geri dön'
	document.getElementById('back').innerHTML = backTr
	}
	if(document.getElementById('description') != null){
		let backEn = "Merhaba, ben Abdülhamid. 18 yaşındayım ve Rusya'lıyım. Türkiye'de Kayseri şehrinde bir lisede okuyorum. Buna paralel olarak web geliştirme öğreniyorum."
		document.getElementById('description').innerHTML = backEn
	}
		
	if(document.getElementById('about_me') != null){
		let backEn = "Benim hakkımda"
		document.getElementById('about_me').innerHTML = backEn
	}
	if(document.getElementById('learning') != null){
		let backEn = 'Ne öğreniyorum:'
		document.getElementById('learning').innerHTML = backEn
	}
	if(document.getElementById('used') != null){
		let backEn = 'Kullandıklarım: HTML5 + CSS'
		document.getElementById('used').innerHTML = backEn
	}

}

function translateEnglish() {
	if(document.getElementById('slogan') != null){
		let sloganEn =
			'I was aware of my success, but I never stopped trying to get better. — Michael Jordan'
		document.getElementById('slogan').innerHTML = sloganEn
		}
		if(document.getElementById('welcome') != null){
		let welcomeEn = 'Hello, my name is'
		document.getElementById('welcome').innerHTML = welcomeEn
		}
		if(document.getElementById('name') != null){
		let nameEn = 'Abdulkhamid'
		document.getElementById('name').innerHTML = nameEn
		}
		if(document.getElementById('more') != null){
		let moreEn = '<-- click to learn more'
		document.getElementById('more').innerHTML = moreEn
		}
		if(document.getElementById('projects') != null){
		let projectsEn = 'Projects'
		document.getElementById('projects').innerHTML = projectsEn
		}
		if(document.getElementById('footer_slogan') != null){
		let footerSloganEn = 'Your dream, My passion'
		document.getElementById('footer_slogan').innerHTML = footerSloganEn
		}
		if(document.getElementById('home') != null){
		let homeEn = 'Home'
		document.getElementById('home').innerHTML = homeEn
		}
		if(document.getElementById('contact') != null){
		let contactEn = 'Contact'
		document.getElementById('contact').innerHTML = contactEn
		}
		if(document.getElementById('back') != null){
		let backEn = 'Go Back'
		document.getElementById('back').innerHTML = backEn
		}
		if(document.getElementById('description') != null){
			let backEn = "Hi, I'm Abdulkhamid. I'm 18 years old and I'm from Russia. I study in Turkey in a high school in the city of Kayseri. In parallel tothat, I'm learning web development."
			document.getElementById('description').innerHTML = backEn
		}
			
		if(document.getElementById('about_me') != null){
			let backEn = "About Me"
			document.getElementById('about_me').innerHTML = backEn
		}
		if(document.getElementById('learning') != null){
			let backEn = 'What im learning:'
			document.getElementById('learning').innerHTML = backEn
		}
		if(document.getElementById('used') != null){
			let backEn = 'What i used: HTML5 + CSS'
			document.getElementById('used').innerHTML = backEn
		}
			
	



}