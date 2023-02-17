import Post from "../models/post.js";
import cloudinary from "../helpers/cloudinary.js";

export const createPost = async (req, res) => {
  const { title } = req.body;
  try {
    console.log(req.file, req.files, req.body);
    const result = await cloudinary.uploader.upload(
      req.files.image.tempFilePath,
      {
        // resource_type: "auto",
        folder: "products",
      }
    );
    const post = new Post({
      title,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    await post.save();

    console.log(result);
    res.json({ result: result });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};
