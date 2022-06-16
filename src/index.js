/*
 * @Description: 
 * @FilePath: \webpackPractice\src\index.js
 * @Date: 2022-06-11 16:25:22
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-06-16 21:02:42
 * @author: Lin_kangjing
 */
import _ from 'lodash'
import './index.css'
// import('./test')
import(/* webpackChunkName:"test2"*/'./test2.js').then(({add})=>{
  console.log(add(1,2))
})

document.write('index.js')
// import './style.scss'
// write()