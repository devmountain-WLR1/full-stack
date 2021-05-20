import {useState, useEffect} from 'react';
import Post from './Post.js';
import axios from 'axios';

const Main = () => {
    const [posts, setPosts] = useState([
        {post_id: 1, title: 'Cool Goat', body: 'I found this super cool goat', img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmorningchores.com%2Fwp-content%2Fuploads%2F2019%2F12%2FGlossary-of-Goat-Terminology-FI.jpg&f=1&nofb=1', karma: 12},
        {post_id: 2, title: 'Kreepy Krab', body: 'This one of my favorite Spongebob jokes right here', img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlqqlMRzL-k0%2Fhqdefault.jpg&f=1&nofb=1', karma: 984}]);

    // useEffect(() => {
    //     axios.get('/api/posts').then(res => {
    //         setPosts([res.data]);
    //         console.log(res.data)
    //     }).catch( err => console.log(err))
    // }, [])
    
    const mappedPosts = posts.map( post => {
        return <Post key={post.post_id} post={post}/>
    })
    console.log(posts)
    return <div className="base">
        <div className="post-container">
            {mappedPosts}
        </div>
    </div>
}

export default Main;