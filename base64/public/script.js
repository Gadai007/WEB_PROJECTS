
    let inpCode = document.getElementById('inpCode')
    let btnEncode = document.getElementById('btnEncode')
    let code = document.getElementById('code')
    let btnEncrypt = document.getElementById('btnEncrypt')
    let btnEval = document.getElementById('btnEval')

    btnEncode.onclick = function() {
        let data = inpCode.value
        data = btoa(data)
        code.value = data
    }

    function encrypt(data){
       let code = data
       let newcode = []

       for(let i =0; i < code.length; i++){
           if (code[i] == code[i].toLowerCase()){
               newcode[i] = code[i].toUpperCase()
           }
           else if(code[i] == code[i].toUpperCase()) {
               newcode[i] = code[i].toLowerCase()
           }
           else {
               newcode[i] = code[i]
           }
       }
       return newcode.join('')
    }

    btnEncrypt.onclick = function(){
        let data = code.value
        data = encrypt(data)
        code.value = data
    }




