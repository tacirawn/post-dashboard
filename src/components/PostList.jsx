import Post from "./post";
const PostList = ({posts}) => {
    return (
        <div>
            {posts.map((item) => (
            <Post post={item} key ={item.id}></Post>))}
        </div>
    );
};

export default PostList;