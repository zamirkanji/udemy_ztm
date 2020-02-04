let database = [
  {
    username: "Runninthruda6ix",
    password: "withmywoes"
  }
];

let newsFeed = [
  {
    username: "Bob",
    timeline: "I'm playing WoW!"
  },
  {
    username: "Braedon",
    password: "I'm playing Tarkov!"
  },
  {
    username: "Sam",
    password: "I just moved to colorado!"
  }
];

let checkUserName = prompt("What is your username?");
let checkPassword = prompt("What is your password?");

function checkCredentials(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    console.log("Sorry! Wrong username and password!");
  }
};

checkCredentials(checkUserName, checkPassword);

//user and pass in checkCredentials are two paramaters being defined
//checkUserName and checkPassword are arguments used to match the parameters