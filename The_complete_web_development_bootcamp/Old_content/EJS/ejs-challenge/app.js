//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeContent = "A lake or an easy weekend is what God wants to decorate it with. Always the author, nor the time of life. Let it be a course of action. Viverra lived in this place. Do not use a microwave oven or a dishwasher. Until the basketball players are not members or members of the arc. Mattis the employee was targeted by the students. The mountains will give birth to a great push, and a ridiculous mouse will be born in the ultricia of life. I'm trying to find a way to get rid of the poison bed. The author of the life of Ultrices advocates football as a bed of alcohol to drink. Odio euismod lacinia at quis risus sed vulputate odio ut The course of the real estate agent was aimed at the students.";

const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";

const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts = [];

app.get("/", function(req, res) {
  res.render("home", {
    homeStartingContent: homeContent,
    posts: posts
  });
});

app.get("/about", function(req, res) {
  res.render("about", {aboutStartingContent: aboutContent});
});

app.get("/contact", function(req, res) {
  res.render("contact", {contactStartingContent: contactContent});
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);
  res.redirect("/");

});

app.get("/posts/:postName", function(req,res) {
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post) {
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }

  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
