import React from "react";
import ReactDOM from "react-dom";
import ReactLazyImage from "./module";

const App = () => (
  <div>
    <div style={{height: 300}}>Componente 1</div>
    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100/F00?text=1" />
    </div>
    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100/FF0?text=2" />
    </div>
    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100/E5A?text=3" />
    </div>
    <div style={{height: 300}}>Componente 2</div>

    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100/GREEN?text=4" />
    </div>
    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100/PURPLE?text=5" />
    </div>
    <div style={{height: 300}}>Componente 3</div>

    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100/a4d?text=6" />
    </div>
    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100/d4a?text=7" />
    </div>
    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100/abc?text=8" />
    </div>
    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100?text=9" />
    </div>
    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100?text=10" />
    </div>
    <div>
      <ReactLazyImage ratio="3:1" src="https://via.placeholder.com/300x100?text=11" />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
