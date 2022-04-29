const Filter = () => {
    return (
        <div className="col-3">
        <h2 className="h4 mb-4">Filter</h2>
        <form action="#" id="filter">
          <div className="mb-3">
            <label for="search" className="form-label">Search</label>
            <input type="search" className="form-control" id="search" placeholder="Falonchi" />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <div className="row">
              <div className="col-6">
                <input type="number" className="form-control" id="from" min="0" aria-label="From" placeholder="From" />
              </div>
              <div className="col-6">
                <input type="number" className="form-control" id="to" min="0" aria-label="To" placeholder="To" />
              </div>
            </div>
          </div>                                                                                                                                                          и

          <div className="mb-3">
            <label className="form-label">Width</label>
            <div className="row">
              <div className="col-6">
                <input type="number" className="form-control" id="from_width" min="0" aria-label="From width" placeholder="From width" />
              </div>
              <div className="col-6">
                <input type="number" className="form-control" id="to_width" min="0" aria-label="To width" placeholder="To width" />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Height</label>
            <div className="row">
              <div className="col-6">
                <input type="number" className="form-control" id="from_height" min="0" aria-label="From height" placeholder="From height" />
              </div>
              <div className="col-6">
                <input type="number" className="form-control" id="to_height" min="0" aria-label="To height" placeholder="To height" />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="sortby" className="form-label">Sort by</label>
            <select className="form-select" id="sortby">
              <option value="1">Name</option>
              <option value="2">Price: to lowest</option>
              <option value="3">Price: to highest</option>
              <option value="3">Birth: to highest</option>
              <option value="3">Birth: to lowest</option>
            </select>
          </div>

          <button className="btn btn-primary d-block w-100 py-2">Filter</button>
        </form>
      </div>
    );
}

export default Filter;