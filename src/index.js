
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
let new_array = []

if( typeof(matrix)== 'undefined' ) return  []

matrix.map( (value, index) => {
  if (index % 2 ){ return matrix[index].reverse() }
})

matrix.map( (value) =>  new_array = new_array.concat(value) )

return new_array

}

