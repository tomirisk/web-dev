import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who"
const WhoToFollow = () => {
  return (
    <ul className="list-group">

      {
        who.map(who => {
        return(
            <WhoToFollowListItem who={who}/>
        );
        })
      }
    </ul>
);
};
export default WhoToFollow;