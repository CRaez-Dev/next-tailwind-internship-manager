import { NonFunctionProperties, RequestStatus } from '@/types/types'
import { proxy } from 'valtio'

export class ResetPassword {
	password: string = ''
	newPassword: string = ''
	resetPasswordStatus: RequestStatus = RequestStatus.idle

	async postResetPassword() {
		try {
			this.resetPasswordStatus = RequestStatus.loading
			// TODO Fetch
			this.resetPasswordStatus = RequestStatus.ready
		} catch (error) {
			this.resetPasswordStatus = RequestStatus.failed			
		}
	}

	updateForm<K extends keyof NonFunctionProperties<this>>(key: K, value: NonFunctionProperties<this>[K]) {
		(this as NonFunctionProperties<this>)[key] = value
	}
}


export const ResetPasswordStore = proxy<ResetPassword>(new ResetPassword())