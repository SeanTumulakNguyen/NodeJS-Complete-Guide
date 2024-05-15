const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    // res.on is an event binder, essentially binding the callback to the first parameter
    // below is binding the body.push function to the data eventName
    // https://nodejs.org/api/events.html#emitteroneventname-listener
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // parsed body has two pieces second piece has message from POST
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

// Can only export a single function, object, etc
// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";

// Syntax sugar
// exports.handler = requestHandler
module.exports = requestHandler;
