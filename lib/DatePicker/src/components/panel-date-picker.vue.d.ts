import { PropType } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs | dayjs.Dayjs[]>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        required: true;
    };
    getPopperRef: {
        type: FunctionConstructor;
    };
}, {
    hasShortcuts: import("vue").ComputedRef<boolean>;
    showTime: import("vue").ComputedRef<boolean>;
    visibleDate: import("vue").ComputedRef<any>;
    visibleTime: import("vue").ComputedRef<any>;
    userInputDate: any;
    userInputTime: any;
    currentView: import("vue").Ref<string>;
    yearLabel: import("vue").ComputedRef<string>;
    selectionMode: import("vue").ComputedRef<string>;
    footerVisible: import("vue").ComputedRef<boolean>;
    innerDate: import("vue").Ref<{
        clone: () => dayjs.Dayjs;
        isValid: () => boolean;
        year: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        month: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        date: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        day: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        hour: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        minute: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        second: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        millisecond: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        set: (unit: dayjs.UnitType, value: number) => dayjs.Dayjs;
        get: (unit: dayjs.UnitType) => number;
        add: (value: number, unit?: dayjs.OpUnitType) => dayjs.Dayjs;
        subtract: (value: number, unit?: dayjs.OpUnitType) => dayjs.Dayjs;
        startOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        endOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        format: (template?: string) => string;
        diff: (date: dayjs.ConfigType, unit?: "M" | "year" | "month" | "date" | "day" | "hour" | "minute" | "second" | "millisecond" | "week" | "d" | "y" | "h" | "m" | "s" | "ms" | "w" | "quarter" | "Q", float?: boolean) => number;
        valueOf: () => number;
        unix: () => number;
        daysInMonth: () => number;
        toDate: () => Date;
        toJSON: () => string;
        toISOString: () => string;
        toString: () => string;
        utcOffset: () => number;
        isBefore: (date: dayjs.ConfigType, unit?: dayjs.OpUnitType) => boolean;
        isSame: (date: dayjs.ConfigType, unit?: dayjs.OpUnitType) => boolean;
        isAfter: (date: dayjs.ConfigType, unit?: dayjs.OpUnitType) => boolean;
        locale: {
            (): string;
            (preset: string | ILocale, object?: Partial<ILocale>): dayjs.Dayjs;
        };
        localeData: () => dayjs.InstanceLocaleDataReturn;
        isLeapYear: () => boolean;
        week: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        weekYear: () => number;
        isSameOrAfter: (date: dayjs.ConfigType, unit?: dayjs.OpUnitType) => boolean;
        isSameOrBefore: (date: dayjs.ConfigType, unit?: dayjs.OpUnitType) => boolean;
    }>;
    shortcuts: any;
    disabledDate: any;
    cellClassName: any;
    defaultTime: any;
    arrowControl: any;
    popperRef: import("vue").Ref<HTMLElement>;
    MONTHLIST: {
        month1: string;
        month2: string;
        month3: string;
        month4: string;
        month5: string;
        month6: string;
        month7: string;
        month8: string;
        month9: string;
        month10: string;
        month11: string;
        month12: string;
    };
    month: import("vue").ComputedRef<number>;
    timePickerVisible: import("vue").Ref<boolean>;
    handleInputDate: (val: any) => void;
    handleInputTime: (val: any) => void;
    handleDatePicker: (value: Dayjs) => void;
    handleMonthPick: (month: number) => void;
    handleYearPick: (year: number) => void;
    handleShortcutClick: (shortcut: any) => void;
    onConfirm: () => void;
    prevYear: () => void;
    nextYear: () => void;
    prevMonth: () => void;
    nextMonth: () => void;
    changeToNow: () => void;
    handleVisibleDateChange: (value: any) => void;
    handleVisibleTimeChange: (value: any) => void;
    onTimePickerInputFocus: () => void;
    handleTimePickClose: () => void;
    timeFormat: import("vue").ComputedRef<any>;
    handleTimePick: (value: any, visible: any, first: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "set-picker-option")[], "pick" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible: boolean;
    format: string;
    type: string;
} & {
    parsedValue?: dayjs.Dayjs | dayjs.Dayjs[];
    getPopperRef?: Function;
}>, {
    visible: boolean;
    format: string;
}>;
export default _default;
