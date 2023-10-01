exports.create = async(req,res)=>{
    res.status(200).json({status:"success",data:"This is create Routes and adminController "})
}
exports.read = async(req,res)=>{
    res.status(200).json({status:"success",data:"This is read Routes and adminController "})
}
exports.update = async(req,res)=>{
    res.status(200).json({status:"success",data:"This is update Routes and adminController "})
}
exports.delete = async(req,res)=>{
    res.status(200).json({status:"success",data:"This is delete Routes and adminController "})
}
