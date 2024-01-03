import "./App.css";
import plant from "./assets/images/homepage/plant.svg";
import cart from "./assets/images/homepage/cart.png";

function App() {
  return (
    <div>
      <header>
        <nav>
          <img src={plant}></img>
          <div className="nav_buttons">
            <button>Main Page</button>
            <button>Categories</button>
            <button>All Products</button>
            <button>All sales</button>
          </div>
          <img src={cart}></img>
        </nav>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button>Check out</button>
      </header>
      <main>
        <section className="categories">
          <h1>Categories</h1>
          <button>All categories</button>
          <ul>
            <li>Fertilizer</li>
            <li>Protective products and septic tanks</li>
            <li>Planting material </li>
            <li>Tools and equipment</li>
          </ul>
        </section>
        <section className="discount_form">
          <h1>5% off on the first order</h1>
          <input className="name"></input>
          <input className="phone_number"></input>
          <input className="email"></input>
          <button>Get a discount</button>
        </section>
        <section className="sale">
          <h1>Sale</h1>
          <button>All sales</button>
          <ul>
            <li>
              <span className="discount">-50%</span>
              <p className="description">Decorative forged bridge</p>
              <span className="old_price">$1000</span>
              <span className="new_price">$500</span>
              <button>Add to cart</button>
            </li>
            <li>
              <span className="discount">-34%</span>
              <p className="description">Flower basket</p>
              <span className="old_price">$150</span>
              <span className="new_price">$100</span>
              <button>Add to cart</button>
            </li>
            <li>
              <span className="discount">-25%</span>
              <p className="description">Aquarium lock</p>
              <span className="old_price">$200</span>
              <span className="new_price">$150</span>
              <button>Add to cart</button>
            </li>
            <li>
              <span className="discount">-17%</span>
              <p className="description">Secateurs</p>
              <span className="old_price">$240</span>
              <span className="new_price">$199</span>
              <button>Add to cart</button>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <section className="contacts">
          <ul className="cards">
            <li className="phone">
              <p>Phone</p>
              <h3>+49 999 999 99 99</h3>
            </li>
            <li className="socials">
              <p>Socials</p>
              <div className="icons"></div>
            </li>
          </ul>
          <ul className="cards">
            <li className="address">
              <p>Address</p>
              <h3>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h3>
            </li>
            <li className="working_hours">
              <p>Working Hours</p>
              <h3>24 hours a day</h3>
            </li>
          </ul>
          <div className="map"></div>
        </section>
      </footer>
    </div>
  );
}

export default App;
