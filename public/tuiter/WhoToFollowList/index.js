import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollow = () => {
  return (`
    <ul class="list-group"> 
    <!-- continue here --> 
      ${who.map(who => {
        return(WhoToFollowListItem(who));
      }).join('')
  }
    </ul>
`);
};
export default WhoToFollow;