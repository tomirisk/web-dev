const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item wd-follow">
    <div class="d-flex flex-row">
    <div>
      <img src="${who.avatarIcon}" class="img-responsive rounded-circle" 
        width="48px" height="48px"/>
    </div>
    <div class="ps-2">
      <b>${who.userName}<i class="fa fa-check-circle"></i></b> 
      <br> ${who.handle}
    </div>
    </div>
      <button type="submit" class="btn btn-primary pt-1 pb-1 rounded-pill">
        Follow
      </button> 
    </li>      
  `);
}
export default WhoToFollowListItem;