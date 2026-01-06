const PostList = (posts) => {
    return (
        <div>
            {posts.map((item) => 
            <Post post={item} key ={post.id}></Post>)}
        </div>
    );
}