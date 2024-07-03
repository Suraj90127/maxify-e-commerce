// const express = require("express");
// const { dbConnect } = require("./utiles/db");
// const app = express();
// const cors = require("cors");
// const http = require("http");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// require("dotenv").config();
// const socket = require("socket.io");

// const path = require("path");

// const server = http.createServer(app);

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     credentials: true,
//   })
// );

// const io = socket(server, {
//   cors: {
//     origin: "*",
//     credentials: true,
//   },
// });

// var allCustomer = [];
// var allSeller = [];

// const addUser = (customerId, socketId, userInfo) => {
//   const checkUser = allCustomer.some((u) => u.customerId === customerId);
//   if (!checkUser) {
//     allCustomer.push({
//       customerId,
//       socketId,
//       userInfo,
//     });
//   }
// };

// const addSeller = (sellerId, socketId, userInfo) => {
//   const checkSeller = allSeller.some((u) => u.sellerId === sellerId);
//   if (!checkSeller) {
//     allSeller.push({
//       sellerId,
//       socketId,
//       userInfo,
//     });
//   }
// };

// const findCustomer = (customerId) => {
//   return allCustomer.find((c) => c.customerId === customerId);
// };
// const findSeller = (sellerId) => {
//   return allSeller.find((c) => c.sellerId === sellerId);
// };

// const remove = (socketId) => {
//   allCustomer = allCustomer.filter((c) => c.socketId !== socketId);
//   allSeller = allSeller.filter((c) => c.socketId !== socketId);
// };

// let admin = {};

// const removeAdmin = (socketId) => {
//   if (admin.socketId === socketId) {
//     admin = {};
//   }
// };

// io.on("connection", (soc) => {
//   console.log("socket server is connected...");

//   soc.on("add_user", (customerId, userInfo) => {
//     addUser(customerId, soc.id, userInfo);
//     io.emit("activeSeller", allSeller);
//     io.emit("activeCustomer", allCustomer);
//   });
//   soc.on("add_seller", (sellerId, userInfo) => {
//     addSeller(sellerId, soc.id, userInfo);
//     io.emit("activeSeller", allSeller);
//     io.emit("activeCustomer", allCustomer);
//     io.emit("activeAdmin", { status: true });
//   });

//   soc.on("add_admin", (adminInfo) => {
//     delete adminInfo.email;
//     admin = adminInfo;
//     admin.socketId = soc.id;
//     io.emit("activeSeller", allSeller);
//     io.emit("activeAdmin", { status: true });
//   });
//   soc.on("send_seller_message", (msg) => {
//     const customer = findCustomer(msg.receverId);
//     if (customer !== undefined) {
//       soc.to(customer.socketId).emit("seller_message", msg);
//     }
//   });

//   soc.on("send_customer_message", (msg) => {
//     const seller = findSeller(msg.receverId);
//     if (seller !== undefined) {
//       soc.to(seller.socketId).emit("customer_message", msg);
//     }
//   });

//   soc.on("send_message_admin_to_seller", (msg) => {
//     const seller = findSeller(msg.receverId);
//     if (seller !== undefined) {
//       soc.to(seller.socketId).emit("receved_admin_message", msg);
//     }
//   });

//   soc.on("send_message_seller_to_admin", (msg) => {
//     if (admin.socketId) {
//       soc.to(admin.socketId).emit("receved_seller_message", msg);
//     }
//   });

//   soc.on("disconnect", () => {
//     console.log("user disconnect");
//     remove(soc.id);
//     removeAdmin(soc.id);
//     io.emit("activeAdmin", { status: false });
//     io.emit("activeSeller", allSeller);
//     io.emit("activeCustomer", allCustomer);
//   });
// });

// app.use(bodyParser.json());
// app.use(cookieParser());

// app.use("/api", require("./routes/chatRoutes"));

// app.use("/api", require("./routes/paymentRoutes"));
// app.use("/api", require("./routes/dashboard/dashboardIndexRoutes"));

// app.use("/api/home", require("./routes/home/homeRoutes"));
// app.use("/api", require("./routes/order/orderRoutes"));
// app.use("/api", require("./routes/home/cardRoutes"));
// app.use("/api", require("./routes/authRoutes"));
// app.use("/api", require("./routes/home/customerAuthRoutes"));
// app.use("/api", require("./routes/dashboard/sellerRoutes"));
// app.use("/api", require("./routes/dashboard/categoryRoutes"));
// app.use("/api", require("./routes/dashboard/productRoutes"));
// // app.get("/", (req, res) => res.send("Hello World!"));
// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// app.use(express.static(path.join(__dirname, "../dashboard/build")));
// app.get("/admin", function (req, res) {
//   res.sendFile(path.join(__dirname, "../dashboard/build/index.html"));
// });

// const port = process.env.PORT;
// dbConnect();
// server.listen(port, () => console.log(`Server is running on port ${port}!`));

const express = require("express");
const { dbConnect } = require("./utiles/db");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const socket = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);

// Socket.IO configuration
const io = socket(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

// Socket.IO connection and event handling logic here...

app.use(cors()); // Add CORS middleware
app.use(bodyParser.json());
app.use(cookieParser());

// API routes
app.use("/api", require("./routes/chatRoutes"));
app.use("/api", require("./routes/paymentRoutes"));
app.use("/api", require("./routes/dashboard/dashboardIndexRoutes"));
app.use("/api/home", require("./routes/home/homeRoutes"));
app.use("/api", require("./routes/order/orderRoutes"));
app.use("/api", require("./routes/home/cardRoutes"));
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/home/customerAuthRoutes"));
app.use("/api", require("./routes/dashboard/sellerRoutes"));
app.use("/api", require("./routes/dashboard/categoryRoutes"));
app.use("/api", require("./routes/dashboard/productRoutes"));

// Serve static files from client build
app.use(express.static(path.join(__dirname, "../client/build")));

// Serve static files from dashboard build
app.use(express.static(path.join(__dirname, "../dashboard/build")));

// Fallback to serve client index.html for any non-API routes
app.get("*", (req, res) => {
  if (req.url.startsWith("/admin")) {
    res.sendFile(path.join(__dirname, "../dashboard/build/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  }
});

const port = process.env.PORT || 5000;
dbConnect()
  .then(() => {
    server.listen(port, () =>
      console.log(`Server is running on port ${port}!`)
    );
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  });
