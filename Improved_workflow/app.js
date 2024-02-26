const http = require("http");
const express = require("express");
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(adminRoutes);
app.use(shopRoutes);

//page not found or 404 error
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
})

// app.use("/", (req, res, next) => {
//   console.log("This always runs!");
//   next();
// });


//The code below is shifted to the admin.js file
/********************************************************* */

// app.use("/add-product", (req, res, next) => {
//   console.log("In another middleware!");
//   res.send(
//     '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>'
//   );
// });

// app.post("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });
/************************************************************/

// app.use("/", (req, res, next) => {
//   console.log("In another middleware!");
//   res.send("<h1> Hello from Express!</h1>");
// });

// app.use((req, res, next) => {
//   console.log("In the another middleware!");
//   res.write('<h1>Hello from Express!</h1>')
// })

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
