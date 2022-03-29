import { useDispatch } from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
      <>
        <div className="col-3">
          <i className="far fa-comment wd-margin-icon"/>
          <span>{tuit.stats.comments}</span>
        </div>

        <div className="col-3">
          <i className="fa fa-retweet wd-margin-icon"/>
          <span>{tuit.stats.retuits}</span>
        </div>

        <div className="col-3">
          <span onClick={likeTuit}>
                {
                  tuit.liked &&
                  <i className="fa fa-heart wd-margin-icon wd-color-red"/>
                }
            {
              !tuit.liked &&
              <i className="fa fa-heart wd-margin-icon"/>
            }
            {tuit.stats && tuit.stats.likes}
                </span>
        </div>

        <div className="col-3">
          <i className="far fa-share-square wd-margin-icon"/>
        </div>
      </>
  );
}
export default TuitStats;