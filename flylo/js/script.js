const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')
const colorTheme = 'color-theme'

if (
  localStorage.getItem(colorTheme) === 'dark' ||
  (!(colorTheme in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  // Show light icon
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')
}

// Listen for toggle button click
themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
  // Toggle icon
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  // If is set in localstorage
  if (localStorage.getItem(colorTheme)) {
    // If light, make dark and save in localstorage
    if (localStorage.getItem(colorTheme) === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem(colorTheme, 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem(colorTheme, 'light')
    }
  } else {
    // If not in localstorage
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem(colorTheme, 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem(colorTheme, 'dark')
    }
  }
}
