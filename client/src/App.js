
import './App.css';
import {Switch,Route} from "react-router-dom"
import Footer from "./components/view/footer/Footer"
import Loginpage from "./components/view/loginpage/Loginpage"
import Landingpage from "./components/view/landingpage/Landingpage"
import Registerpage from "./components/view/registerpage/Registerpage"
import Auth from "./hoc/Auth"

//false means that loged in user cannot go on this page
//true means that only logged in users can go on this page
//null means anyone can go inside
function App() {
  return (
      <>

            <Switch>
              <Route exact path="/" component={Auth(Loginpage,null)} />
              <Route exact path="/login" component={Auth(Loginpage,true)}/>
              <Route exact path="/register" component={Auth(Registerpage,false)}/>
            </Switch>
            <Footer/>

       
      </>
  );
}

export default App;
