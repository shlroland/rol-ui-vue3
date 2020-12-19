import { PropType } from 'vue';
import dayjs from 'dayjs';
import { DatePickerTableCell } from '../date-picker-types';
declare const _default: import("vue").DefineComponent<{
    disabledDate: {
        type: PropType<(_: Date) => void>;
    };
    selectionMode: {
        type: StringConstructor;
        default: string;
    };
    minDate: {
        type: PropType<dayjs.Dayjs>;
    };
    maxDate: {
        type: PropType<dayjs.Dayjs>;
    };
    date: {
        type: PropType<dayjs.Dayjs>;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs>;
    };
    rangeState: {
        type: ObjectConstructor;
        default: () => {
            endDate: any;
            selecting: boolean;
        };
    };
}, {
    rows: import("vue").ComputedRef<any[][]>;
    MONTHSLIST: {
        jan: string;
        feb: string;
        mar: string;
        apr: string;
        may: string;
        jun: string;
        jul: string;
        aug: string;
        sep: string;
        oct: string;
        nov: string;
        dec: string;
    };
    months: import("vue").Ref<string[]>;
    getCellStyle: (cell: DatePickerTableCell) => any;
    handleMonthTableClick: (event: MouseEvent) => void;
    handleMouseMove: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "select" | "changerange")[], "pick" | "select" | "changerange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    selectionMode: string;
    rangeState: Record<string, any>;
} & {
    disabledDate?: (_: Date) => void;
    minDate?: dayjs.Dayjs;
    maxDate?: dayjs.Dayjs;
    date?: dayjs.Dayjs;
    parsedValue?: dayjs.Dayjs;
}>, {
    selectionMode: string;
    rangeState: Record<string, any>;
}>;
export default _default;
