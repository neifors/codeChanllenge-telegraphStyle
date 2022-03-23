const db = connect("mongodb://localhost:27017/posts")


db.posts.drop()

db.posts.insertMany([
    {title: 'This is the title',pseudonym: 'annonymous1',body: 'This is the message body I want to publish'},
    {title: 'This is title 2', pseudonym: "Number 2", body: "Another post here"}
])
