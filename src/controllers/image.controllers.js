const imageService = require('../services/image.services')

const getAll = async (req, res, next)=>{
    try{
        const files = await imageService.getAll()
        res.status(200).json(files);
    }catch(e){
        next(e)
    }
}

const create = async (req,res,next)=>{
    try{
        const file = req.files.file;
        const s3Img = await imageService.uploadImage(file)
        const repoImg = await imageService.createRepo(req.body, s3Img)
        res.status(200).json(repoImg);
    }catch(e){
        res.status(200).json({message: e.message});
        next(e)
    }

}

module.exports = {
    getAll,
    create
}