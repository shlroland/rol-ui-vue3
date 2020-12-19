export declare type AnyFunction<T> = (...args: any[]) => T;
export declare type PartialReturnType<T extends (...args: unknown[]) => unknown> = Partial<ReturnType<T>>;
