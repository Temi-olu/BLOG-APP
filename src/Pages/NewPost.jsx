import { useState } from "react";
import { toast } from "react-toastify";
function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState();
  const [posts, setPosts] = useState([]);

  function handleSubmit() {
    const post = {
      title: title,
      content: content,
      tags: tags,
      category: category,
    };
    if (title === "" || content === "" || tags === "" ) {
     toast.error("fill all fields");

    } else {
      console.log(post);
      //  FOR STORING THE POSTS AFTER SUBMITTION
      setPosts([...posts, post]);
      console.log(post);
      setTitle("");
      setContent("");
      setTags("");
       toast.success("Account created successfully");

    }
  }

  return (
    <div>
      <div className="ml-55 mt-2">
        <h1 className="font-bold text-3xl mb-6">Create New Post</h1>

        <form>
          <div className="flex flex-col">
            <label className="mb-2 font-bold">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              type="text"
              placeholder="Enter your post title"
            ></input>
            <label className="mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className=" mb-2 w-[400px] rounded-lg p-3 border h-[130px]"
              placeholder="Write a post content here"
            />
            <label className="mb-2">Tags</label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              placeholder="Enter tags seperated by commas"
            />
            <label className="mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-[400px]  rounded-lg p-3 border"
            >
              <option value={category}>faith</option>
              <option>dev</option>
            </select>
          </div>
        </form>
        <button
          className=" bg-gray-900 w-30 text-white p-2 rounded-full mt-3 relative  left-[890px]"
        >
          Save as Draft
        </button>

        <button
          onClick={handleSubmit}
          className=" bg-blue-900 w-24 text-white p-2 rounded-full mt-3 relative  left-[900px]"
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default NewPost;
