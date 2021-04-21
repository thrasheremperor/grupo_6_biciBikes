
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
     cb(null,'public/images/imgUser')
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage :storage})

module.exports = upload

//aca debe ir el multer que usaste para guardar las imagen que el usuario subio para su perfil