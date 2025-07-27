 const comment = [
  { id: 1, 
    content: "Great article!",
    author: "Ayo",
    parentId: null,
    createdAt: "2 hrs ago"
  },
  { id: 2,
     content: "Thanks!", 
     author:  "Temi", 
     parentId: 1  ,
    createdAt: "5 hr ago"
  },
  { id: 3,
     content: "What's your source?",
      author: "Jane", 
      parentId: null ,
      createdAt: "1 min ago" },
  { id: 4, 
    content: "Check the last paragraph",
     author: "Ayo", 
     parentId: 3, 
     createdAt:" 3 sec ago "  }
 ]
export default comment;