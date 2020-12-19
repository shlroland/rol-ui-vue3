import { IconLookup, AbstractElement } from '@fortawesome/fontawesome-svg-core';
export declare type Icon = IconLookup | string[] | string;
export declare function normalizeIconArgs(icon: Icon): IconLookup;
export declare function classList(props: any): string[];
export declare function objectWithKey(key: any, value: any): any;
export declare function objectWithoutProperties(obj: any, keys: string[]): any;
export declare function convert(abstractElement: AbstractElement, props?: {}, attrs?: any): () => any;
