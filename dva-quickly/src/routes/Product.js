import React from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {Button} from 'antd';
import ProductList from '../components/ProductList';

function mapStateToProps(state){
	console.log(state);
	return {
		products : state.products
	}
}

const product = ({ dispatch,products })=>{
	function handleDelete(id) {
	    dispatch({
	      type: 'products/delete',
	      payload: id,
	    });
	  }
	const add = ()=>{
		dispatch({
	      type: 'products/add',
	      name: 'dva', id: 1
	    });
	}
	const routeTo = () => {
		dispatch(routerRedux.push({
			pathname:'/'
		}))
	}
	return(
		<div>
			<div onClick={routeTo}>跳转回根</div>
			<Button onClick={add}>添加</Button><ProductList onDelete={handleDelete} products={products}/>
		</div>
	)
}

export default connect(mapStateToProps)(product)
