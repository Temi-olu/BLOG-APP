import React from "react";

function NewPost() {
  return (
    <div>
      <div className="ml-55 mt-2">
        <h1 className="font-bold text-3xl mb-6">Create New Post</h1>

        <form>
          <div className="flex flex-col">
            <label className="mb-2 font-bold">Title</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              type="text"
              placeholder="Enter your post title"
            ></input>
            <label className="mb-2">Content</label>
            <textarea
              className=" mb-2 w-[400px] rounded-lg p-3 border h-[130px]"
              placeholder="Write a post content here"
            />
            <label className="mb-2">Tags</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              placeholder="Enter tags seperated by commas"
            />
            <label className="mb-2">Category</label>
            <select className="w-[400px] rounded-lg p-3 border">
              <option></option>
              <option></option>
            </select>
          </div>
        </form>

        <button className=" bg-blue-900 w-24 text-white p-2 rounded-full mt-3 relative  left-[900px]">
          Publish
        </button>
      </div>
    </div>
  );
}

export default NewPost;
