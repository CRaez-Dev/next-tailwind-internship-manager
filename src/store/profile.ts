import { Icons, NonFunctionProperties, RequestStatus } from '@/types/types'
import { proxy } from 'valtio'

export interface UserProfile {
	name: string,
	lastName: string,
	studentCode: string,
	studentMail: string,
	studentCycle: string,
	studentYear: string,
	assignedTeacher: string,
	mobilePhone: string,
	address: string,
	city: string,
	state: string,
}

export interface ProfileAccess {
	id: number,
	isMain: boolean,
	icon?: Icons ,
	name: string,
	route?: string,
	children?: ProfileAccess[]
}

const USERPROFILE_INIT_FAKE: UserProfile = {
	name: 'John',
	lastName: 'Doe',
	studentCode: '2023000000',
	studentMail: '2023000000@unfv.edu.pe',
	studentCycle: '2',
	studentYear: '2023',
	assignedTeacher: 'Profesor Xavier',
	mobilePhone: '999999999',
	address: 'Av. John Doe',
	city: 'LIMA',
	state: 'LIMA'
}

const USERPROFILEACCESS_INIT_FAKE: ProfileAccess[] = [
	{
		id: 1,
		isMain: true,
		icon: Icons.dashboard,
		name: 'Dashboard',
		route: '/dashboard'
	},
	{
		id: 2,
		isMain: true,
		name: 'PPP',
		icon: Icons.forms,
		children: [
			{
				id: 3,
				isMain: false,
				name: 'Cartas',
				route: '/letters'
			},
			{
				id: 4,
				isMain: false,
				name: 'Jefe Inmediato',
				route: '/direct-boss'
			}
		]

	},
	{
		id: 5,
		isMain: true,
		icon: Icons.report,
		name: 'Reportes',
		children: [
			{
				id: 6,
				isMain: false,
				name: 'Informe de PPP',
				route: '/ppp'
			},
			{
				id: 7,
				isMain: false,
				name: 'Ficha de control',
				route: '/control-sheet'
			},
			{
				id: 8,
				isMain: false,
				name: 'Informe Final',
				route: '/final-report'
			}
		]

	},

]

const USERPROFILE_INIT: UserProfile = {
	name: 'John',
	lastName: 'Doe',
	studentCode: '2023000000',
	studentMail: '2023000000@unfv.edu.pe',
	studentCycle: '2',
	studentYear: '2023',
	assignedTeacher: 'Profesor Xavier',
	mobilePhone: '999999999',
	address: 'Av. John Doe',
	city: 'LIMA',
	state: 'LIMA'
}

export class Profile {
	profileData: UserProfile = USERPROFILE_INIT
	profileDataStatus: RequestStatus = RequestStatus.idle
	profileAccess: ProfileAccess[] = []
	profileAccessStatus: RequestStatus = RequestStatus.idle
	async getProfileData() {
		try {
			this.profileDataStatus = RequestStatus.loading
			this.profileData = USERPROFILE_INIT_FAKE
			this.profileDataStatus = RequestStatus.ready
		} catch (error) {
			this.profileDataStatus = RequestStatus.failed
		}
	}

	async getProfileAccess() {
		try {
			this.profileAccessStatus = RequestStatus.loading
			this.profileAccess = USERPROFILEACCESS_INIT_FAKE
			this.profileAccessStatus = RequestStatus.ready
		} catch (error) {
			this.profileAccessStatus = RequestStatus.failed
			throw error as Error
		}
	}

	updateForm<K extends keyof NonFunctionProperties<this>>(key: K, value: NonFunctionProperties<this>[K]) {
		(this as NonFunctionProperties<this>)[key] = value
	}
}


export const ProfileStore = proxy<Profile>(new Profile())