import { proxy } from 'valtio'

export class Sidebar {
	openSidebar: boolean = true
	changeOpenValue(value:boolean) { this.openSidebar = value }
}


export const SidebarStore = proxy<Sidebar>(new Sidebar())