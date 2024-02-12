# What is this Project ?
Hello, this project is a Quiz Application written by React.You can create quiz or you can solve.There is a feed for you can see the quizs made by other users.I used materialUI for css library.

# What Can You Do ?
You can use just count boards or save them as a mini boards but you should give a title to them. If you don't, you can't save them. When you save a quiz,Your quizs are going to save in a simple api server.

# How It's Working ?
When you save your quiz,they gonna save to in a simple api server thanks to post method at axios.Then,when we refresh the page,an UseEffect is gonna work and send a request to a json file name with "db.json".It's gonna pull all off quiz and render as a mini card to your page.

# Get Started 

`npm install axios`

`npm install -g json-server`

`npx json-server --watch db.json`

`npm install @mui/material @emotion/react @emotion/styled`
