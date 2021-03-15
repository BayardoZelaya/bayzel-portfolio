import Header from "./ui/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/About" component={() => <div>About Me</div>} />
          <Route exact path="/Projects" component={() => <div>Projects</div>} />
          <Route
            exact
            path="/Technologies"
            component={() => <div>Technologies</div>}
          />
          <Route exact path="/Contact" component={() => <div>Contact</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
