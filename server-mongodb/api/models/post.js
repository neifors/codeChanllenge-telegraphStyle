const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Post{
    constructor(data){
        this.id= data.id;
        this.title = data.title
        this.pseudonym = data.pseudonym
        this.body = data.body
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const postsData = await db.collection('posts').find().toArray()
                const posts = postsData.map(d => new Post({...d, id: d._id}))
                resolve(posts);
            } catch (err) {
                console.log(err);
                reject("Error retrieving posts")
            }
        })
    }
    static create(title,pseudonym, body){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').insertOne({title,pseudonym, body})
                let newPost = new Post(postData.ops[0]);
                resolve (newPost);
            } catch (err) {
                reject('Error creating post');
            }
        });
    }

}

module.exports=Post;
