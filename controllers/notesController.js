const prisma = require("../utils/PrismaClients");

async function addTags(req, res) {
  try {
        const data = req.body;
        const tag = await prisma.tag.create({data});
        res.status(200).json({message : 'Tags added successfully'})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


async function getTagById(req, res) {
  try {
    const id = req.params.id;
    const tag = await prisma.tag.findUnique({where: {id: id}});
    if(tag){
        res.status(200).json(tag)
    }else{
        res.status(404).json({message: 'Tag not found'})
    }
} catch (error) {
    res.status(500).json({message: 'Internal server error'})
}
}

async function getTags(req, res) {
  try {
    const tags =  await prisma.tag.findMany();
    res.status(200).json(tags)
} catch (error) {
    res.status(500).json({message: 'Internal server error'})
}
}


async function updateTag(req, res) {
  try {
    const {id} = req.params;
    const data = req.body;
    const tag = await prisma.tag.findUnique({where: {id: id}});
    if(!tag)
        return res.status(404).json({message: 'tag not found'})

    const updatetag = await prisma.tag.update(
        {where: {id: id}, data}
    );
    res.status(200).json(updatetag);
} catch (error) {
    res.status(500).json({message: 'Internal server error'})
}
}

async function deleteTag(req, res) {
  try {
    const {Id} = req.params;
    const tag = await prisma.tag.findUnique({where: {id: Id}});
    if(!tag)
        return res.status(404).json({message: 'Tag not found'})
    const deletedTag = await prisma.tag.delete({where: {id: Id}});
    
    res.status(200).json(deletedTag);
} catch (error) {
    res.status(500).json({message: 'Internal server error'})
}
}

async function addCategory(req, res) {
  
}

async function getCategories(req, res) {
  
}

async function getCategoriesById(req, res) {
  
}
async function updateCategory(req, res) {
  
}

async function deleteCategory(req, res) {
  
}

module.exports = {
  addTags,
  getTags,
  getTagById,
  updateTag,
  deleteTag,
  addCategory,
  getCategories,
  getCategoriesById,
  updateCategory,
  deleteCategory,
};