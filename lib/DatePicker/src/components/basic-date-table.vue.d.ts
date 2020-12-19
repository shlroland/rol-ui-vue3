import { PropType } from 'vue';
import type { Dayjs } from 'dayjs';
import type { DatePickerTableCell } from '../date-picker-types';
declare const _default: import("vue").DefineComponent<{
    date: {
        type: PropType<Dayjs>;
    };
    minDate: {
        type: PropType<Dayjs>;
    };
    maxDate: {
        type: PropType<Dayjs>;
    };
    parsedValue: {
        type: PropType<Dayjs | Dayjs[]>;
    };
    selectionMode: {
        type: StringConstructor;
        default: string;
    };
    showWeekNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledDate: {
        type: FunctionConstructor;
    };
    cellClassName: {
        type: FunctionConstructor;
    };
    rangeState: {
        type: ObjectConstructor;
        default: () => {
            endDate: any;
            selecting: boolean;
        };
    };
}, {
    WEEKS: import("vue").ComputedRef<string[]>;
    WEEKLIST: {
        sun: string;
        mon: string;
        tue: string;
        wed: string;
        thu: string;
        fri: string;
        sat: string;
    };
    rows: import("vue").ComputedRef<DatePickerTableCell[][]>;
    startDate: import("vue").ComputedRef<Dayjs>;
    offsetDay: import("vue").ComputedRef<number>;
    isWeekActive: (cell: DatePickerTableCell) => boolean;
    getCellClasses: (cell: DatePickerTableCell) => string;
    handleClick: (event: MouseEvent) => void;
    handleMouseMove: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("changerange" | "pick" | "select")[], "changerange" | "pick" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    selectionMode: string;
    showWeekNumber: boolean;
    rangeState: Record<string, any>;
} & {
    date?: Dayjs;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    parsedValue?: Dayjs | Dayjs[];
    disabledDate?: Function;
    cellClassName?: Function;
}>, {
    selectionMode: string;
    showWeekNumber: boolean;
    rangeState: Record<string, any>;
}>;
export default _default;
