const fs = require('fs')

fs.createReadStream('./salsicha.jpg')
  .pipe(fs.createWriteStream('./salsicha3.jpg'))
  .on('finish', data => console.log('imagem escrita com sucesso'))
