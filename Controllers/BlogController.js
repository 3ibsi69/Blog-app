const Blog=require('../Modules/ArticlesModules');




const getALlArticles=async(req,res)=>{
    var articles=await Blog.find();
    res.send(articles);
};



const postArticle=async(req,res)=>{
   await Blog.create(req.body);
    res.send({msg:"Article Added"});
}


const deleteArticle=async(req,res)=>{
    await Blog.findByIdAndDelete(req.params.id);
    res.send({msg:"Article Deleted"});
};


const updateArticle=async(req,res)=>{
    await Blog.findByIdAndUpdate(req.params.id,req.body);
    res.send({msg:"Article Updated"});
};

const getArticle=async(req,res)=>{
    await Blog.findById(req.params.id);
    res.send({msg:"Article Showed"});
};

const deleteAllArticles=async(req,res)=>{
    await Blog.deleteMany();
    res.send({msg:"All Articles Deleted"});
}

module.exports={
    getALlArticles,
    postArticle,
    deleteArticle,
    updateArticle,
    getArticle,
    deleteAllArticles
}