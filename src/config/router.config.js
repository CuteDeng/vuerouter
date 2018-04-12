// 1. 定义（路由）组件。
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Reg from '../components/Reg.vue'
// 2. 定义路由
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/home', component: Home,
  	children:[
  		{
  			path: '/login',
        	component: Login
  		},
  		{
  			path: '/reg',
        	component: Reg
  		}
  	] 
  }
]
export default routes