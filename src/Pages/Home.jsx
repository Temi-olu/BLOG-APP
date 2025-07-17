import React from 'react'
import Body from '../Component/Body'
import article from '../Data/article'
import PostCard from '../Component/PostCard'
function Home() {
  return (
    <div>
      <Body/>
   <div className="   bg-amber-300  ">
{article.map((items, index) => (

<PostCard 
            
key={index}
title={items.title}
excerpt={items.excerpt}
Author={items.author}
Tags={items.tags}
createdat={items.createdAt}

 />
))}
    </div>
    </div>
  )
}

export default Home
