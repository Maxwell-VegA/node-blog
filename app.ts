import mongoose from "mongoose";
import express, {
  Application,
  Request,
  Response,
  NextFunction,
  urlencoded,
} from "express";
import expressLayouts from "express-ejs-layouts";
const app: Application = express();
import "dotenv/config";

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.json());
app.use(urlencoded({ extended: false }));

const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

app.get("/", (req: Request, res) => {
  res.json({ foo: 1 });
});

app.put("/", (req: Request, res) => {
  const foo = req.body.foo;
  const sum = parseInt(foo) + 1;
  res.json({ foo: sum });
});

app.post("/", (req: Request, res) => {
  const foo = req.body.foo;
  res.json({ foo });
});

const dbconn = (): string => {
  if (process.env.DB_CONNECTION === undefined) return "undefined";
  return process.env.DB_CONNECTION;
};
mongoose.connect(dbconn(), { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

app.listen(8081);

// module.exports = app;
// export = app;
