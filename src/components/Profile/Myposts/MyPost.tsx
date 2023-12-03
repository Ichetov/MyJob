import obj from './MyPosts.module.css'
import Post from './Post/Post';
import s from './MyPost.module.css'
import React from 'react';




function MyPost(props: any) {
  
  let r = React.createRef<HTMLTextAreaElement>();
  return (
    <div className={s.description}>
      <div>
        My Posts
      </div>
      <div className={s.btn}>
        <textarea onChange={(e) => {
          props.addTextActionCreator(e.target.value)
        }} ref={r} value={props.state.text} />
        <div >
          <button onClick={() => {
            props.addPostActionCreatot()
          }}>Add text</button>
        </div>
      </div>
      <div>
        {props.state.post.map((i: any) => {
          return <Post key = {i.id} id={i.id} post={i.text} />
        })}
      </div>
    </div>
  )
}

export default MyPost;