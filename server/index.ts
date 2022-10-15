import cookieSession from "cookie-session";
import passport from "passport";
import express from "express";
import cors from "cors";

import "./passport";
import router from "./routes/auth";

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["hakim"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, PUT, DELETE, POST",
    credentials: true,
  })
);

app.use("/auth", router);

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
