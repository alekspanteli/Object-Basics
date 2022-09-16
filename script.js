
const person = {
  name: "Alex",
  city: "Ayia Napa",
  age: 20,
  isStudent: true,
  skills: ["HTML", "CSS", "JS"]
}


// Way to output object items
// console.log(person['name'])
// console.log(person.name)

person.nickname = "Duke"

const message = `Hi, Im ${person.name}. I live in ${person.city}. Most know me as ${person.nickname}. I have ${person.skills.length} skills`
console.log(message)


// person.name = "John"
// console.log(person.name)
