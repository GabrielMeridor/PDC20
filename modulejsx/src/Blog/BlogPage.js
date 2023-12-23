import Ract, {useState} from 'react';
import BlogList from './BlogList';

const BlogPage =() => {
    const [posts, setPosts] = useState([
        {title:'', content:''}
    ]);

    const [newPost, setNewPost]=useState({title:'', content:''});

    const handleAddPost = () => {
        if(newPost.title && newPost.content){
            setPosts([...posts,newPost]);
            setNewPost({title:'',content:''});
        }
    };

    return(
        <div>
            <h1>My Blog</h1>
            <BlogList posts={posts}/>
          <div>
          <input type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e)=> setNewPost({...newPost, title: e.target.value})}
            />
            <textarea
            placeholder="Content"
            value={newPost.content}
            onChange={(e)=> setNewPost({...newPost, content: e.target.value})}
            />
            <button onClick={handleAddPost}>Add Post</button>
          </div>
        </div>
    );
}
export default BlogPage;