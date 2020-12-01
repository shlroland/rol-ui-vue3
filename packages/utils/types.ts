export type AnyFunction<T> = (...args: any[]) => T

export type PartialReturnType<T extends (...args: unknown[]) => unknown> = Partial<ReturnType<T>>
