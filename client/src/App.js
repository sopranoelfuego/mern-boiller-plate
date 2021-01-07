
import './App.css';
import {Switch,Route} from "react-route-dom"
import Footer from "./components/view/footer/Footer"
import Loginpage from "./components/view/loginpage"
import Landingpage from "./components/view/landingpage"


function App() {
  return (
      <Fragment>
        <Suspense fallback={<h1>page is charging</h1>}>
            <Switch>
              <Route exact path="/" component={} />
            </Switch>

       </Suspense>
      </Fragment>
  );
}

export default App;
