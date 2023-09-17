import express from "express";
const router = express.Router();

router.use(express.static("./public"));

router.get("/", (req, res) => {
	res.render("kinesitherapie");
});

router.get("/werkwijze", (req, res) => {
	res.render("kine-werkwijze");
});

export default router;
