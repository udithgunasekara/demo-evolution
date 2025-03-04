import React from "react";
import { Post } from "../types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
      const { title, titleColor, description } = post;
  return (
    <div className="bg-white p-4 m-2 rounded-lg shadow-md border border-gray-300">
      <h2 className="text-xl font-bold" style={{ color: titleColor }}>
        {title}
      </h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default PostCard;
