import { ProfileAccess } from '@/store/profile'
import React, { FC, Fragment } from 'react'
import SidebarItem from './SidebarItem'

interface SidebarListItemsProps {
	data: ProfileAccess[]
}

const SidebarListItems: FC<SidebarListItemsProps> = ({ data }) => {
	return (
		<Fragment>
			{
				data.map((item,index)=> <SidebarItem key={index} data={item} />)
			}
		</Fragment>
	)
}

export default SidebarListItems