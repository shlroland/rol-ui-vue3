declare type TextAreaHeight = {
    height: string;
    minHeight?: string;
};
export default function calcTextareaHeight(targetElement: HTMLTextAreaElement, minRows?: number, maxRows?: any): TextAreaHeight;
export {};
