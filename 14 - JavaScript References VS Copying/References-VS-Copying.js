  // start with strings, numbers and booleans
  let age = 100;
  let age2 = age;
  console.log(age, age2);
  age = 200;
  console.log(age, age2);

  let name = 'Norah';
  let name2 = name;
  console.log(name, name2);
  name = 'Norah Suhail';
  console.log(name, name2);

  // Let's say we have an array
  const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

  // and we want to make a copy of it.   
  // You might think we can just do something like this:
  // This is refrence to array not copy from it.
  const team = players;
  team[3] = 'Norah';
  console.log(players,team);

  // however what happens when we update that array?

  // now here is the problem!

  // oh no - we have edited the original array too!

  // Why? It's because that is an array reference, not an array copy. They both point to the same array!

  // So, how do we fix this? We take a copy instead!

  // one way
  const team2 = players.slice();
  team2[3] = 'Suhail';
  console.log(players,team2); 

  // or create a new array and concat the old one in
  const team3 = [].concat(players);
  team3[3] = 'Jod';
  console.log(players,team3);

  // or use the new ES6 Spread
  const team4 =[...players];
  team4[3] = 'Raghad';
  console.log(players,team4);

  // Using Arrays
  const team5 = Array.from(players);
  team4[3] = 'Huda';
  console.log(players,team4);
  
  // now when we update it, the original one isn't changed

  // The same thing goes for objects, let's say we have a person object

  // with Objects
  const person = {
    name: 'Wes Bos',
    age: 80
  };

  // and think we make a copy:
  const person1 = person;
  person1.name = 'Norah';
  console.log(person,person1);

  // how do we take a copy instead?
  const person2 =  Object.assign({}, person, {name: 'Reef'});
  console.log(person,person2);

  // We will hopefully soon see the object ...spread
  const person3 = {...person};
  console.log(person,person3);
 
  // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
  const Norah = {
    name: 'Norah Suhail',
    age : 24, 
    social: {
      twitter: "Do not remmber",
      instgram: "The same as teitter"
    }
  }

  const Norah2 =  Object.assign({}, Norah, {name: 'Reef'});
  console.log(Norah,Norah2);

  Norah.name = 'Norah Suhail';
  Norah.social.twitter = 'I know';
  console.log(Norah,Norah2);
  // Clone Deep

  //Other Way
  const Norah3 = JSON.parse(JSON.stringify(Norah));
  Norah.social.twitter = 'What are you talking about';
  console.log(Norah,Norah3);