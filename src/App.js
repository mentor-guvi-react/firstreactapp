import logo from "./logo.svg";
import "./App.css";

function MyImage() {
  return <img src={logo} className="App-logo" alt="logo" />;
}

function NavItems({ portfolio1 }) {
  return (
    <ul>
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="we_do.html">What we do</a>
      </li>
      <li>
        <a href="portfolio.html"> {portfolio1} </a>
      </li>
      <li>
        <a href="contact.html">Contact us 123</a>
      </li>
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyImage />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NavItems portfolio1={"my portfolio for aa project"} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>Useful Link</h3>
        <NavItems portfolio1={"here protofolio"} />
        <button className="btn btn-primary"> Submit </button>

        <div class="card" >
          <img src={logo} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

// function MyButton({name,color}){

//   return <button  > {name}</button>

// }

// <MyButton name={"give ffedback"} color="red" />
