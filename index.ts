import express from "express";
import kine from "./routes/kine";
import osteo from "./routes/osteo";
import compression from "compression";
import favicon from "serve-favicon";
const port = parseInt(Bun.env.PORT || "");

const app = express();
app.set("view engine", "ejs");
console.log(__dirname+"/public/favicon.ico");
app.use(favicon(__dirname+"/public/favicon.ico"));
app.use(express.static("./public"));
app.set("views", "./views");
app.use(compression());

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/contact", (req, res) => {
	res.render("contact");
});

app.use("/kinesitherapie", kine);
app.use("/osteopathie", osteo);

app.get("/*",(req, res) => {
	res.render("404");
}
);

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
