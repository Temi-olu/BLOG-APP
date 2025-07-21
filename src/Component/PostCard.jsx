

function PostCard({imgClass, img, createdat, title, status,excerpt, Author, Tags}) {
  return (
    <div className=' '>  
      <img src={img} 
       className={`${imgClass}`}
      ></img>
      <h1 className=''>{title} </h1>
      <h1>{Author}             </h1>
      <h1 className=''>        </h1>
      <h1>{excerpt}            </h1>
      <h1>{Tags}               </h1>
      <h1>{createdat}          </h1> 
       <h1 className=''>{status}</h1>
      </div>
  )
}

export default PostCard
