import React, { useState } from 'react';
import { POST_COLORS } from '../constants/postColor';
import { createPost } from '../service/api';

const AddPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [titleColor, setTitleColor] = useState('#FF6347');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const postData = {
      _id: '', 
      title,
      description,
      titleColor,
    };

    try {
      setIsSubmitting(true);
      await createPost(postData);

      setTitle('');
      setDescription('');
      setTitleColor('#FF6347');
      alert('Post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }

  };

  return (
    <div className="bg-gray-300 min-h-screen text-gray-200 flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center" style={{ color: titleColor }}>
          Create a New Post
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
              required
            />
          </div>
          <div className="mb-4">
            <span className="mr-2 text-white">Title Color:</span>
            {POST_COLORS.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setTitleColor(color)}
                className={`w-6 h-6 rounded-full mr-2 ${titleColor === color ? 'ring-2 ring-offset-2 ring-gray-500' : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
