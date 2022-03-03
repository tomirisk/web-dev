const NavigationSidebar = (status) => {
return(`
    <div class="list-group">
      <a id="tuit" class="list-group-item bg-black" href="/">
        <i class="fab fa-twitter"></i>
       </a> <!-- continue the rest of the list --> 
       
       <a id="home" class="list-group-item bg-black ${status==='home' ? 'active' : ''}" href="../HomeScreen/home.html">
        <i class="fa fa-home"></i>
          <span class="navigation-label wd-left-tab">
            Home
          </span>
       </a>
       
       <a id="explore" class="list-group-item bg-black ${status==='explore' ? 'active' : ''}" href="../ExploreScreen/explore.html">
        <i class="fa fa-hashtag"></i>
          <span class="navigation-label wd-left-tab">
            Explore
          </span>
       </a>
       <a id="notifications" class="list-group-item bg-black" href="../notifications.html">
        <i class="fas fa-bell"></i>
          <span class="navigation-label wd-left-tab">
            Notifications
          </span>
       </a>
       <a id="messages" class="list-group-item bg-black" href="../messages.html">
        <i class="fas fa-envelope"></i>
          <span class="navigation-label wd-left-tab">
            Messages
          </span>
       </a>
       <a id="bookmarks" class="list-group-item bg-black" href="../bookmarks.html">
        <i class="fas fa-bookmark"></i>
          <span class="navigation-label wd-left-tab">
            Bookmarks
          </span>
       </a>
       <a id="lists" class="list-group-item bg-black" href="../lists.html">
        <i class="fa fa-list"></i>
          <span class="navigation-label wd-left-tab">
            Lists
          </span>
       </a>
       <a id="profile" class="list-group-item bg-black" href="../profile.html">
        <i class="fa fa-user"></i>
          <span class="navigation-label wd-left-tab">
            Profile
          </span>
       </a>
       <a id="more" class="list-group-item bg-black" href="../more.html">
        <i class="fas fa-circle"></i>
          <span class="navigation-label wd-left-tab">
            More
          </span>
       </a>
      
  <!-- Tweet button -->   
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet
      </a> 
    </div>
  `);
}
export default NavigationSidebar;