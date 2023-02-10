const express = require("express");
const route = express.Router();
const {
    getBlog,
    getBlogs,
    addBlog,
    deleteBlog,
    updateBlog
}  = require("../controllers/Blog.controller")

route.get("/", getBlogs);

route.get("/:id", getBlog);


route.post("/", addBlog);

route.patch("/:id", updateBlog)

route.delete("/:id", deleteBlog)


module.exports = route;