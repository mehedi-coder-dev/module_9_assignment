exports.create = async(req,res)=>{
    res.status(200).json({status:"success",data:"This is create Routes and postController "})
}
exports.read = async(req,res)=>{
    res.status(200).json({status:"success",data:"This is read Routes and postController "})
}
exports.update = async(req,res)=>{
    res.status(200).json({status:"success",data:"This is update Routes and postController "})
}
exports.delete = async(req,res)=>{
    res.status(200).json({status:"success",data:"This is delete Routes and postController "})
}
