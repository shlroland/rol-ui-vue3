declare class Dialog {
    dialogNode: Nullable<HTMLElement>;
    focusAfterClosed: HTMLElement | string;
    focusFirst: HTMLElement | string;
    lastFocus: Nullable<Element>;
    constructor(dialogNode: Nullable<HTMLElement>, focusAfterClosed: HTMLElement | string, focusFirst: HTMLElement | string);
    addListeners(): void;
    removeListeners(): void;
    closeDialog(): void;
    trapFocus(event: KeyboardEvent): void;
}
export default Dialog;
