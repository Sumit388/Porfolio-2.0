import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomSnackbar from "./CustomSnackbar";

const UploadBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      title,
      content,
      author,
      category,
    };
    axios
      .post("http://localhost:5000/api/v1/blog", body)
      .then((response) => {
        setOpenAlert(true);
      })
      .catch((error) => {
        console.error(error?.message);
      });
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const blogCategories = [
    {
      name: "Technology",
      value: "technology",
    },
    {
      name: "Space",
      value: "space",
    },
    {
      name: "Music",
      value: "music",
    },
    {
      name: "Nature",
      value: "nature",
    },
    {
      name: "Fantasy",
      value: "fantasy",
    },
  ];

  return (
    <div className="flex gap-3 flex-wrap p-4 absolute top-10">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title:
          </label>
          <textarea
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block mb-2 font-semibold">
            Author:
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Category:</label>
          <div className="flex space-x-4">
            {blogCategories.map((option) => (
              <label htmlFor={option.value} className="flex items-center">
                <input
                  type="radio"
                  id={option.value}
                  name={option.value}
                  value={option.value}
                  checked={category === option.value}
                  onChange={handleCategoryChange}
                  className="mr-2"
                />
                <span>{option.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4 w-[90vw] h-96">
          <label htmlFor="content" className="block mb-2 font-semibold ">
            Content:
          </label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            className="w-[90vw] h-72"
            modules={modules}
            formats={formats}
          />
        </div>

        <div className="mt-8 flex gap-3">
          <button
            type="reset"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
      <CustomSnackbar
        open={openAlert}
        setOpen={setOpenAlert}
        severity={"success"}
        message={"Data updated successfully"}
      />
    </div>
  );
};

export default UploadBlog;
