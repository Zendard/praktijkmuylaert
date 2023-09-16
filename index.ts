import Express from "express";
import kine from "./routes/kine";
const port = parseInt(Bun.env.PORT || "");

const app = Express();
app.set("view engine", "ejs");
app.use(Express.static("./public"));
app.set("views", "./views");

app.get("/", (req, res) => {
	res.render("index");
});

app.use("/kinesitherapie", kine);

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
