import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>In the kitchen with Rubi</h1>
    </header>
  );
};

const Main = (props) => {
  return (
    <section>
      <p>Come to make interesting and delicious dishes with me!</p>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
    </section>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
};

const dishes = ["Japchae", "Kimchi Jeon", "Haemul Soondubu Jjigae", "Mandoo"];

function App() {
  return (
    <div className="App">
      <Header />
      <Main dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
