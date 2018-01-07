import '../scss/styles.scss';

console.info('Hello!')

let array = [1,2,3,4]
const newArray = array.map( item => {
    return item + 1
})
console.log(newArray)