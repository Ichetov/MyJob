import obj from './Post.module.css'

function Post({post, id}: any){
    return ( 
      <div className={obj.item}>
        <img src="https://cs14.pikabu.ru/avatars/1607/x1607367-1563146339.png" alt="" />
          {post}
          <div className="">
            <span>Like</span>
          </div>
      </div>
  
    )
   }
   
   export default Post;