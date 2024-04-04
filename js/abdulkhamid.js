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

// checking dark mode from local storage
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
