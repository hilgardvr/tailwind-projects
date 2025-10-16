const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')


// tabs menu event listener
tabs.forEach((tab) => {
    tab.addEventListener('click', onTabClick)
})

function onTabClick(e) {
    // deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })

    // hide all panels
    panels.forEach((panel) => {
        panel.classList.add('hidden')
    })

    // activate a new tab and panel based on the target
    e.target.classList.add('border-softRed', 'border-b-4')

    const classString = e.target.getAttribute('data-target')
    document
        .getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}