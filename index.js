// Your code here
const mapToNegativize = arr => {
   return arr.map(a => a * -1)
}

const mapToNoChange = arr => {
    return arr.map(a => a)
}

const mapToDouble = arr => {
    return arr.map(a => a * 2)
}

const mapToSquare = arr => {
    return arr.map(a => a * a)
}

const reduceToTotal = (arr, start=0) => arr.reduce((total, value) => {return total + value}, start)

const reduceToAllTrue = (arr) => arr.every(v => !!v)
const reduceToAnyTrue = (arr) => arr.some(v => !!v)