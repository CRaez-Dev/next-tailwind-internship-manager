/* eslint-disable @typescript-eslint/ban-types */

type NonFunctionPropertyNames<T> = {
	[K in keyof T]: T[K] extends Function ? never : K | never
}[keyof T]

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>