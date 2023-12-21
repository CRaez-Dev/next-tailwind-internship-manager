/* eslint-disable @typescript-eslint/ban-types */

type NonFunctionPropertyNames<T> = {
	[K in keyof T]: T[K] extends Function ? never : K | never
}[keyof T]

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>

export enum RequestStatus {
	idle,
	loading,
	failed,
	ready
}

export enum Icons {
	dashboard,
	forms,
	report,
	profile,
	setting
}