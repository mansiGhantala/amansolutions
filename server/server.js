require("dotenv").config();
const  express  = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// let's tackle cors 
const corsOptions = {
  // origin: "http://localhost:5173",
  origin: "https://amansolutions.vercel.app",
  methods:["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD",],
  credentials: true,
};
app.use(cors(corsOptions));

// middleware
app.use(express.json());

//? (Add karvu) Mount the router : to use the  router in your main express app, you can "mount" it at a specific URL prefix 
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
// let's define admin route
app.use("/api/admin", adminRoute);




app.use(errorMiddleware);

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to the best Mern  development!.."); });
// app.get("/register", (req, res) => {
//     res.status(200).send("Welsssome to the register page !..")});

const PORT = 5000;
connectdb().then(()=>{
app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
});