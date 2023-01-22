import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongo/models/post.js';

// Configuration
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Controllers
const createPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).json({
      status: 'success',
      data: { newPost },
    });
  } catch (err) {
    res.status(500).json({
      status: 'faild',
      data: { message: err.message },
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({
      status: 'success',
      result: posts.length,
      data: { posts },
    });
  } catch (err) {
    res.status(500).json({
      status: 'faild',
      data: { message: `ERROR: ${err.message}` },
    });
  }
};

export { getAllPosts, createPost };
