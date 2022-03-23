# CODE CHALLENGE

[Michael Nelson](https://github.com/mwezn), [Isabel Repetto](https://github.com/neifors)

## Project description

This is a place where you can post anything under any pseudonym.
Behind the client (frontend) we have a server running, making use of a Mongo Database to save and display every post.

## Installation & Usage

- Clone this respository

### CLIENT

- Go to `client` folder and open `index.html` using your browser.
- You can also `Open with Live Server` from VS Code if you have installed the extension.
- It depends on the server so it won't work properly until the server is running

### SERVER

- Using your terminal, go into `server-mongodb` folder and run `docker-compose up`
- This command will install everything you need to run the server and will deploy it at http://localhost:3000/

## Technologies

- Docker to create containers for the server and the database
- Node.js, Express, nodemon
- HTML, CSS and JavaScript
- VS Code editor
- GitHub
- Slack for collaboration and communication between team members

## Challenges & Wins

### Wins

- Routes and HTTP requests provided us with the output we intended.
- Successfully managed to produce a site which met all of the basic requirements.

### Challenges

- Set random colors to every card containing the post data. Solved using the Math.random method over an array containing differents colors. Everytime you refresh the page, colors are changing.
- Experienced a few issues at the beggining to get docker-compose.yaml running properly.

## Testing

We had no time for testing

# HOW CLIENT LOOKS

![HOMEPAGE](./client/static/img/client-home.png)


![ALL THE POSTS](./client/static/img/client-posts.png)


![ADD A NEW POST](./client/static/img/client-form.png)
