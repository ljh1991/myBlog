import Home 	from './views/Home'
import Article  from './views/Article'
import Find 	from './views/Find'
import My 		from './views/My'
import SignUp   from './views/SignUp'
import Login    from './views/Login'
import Publish  from './views/Publish'

const routes = [
	{path:'/',component:Home},
	{path:'/Home',component:Home},
	{path:'/Article',component:Article},
	{path:'/Find',component:Find},
	{path:'/My',component:My},
	{path:'/SignUp',component:SignUp},
	{path:'/Login',component:Login},
	{path:'/Publish',component:Publish}
]

export default routes