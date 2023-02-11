const modelBlog = require("../models/Blog.model");


async function getBlogs(req, res){
	const blog = await modelBlog.find()
	
	const {id} = req.query;
	if(id) {
		blog.find((val) => {
			if(val._id == id){
				res.send(val)
			}
		})
	}else  res.send(blog)

}

async function getBlog (req, res) {
  try {
    const blog = await modelBlog.findOne({ _id: req.params.id })

	console.log(blog)
    res.send(blog);
  } catch (error) {
    res.status(404)
		res.send({ error: "Blog doesn't exist!" })
  }

}

 async function addBlog(req, res) {
  const blog = new modelBlog({
		title: req.body.title,
		content: req.body.content,
        body: req.body.body
	})
	await blog.save()
	res.send(blog)
}

 async function updateBlog (req, res) {
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
}

 async function deleteBlog (req, res) {
	try {
		await modelBlog.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Blog doesn't exist!" })
	}
}


module.exports = {
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog,
    addBlog
}
