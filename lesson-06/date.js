const date = new Date(Date.UTC(2000, 1, 1))

console.log(date)
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getTime())
console.log(date.getDate())
console.log(date.getDay())

const date1 = new Date('01/01/2000');

console.log(date1)

const date2 = new Date('2000-01-01');

console.log(date2)

const date3 = new Date('2010-01-01');
const date4 = new Date('2020-01-20');

for(let startDateDay = date3.getDate(); startDateDay < date4.getDate(); startDateDay++) {
    console.log(startDateDay)
}
