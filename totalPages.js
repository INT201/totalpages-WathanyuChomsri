const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here

  if (arrayItems == null || undefined) {
    return undefined
  } else if (rowsPerPage == null || undefined ) {
    return 1
  }else if (rowsPerPage === 0){ //ต้องเช็คแยก เพราะต้องเช็ค  type ด้วย 
    return 1
  } else (num = arrayItems.length / rowsPerPage)
    return Math.ceil(num)

  }


module.exports = totalPages
