const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./config/ConnectDB");
const cookieSession = require("cookie-session");
const passport = require("passport");
// dotenv configuration
require("dotenv").config();
// file passport handling configuration to google authentication
require("./AuthWithProviders.js");
// run connection handlers
ConnectDB();
// to decrypt req data
app.use(express.json());
// handling cookie Session to save data with security
app.use(
  cookieSession({ name: "session", keys: [process.env.KEY], maxAge: 24 * 60 * 60 * 1000 })
);

// calling passport initialization and session+
app.use(passport.initialize());
app.use(passport.session());

// cors
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

//get routers from routes

const authRoutes = require("./routes/auth.routes");
const productsRoute = require("./routes/products.routes");
const usersRoutes = require("./routes/users.routes");
const orderRoutes=require("./routes/order.routes.js");
const cartRoutes=require("./routes/Cart.routes.js");
const CategoryRoutes = require("./routes/category.routes.js"); 

// handle middlewares  to routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products",productsRoute );
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/orders",orderRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/category", CategoryRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});
