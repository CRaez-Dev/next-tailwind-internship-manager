'use client'
import { FC, useEffect, useRef } from 'react'

import { useSnapshot } from 'valtio'
import { SidebarStore } from '@/store/common/sidebar'
import { ProfileAccess, ProfileStore } from '@/store/profile'
import SidebarHeader from './components/SidebarHeader'
import SidebarBody from './components/SidebarBody'
import { RequestStatus } from '@/types/types'
import SidebarListItems from './components/SidebarListItems'

const Sidebar: FC = () => {
	const { openSidebar } = useSnapshot(SidebarStore)
	const { profileAccess, profileAccessStatus } = useSnapshot(ProfileStore)
	const sidebar = useRef<HTMLElement | null>(null)

	useEffect(() => {
		ProfileStore.getProfileAccess()
	}, [])

	useEffect(() => {
		const clickHandler = ({ target }: MouseEvent) => {
			if (!sidebar.current) return
			if (
				!openSidebar ||
				sidebar.current.contains(target as HTMLDivElement)
			)
				return
			SidebarStore.changeOpenValue(false)
		}
		document.addEventListener('click', clickHandler)
		return () => document.removeEventListener('click', clickHandler)
	})

	useEffect(() => {
		const keyHandler = ({ keyCode }: KeyboardEvent) => {
			if (!openSidebar || keyCode !== 27) return
			SidebarStore.changeOpenValue(false)
		}
		document.addEventListener('keydown', keyHandler)
		return () => document.removeEventListener('keydown', keyHandler)
	})

	return (
		<aside
			ref={sidebar}
			className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden  duration-300 ease-linear bg-black dark:bg-boxdark lg:static lg:translate-x-0 ${openSidebar ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<SidebarHeader />
			<SidebarBody>
				{
					profileAccessStatus === RequestStatus.ready && <SidebarListItems data={profileAccess as ProfileAccess[]} />
				}
			</SidebarBody>
		</aside>
	)
}

export default Sidebar
