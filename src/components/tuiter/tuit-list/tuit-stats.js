import { useDispatch } from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();

  return (
      <>
        <div className="row mt-2">
        <div className="col">
          <i className="far fa-comment wd-margin-icon"/>
          <span>{tuit.comments}</span>
        </div>

        <div className="col">
          <i className="fa fa-retweet wd-margin-icon"/>
          <span>{tuit.retuits}</span>
        </div>


        <div className="col">
          <span onClick={() => updateTuit(dispatch, {
            ...tuit,
            likes: tuit.likes + 1
          })}>
                {
                  <i className="far fa-thumbs-up ms-2"/>
                }
            {tuit && tuit.likes}
                </span>
        </div>


        <div className="col">
          <i className="far fa-share-square wd-margin-icon"/>
        </div>
        </div>
      </>
  );
}
export default TuitStats;