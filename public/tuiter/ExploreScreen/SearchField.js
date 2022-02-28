const SearchField = () => {
  return(`
    <div class="col-10 position-relative">
      <div class="form-group has-feedback">
        <i class="fas fa-search position-absolute pt-2 ps-3"></i>
        <input type="text" class="form-control form-control-sm rounded-pill ps-5" placeholder="Search Tuiter"/>
      </div>
    </div>

    <div class="col-2 position-relative wd-fg-blue">
      <a href="#"><i class="fas fa-cog fa-stack-2x"></i></a>
    </div>
  `);
}
export default SearchField;