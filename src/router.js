import Header from "./components/header/header";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import Query from './pages/query/query';
import chart from './pages/chart/chart';
import Sidebar from './components/sidebar/sidebar';
import { useContext } from "react";
import { DataContext } from "./context/context";
export default function Router()
{
    const {loading,error}=useContext(DataContext)
    return(
        <BrowserRouter>
      <Header/>
      {
          loading?<p>loading...</p>:error?<p>oops sorry,something went wrong</p>:(
      <div className=" d-flex md">
      <Sidebar/>
      <Switch>
        <Route path="/search" component={Query}/>
        <Route path="/chart" component={chart}/>
        <Route path="/" >
          <Redirect to="/search"/>
        </Route>
      </Switch>
      </div>
           )}
      </BrowserRouter>
    )
}