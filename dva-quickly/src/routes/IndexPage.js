import React from 'react';
import { connect } from 'dva';
import {routerRedux} from 'dva/router';
import styles from './IndexPage.css';

const mapUpdate = (state)=>{
    console.log(state)
    return{
      example: state.example 
    }
}


function IndexPage({dispatch,example}) {
  const testDispatch = ()=>{
    console.log('触发了dispatch')
    dispatch({
      type:'example/fetch',
      payload:{id:'aa'}
    })
  }
  const routeFn = () => {
    dispatch(routerRedux.push({
      pathname:'/product'
    }))
  }
  return (
    <div className={styles.normal}>
      <div onClick={routeFn}>跳转到Product</div>
      <div onClick={testDispatch}>dispatch</div>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(mapUpdate)(IndexPage);
