import {createBrowserRouter} from 'react-router-dom';
import Home from '~/pages/Home';
import Explore from '~/pages/Explore';
import Notifications from '~/pages/Notifications';
import MasterLayout from '~/layouts/MasterLayout';
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
	{ 
		path: '/',
	 	element: <MasterLayout />,
		children: [
			{
				index: true,
				path: '/',
				element:  <Navigate to="/home" replace={true} />,
			},
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/explore',
				element: <Explore />,
			},
			{
				path: '/notifications',
				element: <Notifications />,
			},
			{
				path:'*',
				element: <div>Not Found</div>
			}
		]		

	},
	
])

export default router;