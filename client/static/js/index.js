const nav = document.querySelector('nav')
const main = document.querySelector('main')
const navLinks = document.querySelectorAll('.navlink')

window.addEventListener('hashchange', updateContent);


function updateNav(hash) {
   const updateLink = link => {
       link.classList = (link.textContent == '+' && hash.includes('new') || hash.includes(link.textContent) || link.textContent == 'Home' && !hash) ? ['navlink', 'current'] : ['navlink']
   };
   navLinks.forEach(updateLink)
}

function updateMain(hash){
   main.innerHTML = '';
   if (hash) {
      switch(hash) {
         case '#new':
            renderCreateForm(); break;
         case '#posts':
            renderShowAll(); break;
         default:
            render404(); break;
      }
   } else {
      renderHomepage();
   }
}



function updateContent(){
   let hash = window.location.hash;
   console.log(hash)
   updateNav(hash);
   updateMain(hash);
}

updateContent();
