function renderCreateForm() {
   const formTitle = document.createElement('h1')
   formTitle.id = "form-title"
   formTitle.textContent = "Leave your thoughts here"
   const formWrapper = document.createElement('div')
   formWrapper.id = 'form-wrapper';
   const closeBtn=document.createElement('button')
   closeBtn.textContent=`X`

   
   const fields = [
      { tag: 'input', attributes: { type: 'text', id: 'title-field', name: 'title', placeholder: 'Title' } },
      { tag: 'input', attributes: { type: 'text', id: 'pseudonym-field', name: 'pseudonym', placeholder: 'Pseudonym' } },
      { tag: 'textarea', attributes: { id: 'message-field', cols: 30, rows: 12,  name: 'message', placeholder: 'Message'}},
      { tag: 'input', attributes: { type: 'submit', value: 'Publish' } }
   ]

   const form = document.createElement('form');
   fields.forEach(f => {
       let field = document.createElement(f.tag);
       Object.entries(f.attributes).forEach(([a, v]) => {
           field.setAttribute(a, v);
           form.appendChild(field);
       })
   })
   main.id = "flex"

   form.addEventListener('submit', postData)
   closeBtn.addEventListener('click', async e => {
      window.location.hash='#posts'
   })
   formWrapper.appendChild(formTitle)
   formWrapper.appendChild(form)
   formWrapper.appendChild(closeBtn)
   main.appendChild(formWrapper);
}


function renderHomepage() {
   const homeWrapper = document.createElement('div')
   homeWrapper.id = "home-wrapper"
   const homepageTitle = document.createElement('h1')
   homepageTitle.id = "home-title"
   homepageTitle.textContent = "A place where to feel free sharing your thoughts"
   homeWrapper.appendChild(homepageTitle)
   const img = document.createElement('img')
   img.src = "./static/img/homepage.jpg"
   img.id = "home-img"

   main.id = "flex"

   homeWrapper.appendChild(img)
   main.appendChild(homeWrapper)
}

async function renderAllPosts() {
   const data = await getAll();
   console.log(data, !data)
   if (!data){
      let d=document.createElement('h3')
      d.textContent='Loading posts'
      main.appendChild(d)
   }
   data.forEach(a => renderCard(a));

}

function renderCard(data){
   let card = document.createElement('div');
   card.className = 'card'; 
   const color = randomColor()
   card.style = `background-color: ${color};`
   let title = document.createElement('h3');
   title.className = 'card-title';
   title.textContent = data.title;
   let message = document.createElement('p')
   message.className = 'card-message';
   message.textContent = data.body;
   let signature = document.createElement('p')
   signature.className = "signature";
   signature.textContent = `by ${data.pseudonym}`;

   main.id = "grid"

   card.appendChild(title);
   card.appendChild(message);
   card.appendChild(signature);
   main.appendChild(card);
}

function randomColor() {
   const colorList = ["rgb(238, 195, 232)","rgb(187, 240, 187)","rgb(235, 243, 164)","rgb(165, 109, 218)","rgb(156, 250, 242)","rgb(231, 129, 129)","rgb(129, 144, 231)","rgb(153, 231, 129)"]
   return colorList[Math.floor(Math.random() * 8)]
}

function render404() {
   const error = document.createElement('h1')
   error.id = "error"
   error.textContent = "ERROR: 404 NOT FOUND"
   main.appendChild(error)
}
