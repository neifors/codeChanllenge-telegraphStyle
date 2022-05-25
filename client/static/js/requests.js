async function postData(e) {
   e.preventDefault();
   try {
      const options = {
         method : 'POST',
         headers: { 'Content-Type': 'application/json' },
         body : JSON.stringify(Object.fromEntries(new FormData(e.target))),
      }

      const response = await fetch('https://free-thoughts-server.herokuapp.com/posts', options);
      window.location.hash = `#posts`
   } catch(err) {
      console.warn(err);
   }
}


async function getAll(){
   try {
       const response = await fetch('https://free-thoughts-server.herokuapp.com/posts');
       const data = await response.json()
       return data;
   } catch (err) {
       console.warn(err);
   }
}


