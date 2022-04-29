import "./assets/css/bootstrap.min.css";

import Filter from "./Components/filter/filter";
import Header from "./Components/header/header";
import Item from "./Components/parrots/parrots-item";

function App() {
  return (
    <div className="container my-5">
      <Header />
      <div className="row mt-5">
        <Filter />
        <section className="col-6">
        <div className="d-flex justify-content-between align-items-baseline">
          <h2 className="h4 mb-4">Parrots list</h2>
          <p>Count: 2</p>
        </div>
        <ul className="row list-unstyled g-3 parrots-wrapper">
         <Item />
        </ul>
      </section>
      </div>
    </div>
   
  );
}

export default App;
