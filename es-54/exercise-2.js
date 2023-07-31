function nicknameMap(persons) {
  return persons.map(person => `${person.name}-${person.age}`);
}
const persons = [
  { name: 'Paul', age: 21 },
  { name: 'maria', age: 45 },
  { name: 'Pedro', age: 10 }
];
const nicknames = nicknameMap(persons);
console.log(nicknames);
