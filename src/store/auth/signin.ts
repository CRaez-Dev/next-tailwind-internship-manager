import { NonFunctionProperties } from '@/types/types'
import { create } from 'zustand'


export interface SignIn {
	email: string
	password: string
	updateForm: <K extends keyof NonFunctionProperties<this>>(key: K, value: NonFunctionProperties<this>[K]) => void
}

export const SignInStore = create<SignIn>()((set) => ({
	email: '',
	password: '',
	updateForm: (key, value: string) => set(() => ({ [key]: value }))

}))
