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

   
}
