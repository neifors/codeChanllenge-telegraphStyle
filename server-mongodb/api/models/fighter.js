
const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Fighter {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.age = data.age
        this.country =data.country
        this.fights=data.fights
        this.wins=data.wins;
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const fightData = await db.collection('fighters').find().toArray()
                const fighters = fightData.map(d => new Fighter({ ...d, id: d._id }))
                resolve(fighters);
            } catch (err) {
                console.log(err);
                reject("Error retrieving fighters")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let fightData = await db.collection('fighters').find({ _id: ObjectId(id) }).toArray()
                let fighter = new Fighter({...fightData[0], id: fightData[0]._id});
                resolve (fighter);
            } catch (err) {
                reject('Fighter not found');
            }
        });
    }

    static create(name, age, country, fights, wins){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let fightData = await db.collection('dogs').insertOne({ name, age, country, fights,wins})
                let fighter = new Fighter(fightData.ops[0]);
                resolve (fighter);
            } catch (err) {
                reject('Error creating fighter');
            }
        });
    }

    update() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let updatedDogData = await db.collection('dogs').findOneAndUpdate({ _id: ObjectId(this.id) }, { $inc: { age: 1 } }, { returnOriginal: false })
                let updatedDog = new Dog(updatedDogData.value);
                resolve (updatedDog);
            } catch (err) {
                reject('Error updating dog');
            }
        });
    }

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const db = await init();
                await db.collection('dogs').deleteOne({ _id: ObjectId(this.id) })
                resolve('Dog was deleted')
            } catch (err) {
                reject('Dog could not be deleted')
            }
        })
    }

}

module.exports = Fighter;
