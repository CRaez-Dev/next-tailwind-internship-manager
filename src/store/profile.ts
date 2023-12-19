import { NonFunctionProperties, RequestStatus } from '@/types/types'
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
	name: string,
	route: string,
	children: ProfileAccess[]
}

const INIT_FAKE_PROFILE_DATA: UserProfile = {
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
	profile: UserProfile = USERPROFILE_INIT
	profileStatus: RequestStatus = RequestStatus.idle

	async getProfileData() {
		// TODO: some process to Login
		this.profile = INIT_FAKE_PROFILE_DATA
	}

	async getProfileAccess() {
		try {
			this.profileStatus = RequestStatus.loading
			this.profile = INIT_FAKE_PROFILE_DATA
			// this.profileStatus = RequestStatus.ready
			throw new Error('example')
		} catch (error) {
			this.profileStatus = RequestStatus.failed
			throw error as Error
		}
	}

	updateForm<K extends keyof NonFunctionProperties<this>>(key: K, value: NonFunctionProperties<this>[K]) {
		(this as NonFunctionProperties<this>)[key] = value
	}
}


export const ProfileStore = proxy<Profile>(new Profile())