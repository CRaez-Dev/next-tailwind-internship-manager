import { NonFunctionProperties } from '@/types/types'
import { proxy } from 'valtio'

class Login {
	email: string = ''
	password: string = ''

	async signIn() {
		// TODO: some process to Login
	}

	updateForm<K extends keyof NonFunctionProperties<this>>(key: K, value: NonFunctionProperties<this>[K]) {
		(this as NonFunctionProperties<this>)[key] = value
	}
}


export const LoginStore = proxy<Login>(new Login())