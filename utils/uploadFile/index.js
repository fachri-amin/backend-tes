const multer = require('multer');
const path = require('path');

const upload = (field, multiple=false, multiple_count=50) => {

    const diskStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, "../../public/uploads"));
        },
        filename: function (req, file, cb) {
            if (file.mimetype == "image/jpeg" || file.mimetype == "image/png"){
                cb(
                    null,
                    file.fieldname + "-" + Date.now() + path.extname(file.originalname)
                );
            }
            else{
                return cb(new Error('Invalid upload: file format must be .jpg, .jpeg or png'));
            }
        },
    });
    
    if(multiple){
        return multer({storage: diskStorage}).array(field, multiple_count);
    }
    else{
        return multer({storage:diskStorage}).single(field);
    }
}

module.exports = upload;