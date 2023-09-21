import { Outlet } from 'react-router-dom';
import SideBar from '~/components/SideBar';
import RightBar from '~/components/RightBar';
import styles from './MasterLayout.module.scss';
function MasterLayout() {
	return(
		<div className={styles.container}>
			<SideBar/>
			<main>
				<Outlet />
				<RightBar />
			</main>
		</div>
	)
	
}

export default MasterLayout;