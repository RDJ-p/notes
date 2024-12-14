const express = require('express')
const router = express.Router()


const {
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
} = require("../controllers/notesController");
const {validateTag, handleValidationErrors } = require("../middleware/validate");

router.post("/tags",validateTag.tagValidation, handleValidationErrors, addTags);
router.get("/tags/:id", getTagById);
router.get("/tags", getTags);
router.put("/tags/:id" ,validateTag.tagValidation, handleValidationErrors, updateTag);
router.delete("/tags/:id", deleteTag);
router.post("/tags",validateTag.tagValidation, handleValidationErrors, addCategory);
router.get("/tags/:id", getCategoriesById);
router.get("/tags", getCategories);
router.put("/tags/:id" ,validateTag.tagValidation, handleValidationErrors, updateCategory);
router.delete("/tags/:id", deleteCategory);






module.exports = router;