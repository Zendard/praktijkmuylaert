import express from "express";
import kine from "./routes/kine";
import osteo from "./routes/osteo";
const port = parseInt(Bun.env.PORT || "");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.set("views", "./views");

app.get("/", (req, res) => {
	res.render("index");
});

app.use("/kinesitherapie", kine);
app.use("/osteopathie", osteo);

app.get(
	"/*",
	(req, res, next) => {
		res.render("404");
		next();
	},
	(req, res) => {
		res.sendStatus(404);
	}
);

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
