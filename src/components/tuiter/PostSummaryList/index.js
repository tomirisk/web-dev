import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts"

const PostSummaryList = () => {
  return (
      <>
        {
          posts.map(post => {
            return(
                <PostSummaryItem post={post}/>
            );
        })
        }
      </>
  );
};
export default PostSummaryList;