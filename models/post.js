import mongoose from "mongoose";

const ImageSchema = mongoose.Schema({
  public_id: String,
  url: String,
});

const PostSchema = mongoose.model(
  "Post",
  mongoose.Schema({
    title: String,
    image: ImageSchema,
  })
);

export default PostSchema;
