const router = require("express").Router();

var BlogController = require("../Controllers/BlogController");

router.get("/", BlogController.getALlArticles);
router.get("/:id", BlogController.getArticle);

router.post("/", BlogController.postArticle);

router.delete("/", BlogController.deleteAllArticles);
router.delete("/:id", BlogController.deleteArticle);

router.put("/:id", BlogController.updateArticle);

module.exports = router;
