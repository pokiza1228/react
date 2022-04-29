

const Header = () => {
    return (
        <div className="d-flex justify-content-between">
        <h1 className="h2">Zimbabwa parrots</h1>
  
        <button className="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#add-parrot-modal">
          <span className="me-2">Add parrot</span>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    );
}

export default Header;