import { NonFunctionProperties } from '@/types/types'
import { proxy } from 'valtio'

export class Login {
	email: string = ''
	password: string = ''

	async logIn() {
		// TODO: some process to Login
		return {
			success: true,
			msg: {
				title: 'Successfull Login',
				msg: '',
			},
			data: {
				email: this.email,
				password: this.password
			}
		}
	}

	updateForm<K extends keyof NonFunctionProperties<this>>(key: K, value: NonFunctionProperties<this>[K]) {
		(this as NonFunctionProperties<this>)[key] = value
	}
}


export const LoginStore = proxy<Login>(new Login())