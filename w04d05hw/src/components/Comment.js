import React, { useState } from "react";

function Comment(props) {
  const [comments, setComments] = useState([]);
  const [NEW, setNEW] = useState("");

  function remove(num){
    let commentsClone = [...comments];
    switch (commentsClone.length) {
        case 1:
        case 0:
            setComments([]);
            break;
        default:
            commentsClone.splice(num,1);
            setComments(commentsClone);
            break;
    }
    
  }
  
  return (
    <div className="comments">
      {comments.map((e,i) => (
          <div key={i}>
            <button onClick={()=>remove(i)}>delete</button>
            <h6 className="comment">{e}</h6>
          </div>
        ))
      }
      <div>
        <input onChange={(e) => setNEW(e.target.value)} />
        <button onClick={() => setComments([...comments,NEW])}>Add</button>
      </div>
    </div>
  );
}

export default Comment;
