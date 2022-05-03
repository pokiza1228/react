
const Item = (props) => {
const  { id, title, img, price, birthDate, sizes, isFavorite, features } = props;

const addZero = function(number) {
    return number < 10 ? "0" + number : number;
}
const showDate = function(dateString) {
    const date = new Date(dateString); 
    return   `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`
}
    return (
        <li className="col-6">
        <div className="card">
        <img src={img} alt={title} className="card-img-top" />
        <div className="card-body">
            <h3 className="card-title parrot-title">{title}</h3>
            <p className="card-text fw-bold parrot-price"><mark>${price}</mark></p>
            <p className="badge bg-success parrot-size">{sizes.width}sm x {sizes.height}sm</p>

            <p className="card-text parrot-birthday">
                {
                   showDate(birthDate)
                }
            </p>

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