const SearchField = () => {
  return(
      <>
    <div className="col-10 position-relative">
      <div className="form-group has-feedback">
        <i className="fas fa-search position-absolute pt-2 ps-3"/>
        <input type="text" className="form-control form-control-sm rounded-pill ps-5" placeholder="Search Tuiter"/>
      </div>
    </div>

    <div className="col-2 position-relative wd-fg-blue">
      <a href="#"><i className="fas fa-cog fa-stack-2x"/></a>
    </div>
      </>
  );
}
export default SearchField;