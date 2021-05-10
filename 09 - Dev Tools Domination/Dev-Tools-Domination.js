const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello There!')

// Interpolated
console.log("Hello My name is $%", "Norah");

// Styled
console.log("%c I'm Developer","color:red");

// warning!
console.warn("WHAT ARE YOU DOING?");

// Error :|
console.error("This is Wrong!");

// Info
console.info("This is my github account: https://github.com/NorahSuhail ")

// Testing
console.assert(2 == 3, "wrong");

const p = document.querySelector("p");
console.assert(p.classList.contains("red"), "wrong, there is NO red class");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`dog name is ${dog.name}`);
  console.log(` and he is ${dog.age} years old.`);
  console.log(` and he love to dance`);
  console.groupEnd(`${dog.name}`);

  console.groupCollapsed(`${dog.name}`);
  console.log(`dog name is ${dog.name}`);
  console.log(` and he is ${dog.age} years old.`);
  console.log(` and he love to dance`);
  console.groupEnd(`${dog.name}`);

});

// counting
console.count('Norah');
console.count('Norah');
console.count('Suhail');
console.count('Norah');
console.count('Suhail');
console.count('Suhail');
console.count('Norah');
console.count('Norah');
console.count('Suhail');
console.count('Suhail');

// timing
console.time('Fetch Data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json)
  .then( data => {
      console.timeEnd('Fetch Data');
      console.log(data);
    }
  );

// table
console.table(dogs);