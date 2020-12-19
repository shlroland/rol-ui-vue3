export declare const isVisible: (element: HTMLElement) => boolean;
export declare const isFocusable: (element: HTMLElement) => boolean;
export declare const obtainAllFocusableElements: (element: HTMLElement) => HTMLElement[];
export declare const attemptFocus: (element: HTMLElement) => boolean;
export declare const triggerEvent: (elm: HTMLElement, name: string, ...opts: Array<boolean>) => HTMLElement;
declare const Utils: {
    IgnoreUtilFocusChanges: boolean;
    focusFirstDescendant(element: HTMLElement): boolean;
    focusLastDescendant(element: HTMLElement): boolean;
};
export default Utils;
