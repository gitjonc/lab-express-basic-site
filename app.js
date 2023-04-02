const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
    const filePath = path.join(__dirname, "views", "index.html");
    console.log(`sending file: ${filePath}`);
    response.sendFile(filePath);
});

app.get("/about", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/works", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "works.html"));
});

app.get("/gallery", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "gallery.html"));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})


function showImgContent(e) {

    const imgContent = document.querySelectorAll('.img-content-hover');

  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

// document.addEventListener('mousemove', showImgContent);
function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
  // this.document.addEventListener('mousemove', showImgContent);
};

