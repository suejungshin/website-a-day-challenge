
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

let filtered = inventors.filter((inventor) => {
  return (inventor.year >= 1500 && inventor.year <= 1599)
})
console.log('filtered', filtered)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
let joined = inventors.map((inventor) => {
  return (inventor.first + ' ' + inventor.last)
})
console.log('joined', joined)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let sorted = inventors.sort((a, b) => {
  return a.year - b.year
})
console.log('sorted', sorted)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let reduced = inventors.reduce((acc, curr) => {
  return acc + (curr.passed - curr.year)
}, 0)
console.log('reduced', reduced)

// 5. Sort the inventors by years lived
let longestLives = inventors.sort((a, b) => {
  let age1 = a.passed - a.year;
  let age2 = b.passed - b.year;
  return age2 - age1;
})
console.log('longestLives', longestLives)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// run in console at page above
// const list = Array.from(document.querySelectorAll('.mw-category a'))
// let result = list.map((div) => {
//   return div.text
// })
//   .filter((el) => {
//     return el.includes('de')
//   })
// console.log(result)


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedLastName = people.sort((a, b) => {
  let name1 = a.split(', ')[0]
  let name2 = b.split(', ')[0]
  if (name1 <= name2) {
    return -1
  } else {
    return 1
  }
})
console.log('sorted last name', sortedLastName)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const map = {}
for (let i = 0; i < data.length; i++) {
  if (map[data[i]] === undefined) {
    map[data[i]] = 1;
  } else {
    map[data[i]]++;
  }
}
console.log('map', map)

