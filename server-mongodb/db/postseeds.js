const db = connect("mongodb://localhost:27017/posts")


db.posts.drop()

db.posts.insertMany([
    {title: 'This is the title',pseudonym: 'annonymous1',body: 'This is the message body I want to publish'},
    {title: 'This is title 2', pseudonym: "Number 2", body: "Another post here"},
    {title: 'This is title 3', pseudonym: "Number 3", body: "Another post "},
    
])


db.posts.insertMany([
    {title: 'Life goals',pseudonym: 'annonymous1',body: 'I literally cannot wait til I hit 30, get a lil house, adopt 20 cats, & finally fulfill my lifelong dream of becoming a crazy cat lady :feet:'},
    {title: "Someone's crush", pseudonym: "Shorty", body: "I think it's cute when someone admits they have a crush on you :heart_eyes:"},
    {title: "Best feeling ever", pseudonym: "JustLaneOso", body: "There is nothing better than showering & putting on a big tshirt & getting into bed with clean sheets literally nothing don't fight me on this"},
    {title: "So much better", pseudonym: "theRsyndrome", body: "I love when someone's laugh is funnier than the actual joke"},
    {title: "Before the diet", pseudonym: "Av", body: "Me: I'm gonna start eating healthy. Also me: treat yourself one last time, u deserve it"},
    {title: "This is me", pseudonym: "Veedy", body: "I can tell 20 different stories while TRYING to tell you ONE"},
    {title: "Subway", pseudonym: "itzaquote", body: "I've been ordering the same sandwich from subway since 2012 bitch who not loyal :rolling_on_the_floor_laughing:"}
])
