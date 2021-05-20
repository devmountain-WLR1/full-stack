import {useState} from 'react';
import upArrow from '../media/up-arrow.svg';
import downArrow from '../media/down-arrow.svg';

const Post = ({post}) => {
    const [showImg, toggleImg] = useState(false)

    return (
    <div className="post" onClick={() => toggleImg(!showImg)}>
        <div className="vote">
            <img alt="up" src={upArrow}/>
            <span>{post.karma}</span>
            <img alt="down" src={downArrow}/>
        </div>
        <div className="post-info">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            { showImg ? <img className="post-img" alt={post.title} src={post.img_url}/> : null}
        </div>
    </div>
    )
}

export default Post;