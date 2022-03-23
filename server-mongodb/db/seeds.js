const db = connect("mongodb://localhost:27017/shelter")

db.dogs.drop()
db.owners.drop()
db.fighters.drop()

db.dogs.insertMany([
    { name: "Pochi", age: 10, favouriteSnack: "antimatter" },
    { name: "Mitzi", age: 2, temperament: "moody" },
    { name: "Shelley", age: 7, breed: "Frenchie" },
    { name: "Clifford", size: "big", colour: "red", owner: "Elizabeth" },
    { name: 'Myshkin', age: 5, bestFriend: 'me', owner: 'me', favouriteToy: "tennis ball", favouriteFood: "people's legs" },
    { name: "Rex", age: 4, dinnerTime: 6, colour: "brown" },
    { name: "Snoopy", age: 5, owner: "Charlie" },
    { name: 'Mochi', age: 3, breed: 'shi-pu', ownerName: 'Naz' },
    { name: 'Masha', age: 5, breed: 'shih-tzu', ownerName: 'Vesna' },
    { name: 'Hendon', age: 2, breed: 'golden retriever', ownerName: 'Vesna' },
    { name: 'Zola', age: 13, breed: 'golden retriever', ownerName: 'Beth' },
    { name: 'Snip', age: 3, breed: 'greyhound' }
])

db.owners.insertMany([
    { name: 'Beth' },
    { name: 'Naz' },
    { name: 'Eric' },
    { name: 'Vesna' }
])

db.fighters.insertMany([
    {name: 'Connor McGregor', age: 33, country: 'Ireland', fights: 28, wins:22},
    {name: 'Khabib Nurmagomedov', age:33, country:' Russia', fights: 29, wins:29},
    {name:'Israel Adesanya', age:32, country:'Nigeria', fights: 22, wins:21},
    {name:'Michael Bisping', age:43, country:'UK', fights:10,wins: 10},
    {names:'Testing error', age:2000}
])
