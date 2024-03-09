import "./index.css";
import image from "./images/one.jpg";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <div className="container">
        <header>
          <h4
            style={{
              opacity: status ? 1 : 0,
              transitionDelay: status ? "0s" : "0.5s",
              transform: `translateY(${status ? "0px" : "-100px"})`,
            }}
          >
            A
          </h4>
          <h4
            style={{
              opacity: status ? 1 : 0,
              transitionDelay: status ? "0.5s" : "1s",
              transform: `translateY(${status ? "0px" : "-100px"})`,
            }}
          >
            B
          </h4>
          <h4
            style={{
              opacity: status ? 1 : 0,
              transitionDelay: status ? "1s" : "1.5s",
              transform: `translateY(${status ? "0px" : "-100px"})`,
            }}
          >
            C
          </h4>
          <h4
            style={{
              opacity: status ? 1 : 0,
              transitionDelay: status ? "1.5s" : "2s",
              transform: `translateY(${status ? "0px" : "-100px"})`,
            }}
          >
            D
          </h4>
          <h4
            style={{
              opacity: status ? 1 : 0,
              transitionDelay: status ? "2s" : "2.5s",
              transform: `translateY(${status ? "0px" : "-100px"})`,
            }}
          >
            E
          </h4>
        </header>

        <img
          src={image}
          alt=""
          style={{
            opacity: status ? 1 : 0,
            transitionDelay: status ? "2.5s" : null,
            transform: `translateX(${status ? "0px" : "-100px"})`,
          }}
        />
      </div>
    </div>
  );
}

export default App;
