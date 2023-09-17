import express from "express";
const router = express.Router();

router.use(express.static("./public"));

router.get("/", (req, res) => {
	res.render("osteopathie");
});

router.get("/filosofie", (req, res) => {
	res.render("osteo-filosofie");
});

router.get("/werkwijze", (req, res) => {
	res.render("osteo-werkwijze");
});

router.get("/indicaties", (req, res) => {
	res.render("osteo-indicaties");
});

export default router;
