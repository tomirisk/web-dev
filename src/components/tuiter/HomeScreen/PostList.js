import PostItem from "./PostItem"
import posts from "./posts"

const PostList = () => {
  return (
      <>
        {
          posts.map(post => {
            return(
                <PostItem post={post}/>
            );
          })
        }
      </>
  );
};
export default PostList;