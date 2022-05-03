import Item from "../parrots/parrots-item";
import { products } from "../../data";
const ParrotsBody = () => {
   return (<>
   <    section className="col-6">
            <div className="d-flex justify-content-between align-items-baseline">
            <h2 className="h4 mb-4">Parrots list</h2>
            <p>Count: 2</p>
            </div>
            <ul className="row list-unstyled g-3 parrots-wrapper">
            {
                products.map((parrots)=>
                <Item 
                price={parrots.price} 
                title={parrots.title} 
                id={parrots.id}
                img={parrots.img}
                birthDate={parrots.birthDate}
               
                isFavorite={parrots.isFavorite}
                features={parrots.features}
                />)
            }
            </ul>
      </section>
    </>)
}

export default ParrotsBody;