import { Dayjs } from 'dayjs';
export declare const rangeArr: (n: any) => number[];
export declare const extractDateFormat: (format: string) => string;
export declare const extractTimeFormat: (format: any) => any;
export declare const limitTimeRange: (date: Dayjs | string | Date, ranges: Dayjs[][], format?: string) => Dayjs;
export declare const timeWithRange: (date: Dayjs | string | Date, ranges: Dayjs[][], format?: string) => boolean;
export declare const datesInMonth: (year: any, month: any) => Date[];
export declare const datesInYear: (year: number) => Date[];
