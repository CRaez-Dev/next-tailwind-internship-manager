import { FC, Fragment } from 'react'
import { ProfileAccess } from '@/store/profile'
import SidebarItemMainSingle from './SidebarItemMainSingle'
import SidebarItemMainParent from './SidebarItemMainParent'
import SidebarItemSingle from './SidebarItemSingle'

interface SidebarItemProps {
	data: ProfileAccess
}
const SidebarItem: FC<SidebarItemProps> = ({ data }) => {
	return (
		<Fragment>
			{
				data.isMain === true && !data.children ?
					<SidebarItemMainSingle {...data} />
					:
					data.isMain === true && data.children ?
						<SidebarItemMainParent data={data}  >
							{
								data.children?.map((item, index) => {
									return <SidebarItem key={index} data={item} />
								})
							}

						</SidebarItemMainParent>
						:
						<SidebarItemSingle name={data.name} route={data.route as string} />
			}
		</Fragment>
	)
}

export default SidebarItem

