import React from "react";

import PostSummaryList from "../PostSummaryList";
import SearchField from "./SearchField";
import Tabs from "./Tabs";
import ImageWithText from "./ImageWithText";

const ExploreComponent = () => {
  return(
      <>
        <div className="row pb-2">

          <SearchField/>
        </div>
        <ul className="nav mb-2 nav-tabs">

          <Tabs/>
        </ul>

        <ImageWithText/>
        <PostSummaryList/>
      </>
);
}
export default ExploreComponent;