## router in react

[tutorial](https://www.freecodecamp.org/news/react-router-in-5-minutes/)

- we don't have built-in router in react, so we have to use some 3rd part router lib.

- we will user 'react-router-dom'.
- steps to use.

  1. npm i react-router-dom

  2. src-> index.js

  ```js
  import { BrowserRouter } from "react-router-dom";
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
  ```

2. src -> App.js

```js
import { Route, Switch } from "react-router-dom";
import Home from "./components/router_in_react/Home";
import About from "./components/router_in_react/About";
import Contact from "./components/router_in_react/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
export default App;
```
