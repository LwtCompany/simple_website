const express = require("express");
const router = express.Router();
const modelBlog = require("../models/Blog.model")


router.get("/blogs", async (req, res) => {
	const blog = await modelBlog.find()
	res.send(blog)
});

router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await modelBlog.findOne({ _id: req.params.id })
    res.send(blog);
  } catch (error) {
    res.status(404)
		res.send({ error: "Blog doesn't exist!" })
  }

});


router.post("/blogs", async(req, res) => {
  const blog = new modelBlog({
		title: req.body.title,
		content: req.body.content,
    body: req.body.body
	})
	await blog.save()
	res.send(blog)
});

router.patch("/blogs/:id", async (req, res) => {
	try {
		const blog = await modelBlog.findOne({ _id: req.params.id })

		if (req.body.title) {
			blog.title = req.body.title
		}

		if (req.body.content) {
			blog.content = req.body.content
		}

    if (req.body.body) {
			blog.body = req.body.body
		}
		await blog.save()
		res.send(blog)
	} catch {
		res.status(404)
		res.send({ error: "Blog doesn't exist!" })
	}
})

router.delete("/blogs/:id", async (req, res) => {
	try {
		await modelBlog.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Blog doesn't exist!" })
	}
})

router.get("*", (req, res) => {
  res.render('pages/error', {MENUS});
})
  //DOg


router.get("/dogs", async (req, res) => {
  const allDogs = await Dog.find();
  return res.status(200).json(allDogs);
});
module.exports = router;