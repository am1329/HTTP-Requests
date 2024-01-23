import express from "express";
const app= express();
const port = 3000;

// code to find the local host page below
app.get("/",(req, res) => {
    //console.log(req.rawHeaders); // raw headers are list of key value pairs from where the req came from
    res.send("<h1>Hello World</h1>");//send response to server(local host 3000)
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);

});
//nodemon use to restart server whenever req