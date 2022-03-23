// ********************************************
// SETUP
const btn = document.querySelector('#msg-btn');
const form = document.querySelector('#new-dog-form');
const dogsList = document.querySelector('table');

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitDog);

// Fetch all cats as soon as app is loaded
getAllDogs();

// ********************************************

// DOGS FLOW
// index
function getAllDogs(){
    fetch('http://localhost:3000/dogs')
        .then(r => r.json())
        .then(appendDogs)
        .catch(console.warn)
};

// create
function submitDog(e){
    e.preventDefault();

    const dogData = {
        name: e.target.name.value,
        age: e.target.age.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(dogData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/dogs', options)
        .then(r => r.json())
        .then(appendDog)
        .then(() => e.target.reset())
        .catch(console.warn)
};

function updateDog(id, tr){
    const options = { 
        method: 'PATCH',
    };
    fetch(`http://localhost:3000/dogs/${id}`, options)
        .then(r => r.json())
        .then(data => {
            const { dog } = data
            tr.querySelectorAll('td')[1].textContent = dog.age
        })
        .catch(console.warn)
}

function deleteDog(id, li){
    console.log('deleting', id)
    const options = { 
        method: 'DELETE',
    };
    fetch(`http://localhost:3000/dogs/${id}`, options)
        .then(li.remove())
        .catch(console.warn)
}

// helpers
function appendDogs(data){
    data.dogs.forEach(appendDog);
};

function appendDog(dogData){
    const newRow = document.createElement('tr');
    const dogLi = formatDogTr(dogData, newRow)
    dogsList.append(newRow);
};


function formatDogTr(dog, tr){
    const nameTd = document.createElement('td');
    const ageTd = document.createElement('td');
    const delTd = document.createElement('td');
    const uptTd = document.createElement('td');

    const delBtn = document.createElement('button');
    const uptBtn = document.createElement('button');
    delBtn.setAttribute('class', 'delete')
    uptBtn.setAttribute('class', 'update')
    delBtn.textContent = 'X';
    uptBtn.textContent = '+';
    delBtn.onclick = () => deleteDog(dog.id, tr);
    uptBtn.onclick = () => updateDog(dog.id, tr);
    delTd.append(delBtn);
    uptTd.append(uptBtn);

    nameTd.textContent = dog.name
    ageTd.textContent = dog.age

    tr.append(nameTd)
    tr.append(ageTd)
    tr.append(delTd)
    tr.append(uptTd)

    return tr
}

// ********************************************

// MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:3000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    document.querySelector('#msg-btn').textContent = msgText;
};



// ********************************************