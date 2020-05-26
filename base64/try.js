function convert(data) {
   let code = data
   let newcode = []
   for(let i =0; i< code.length; i++){
      if(code[i] == code[i].toLowerCase()){
         newcode[i] = code[i].toUpperCase()
      }
      else if(code[i] == code[i].toUpperCase()){
         newcode[i] = code[i].toLowerCase()
      }
      else {
         newcode[i] = code[i]
      }
   }
   return newcode.join('')
}

console.log(convert('aBcD'))

for (let code in req.query) {
   console.log(code)
   let data = req.query[code] 
   data = new Buffer(data, 'base64').toString('ascii')
   req.query[code] = data
   
}
next()


   
   let data = req.query.code
   data = new Buffer(data, 'base64').toString('ascii')
   req.query.code = data
   

next()