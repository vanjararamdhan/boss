const passwordHash = require('password-hash');
let generateHash = (value) => {
   return passwordHash.generate(value, { algorithm: 'sha256' })
   

}

console.log(generateHash('admin1234'));