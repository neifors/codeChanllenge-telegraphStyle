const db = connect("mongodb://localhost:27017/shelter")


db.fighters.drop()

db.fighters.insertMany([
    {name: 'Connor McGregor', age: 33, country: 'Ireland', fights: 28, wins:22},
    {name: 'Khabib Nurmagomedov', age:33, country:' Russia', fights: 29, wins:29},
    {name:'Israel Adesanya', age:32, country:'Nigeria', fights: 22, wins:21},
    {name:'Michael Bisping', age:43, country:'UK', fights:10,wins: 10},
    
])
