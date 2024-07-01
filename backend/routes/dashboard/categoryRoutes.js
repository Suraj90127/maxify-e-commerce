const router = require("express").Router();
const { authMiddleware } = require("../../middlewares/authMiddleware");
const categoryController = require("../../controllers/dashboard/categoryController");

router.post("/category-add", authMiddleware, categoryController.add_category);
router.post("/subcategory-add/:categoryId", categoryController.add_subcategory);
router.get("/category-get", authMiddleware, categoryController.get_category);

module.exports = router;
