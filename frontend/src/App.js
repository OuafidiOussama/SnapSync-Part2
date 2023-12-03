import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import routes from './routes';
import {ToastContainer} from 'react-toastify'
import React from 'react';
const Home = React.lazy(() => import("./pages/Home"))
const Auth = React.lazy(() => import("./pages/Auth"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
function App(){
  return (
    <>
      <ToastContainer />
      <React.Suspense>
          <BrowserRouter>
            <Switch>
              {/* {routes.map(({path, element}, i)=>(<Route exact path={path} component={element} key={i}/>))} */}
              <Route exact path="/" component={Home} />
              <Route  path="/auth" component={Auth} />
              <Route  path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
      </React.Suspense>
    </>
  )
}
export default App;
