const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type = "text" name = "message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title> This node js tutorial </title></head>");
  res.write("<body>");
  res.write("<h1> This is node JS server!</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
};


//one way of exporting
// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text"
// }

//another way of exporting
// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";


//shortcut of importing
exports.handler = requestHandler;
exports.someText = "Some hard coded text";

//How the Web Works
//Client => request => server => response => client