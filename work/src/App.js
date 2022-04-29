import "./assets/css/bootstrap.min.css"
import Filter from "./Components/filter/filter";
import Header from "./Components/header/header";


function App() {
  return (
    <div className="container my-5">
      <Header />
      <div class="row mt-5">
        <Filter />
        
      </div>
    </div>
   
  );
}

export default App;
