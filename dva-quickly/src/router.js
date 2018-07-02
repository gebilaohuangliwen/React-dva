import React from 'react'
import {Route, Switch ,Redirect,routerRedux,Router} from 'dva/router'
import dynamic from 'dva/dynamic'
const {ConnectedRouter} = routerRedux

function RouterConfig({ history,app }) {
  const error = dynamic({
  	app,
  	component:()=>import('./routes/error'), 
  })
  const routes = [
  	{
  		path:'/',
  		models:()=>[import('./models/example')],
  		component:()=>import('./routes/IndexPage')
  	},
  	{
  		path:'/product',
  		models:()=>[import('./models/products')],
  		component:()=>import('./routes/Product')
  	}
  ]
  return (
    <Router history={history}>
      <Switch>
      	{
      		routes.map(({path,...dynamics},key)=>{
      			return <Route key={key} 
      				exact
      				path={path}
      				component={dynamic({
      					app,
      					...dynamics
      				})}
      			/>
      		})
      	}
      	<Route component={error} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
