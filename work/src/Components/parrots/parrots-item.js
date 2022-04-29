const Item = () => {
    return (
        <li className="col-6">
        <div className="card">
        <img src="https://media.istockphoto.com/photos/parrot-hyacinth-macaw-picture-id1359443019?b=1&k=20&m=1359443019&s=170667a&w=0&h=dteRZ9bM7sEvBbFE9it1r9O7IxlILXb1UnSoLNEVMAg=" alt="" className="card-img-top" />
        <div className="card-body">
            <h3 className="card-title parrot-title">Hyacinth macaw</h3>
            <p className="card-text fw-bold parrot-price"><mark>$5000</mark></p>
            <p className="badge bg-success parrot-size">184sm x 50sm</p>

            <p className="card-text parrot-birthday">12.05.2022</p>

            <ul className="d-flex flex-wrap list-unstyled features-list">
            {/* <!-- <li className="badge bg-primary me-1 mb-1">Beautiful</li>
            <li className="badge bg-primary me-1 mb-1">Tame</li>
            <li className="badge bg-primary me-1 mb-1">Can speak</li> --> */}
            </ul>

            <div className="position-absolute top-0 end-0 d-flex">
            {/* <!-- Agar isFavorite false bo'ladigan bo'lsa i'ning classNamei "fa-solid fa-star" bo'lishi kerak. Agar unday bo'lmasa "fa fa-star-o" --> */}
            <button className="btn rounded-0 btn-success star-btn"><i className="fa fa-star-o parrot-star" style={{color: "yellow"}}></i></button>
            <button className="btn rounded-0 btn-secondary edit-btn"
            data-bs-toggle="modal" data-bs-target="#edit-parrot-modal"
        ><i className="fa-solid fa-pen"  style={{pointerEvents: "none"}}></i></button>
            <button className="btn rounded-0 btn-danger delet-btn"><i className="fa-solid fa-trash" style={{pointerEvents: "none"}}></i></button>
            </div>
        </div>
        </div>
    </li>
    );
}

export default Item;