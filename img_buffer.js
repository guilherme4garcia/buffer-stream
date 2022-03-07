const fs = require('fs')

fs.readFile('./salsicha.jpg', (erro, buffer) => {
  console.log(buffer)
  console.log('imagem foi bufferizada')

  fs.writeFile('./salsicha2.jpg', buffer, erro => {
    console.log('imagem foi escrita')
  })
})
