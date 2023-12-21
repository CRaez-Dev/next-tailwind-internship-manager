import React, { FC, Fragment } from 'react'
import DashboardIcon from './DashboardIcon'
import ProfileIcon from './ProfileIcon'
import ReportIcon from './ReportIcon'
import FormsIcon from './FormsIcon'
import SettingIcon from './SettingIcon'
import { Icons } from '@/types/types'

interface IconProps {
	icon: Icons
}

const Icon: FC<IconProps> = ({ icon }) => {	
	return (
		<Fragment>
			{
				icon === Icons.dashboard ?
					<DashboardIcon />
					: icon === Icons.report ?
						<ReportIcon />
						: icon === Icons.profile ?
							<ProfileIcon />
							: icon === Icons.forms ?
								<FormsIcon />
								: icon === Icons.setting ?
									<SettingIcon /> :
									<></>

			}
		</Fragment>
	)
}

export default Icon