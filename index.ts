import express from "express";
import kine from "./routes/kine";
const port = parseInt(Bun.env.PORT || "");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.set("views", "./views");

app.get("/", (req, res) => {
	res.render("index");
});

app.use("/kinesitherapie", kine);

app.get("/*", (req, res) => {
	res.render("404");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
