export interface InstallOptions {
    size: string;
    zIndex: number;
    locale?: any;
}
declare const setConfig: (key: string, value: unknown) => void;
declare const getConfig: (key: string) => unknown;
export { getConfig, setConfig };
