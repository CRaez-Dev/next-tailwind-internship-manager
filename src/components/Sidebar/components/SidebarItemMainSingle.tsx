
import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ProfileAccess } from '@/store/profile'
import Icon from '@/components/Icons'

const SidebarItemMainSingle: FC<ProfileAccess> = ({ name, route, icon }) => {
	const pathname = usePathname()
	return (
		<li>
			<Link
				href={route as string}
				className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes(route as string) && 'bg-graydark dark:bg-meta-4'
				}`}
			>
				<Icon icon={icon!} />
				{name}
			</Link>
		</li>
	)
}

export default SidebarItemMainSingle