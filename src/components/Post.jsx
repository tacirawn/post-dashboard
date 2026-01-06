const Post = ({post}) => {
    if(!post){
            return null;
    };
    return(
    <div className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
    );
};

export default Post;