var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


let mainEl = document.querySelector('main')
let bgColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg')
let h1El = document.createElement('h1')
let topMenuEl = document.getElementById('top-menu')
let topMenuBg = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg')

for (let i = 0; i < menuLinks.length; i++) {
    let link = document.createElement('a')
    link.href = menuLinks[i].href
    link.textContent = menuLinks[i].text
    topMenuEl.appendChild(link)
}


topMenuEl.style.height = '100%'
h1El.textContent = 'SEI Rocks'
document.querySelector('main').appendChild(h1El)
mainEl.style.backgroundColor = bgColor
topMenuEl.style.backgroundColor = topMenuBg
mainEl.classList.add('flex-ctr')
topMenuEl.classList.add('flex-around')