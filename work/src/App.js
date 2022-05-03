import "./assets/css/bootstrap.min.css";

import Filter from "./Components/filter/filter";
import Header from "./Components/header/header";
import ParrotsBody from "./Components/parrots-body/parrots-body";

function App() {
  return (
    <div className="container my-5">
      <Header />
      <div className="row mt-5">
        <Filter />
        <ParrotsBody />
      </div>
    </div>
   
  );
}

export default App;
