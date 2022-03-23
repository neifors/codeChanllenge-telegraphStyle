function renderCreateForm() {
   const formTitle = document.createElement('h1')
   formTitle.id = "form-title"
   formTitle.textContent = "Leave your thougths here"
   main.appendChild(formTitle)
   
   const fields = [
      { tag: 'input', attributes: { type: 'text', name: 'title', placeholder: 'Title' } },
      { tag: 'input', attributes: { type: 'text', name: 'pseudonym', placeholder: 'Pseudonym' } },
      { tag: 'textarea', attributes: { name: 'message', placeholder: 'Message'}},
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
   form.addEventListener('submit', postData)
   main.appendChild(form);
}


function renderHomepage() {
   const homepageTitle = document.createElement('h1')
   homepageTitle.id = "form-title"
   homepageTitle.textContent = "A place where to feel free sharing your thougths"
   main.appendChild(homepageTitle)
}

async function renderAllPosts() {
   const data = await getAll();
   data.forEach(a => renderCard(a));

}

function renderCard(data){
   let card = document.createElement('div');
   card.className = 'card'; 
   let title = document.createElement('h3');
   title.className = 'card-title';
   title.textContent = data.title;
   let message = document.createElement('p')
   message.className = 'card-message';
   message.textContent = data.body;
   let signature = document.createElement('p')
   signature.className = "signature";
   signature.textContent = data.pseudonym;

   card.appendChild(title);
   card.appendChild(message);
   card.appendChild(signature);
   main.appendChild(card);
}
