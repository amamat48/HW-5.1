var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];



let showingSubMenu = false

let mainEl = document.querySelector('main')
let mainBgColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg')
let h1El = document.createElement('h1')
let topMenuEl = document.getElementById('top-menu')
let topMenuBg = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg')
let subMenuEl = document.querySelector('#sub-menu')
let subMenuBg = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg')
let topMenuLinks = topMenuEl.querySelectorAll('a')

subMenuEl.classList.add('flex-around')
topMenuEl.style.height = '100%'
subMenuEl.style.height = '100%'
h1El.textContent = 'SEI Rocks'

document.querySelector('main').appendChild(h1El)

mainEl.style.backgroundColor = mainBgColor
topMenuEl.style.backgroundColor = topMenuBg

subMenuEl.style.backgroundColor = subMenuBg
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'
mainEl.classList.add('flex-ctr')
topMenuEl.classList.add('flex-around')

for (let i = 0; i < menuLinks.length; i++) { // makes the top nav bar
  let link = document.createElement('a')
  link.href = menuLinks[i].href
  link.textContent = menuLinks[i].text
  topMenuEl.appendChild(link)
}



topMenuEl.addEventListener('click', function (event) {
  event.preventDefault()

  if (event.target.tagName !== 'A') {
    return
  }
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }

  const buildSubMenu = (arr) => {

    subMenuEl.textContent = '';

    for (let i = 0; i < arr.length; i++) {

      let newA = document.createElement('a');
      newA.href = arr[i].href;
      newA.text = arr[i].text;
      subMenuEl.appendChild(newA);
    }


  }

  let link = menuLinks.find(l => l.text === event.target.textContent)

console.log(link)
  if (link && link.subLinks) {
    showingSubMenu = true
    console.log('showing sub menu is true')
  } else {
    showingSubMenu = false
    subMenuEl.style.top = '0'
  }


if (showingSubMenu === true) {
  buildSubMenu(link.subLinks)
  subMenuEl.style.top = '100%'
} else {
  subMenuEl.style.top = '0'
}

  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove('active')
  }

  subMenuEl.addEventListener('click', function(event) {
    event.preventDefault()
    if (event.target.tagName !== 'A') return;

    console.log(event.target.textContent);

    showingSubMenu = false;
    subMenuEl.style.top = '0';


    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });


    var clickedLink = event.target;
    var linkText = clickedLink.textContent;
    var content = '';

    if (linkText === 'ABOUT') {
      content = '<h1>about</h1>';
    } else {
      content = '<h1>' + linkText.toLowerCase() + '</h1>';
    }

    mainEl.innerHTML = content;

   
    clickedLink.classList.add('active');
  });






  event.target.classList.add('active')
  console.log(event.target.textContent)

})

subMenuEl.classList.add('flex-around')
topMenuEl.style.height = '100%'
subMenuEl.style.height = '100%'
h1El.textContent = 'SEI Rocks'

document.querySelector('main').appendChild(h1El)

mainEl.style.backgroundColor = mainBgColor
topMenuEl.style.backgroundColor = topMenuBg

subMenuEl.style.backgroundColor = subMenuBg
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'
mainEl.classList.add('flex-ctr')
topMenuEl.classList.add('flex-around')