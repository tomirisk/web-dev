import PostSummaryList from "../PostSummaryList/index.js";
import SearchField from "./SearchField.js";
import Tabs from "./Tabs.js";

const ExploreComponent = () => { return(`
  <div class="row pb-2">
<!-- search field and cog -->
    ${SearchField()} 
  </div>
  <ul class="nav mb-2 nav-tabs">
<!-- tabs --> 
    ${Tabs()} 
  </ul>
<!-- image with overlaid text -->
  ${PostSummaryList()} 
`);
}
export default ExploreComponent;