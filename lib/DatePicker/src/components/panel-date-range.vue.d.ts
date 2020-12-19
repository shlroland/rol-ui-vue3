import { PropType } from 'vue';
import dayjs from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    unlinkPanels: BooleanConstructor;
    parsedValue: {
        type: PropType<dayjs.Dayjs[]>;
    };
    type: {
        type: StringConstructor;
        required: true;
    };
    visible: BooleanConstructor;
}, {
    shortcuts: any;
    disabledDate: any;
    cellClassName: any;
    defaultTime: any;
    defaultValue: any;
    arrowControl: any;
    hasShortcuts: import("vue").ComputedRef<boolean>;
    showTime: import("vue").ComputedRef<boolean>;
    leftYear: import("vue").ComputedRef<number>;
    rightYear: import("vue").ComputedRef<number>;
    leftLabel: import("vue").ComputedRef<string>;
    rightLabel: import("vue").ComputedRef<string>;
    leftMonth: import("vue").ComputedRef<number>;
    rightMonth: import("vue").ComputedRef<number>;
    leftDate: import("vue").Ref<{
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
    rightDate: import("vue").Ref<{
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
    minDate: any;
    maxDate: any;
    rangeState: import("vue").Ref<{
        endDate: any;
        selecting: boolean;
    }>;
    enableYearArrow: import("vue").ComputedRef<boolean>;
    enableMonthArrow: import("vue").ComputedRef<boolean>;
    btnDisabled: import("vue").ComputedRef<boolean>;
    minVisibleDate: import("vue").ComputedRef<any>;
    maxVisibleDate: import("vue").ComputedRef<any>;
    minVisibleTime: import("vue").ComputedRef<any>;
    maxVisibleTime: import("vue").ComputedRef<any>;
    minTimePickerVisible: import("vue").Ref<boolean>;
    maxTimePickerVisible: import("vue").Ref<boolean>;
    dateFormat: import("vue").ComputedRef<string>;
    timeFormat: import("vue").ComputedRef<any>;
    leftPrevYear: () => void;
    leftPrevMonth: () => void;
    rightNextYear: () => void;
    rightNextMonth: () => void;
    leftNextYear: () => void;
    leftNextMonth: () => void;
    rightPrevYear: () => void;
    rightPrevMonth: () => void;
    handleChangeRange: (val: any) => void;
    handleRangPick: (val: any, close?: boolean) => void;
    onSelect: (selecting: any) => void;
    handleShortcutClick: (shortcut: any) => void;
    handleMinTimeClose: () => void;
    handleMaxTimeClose: () => void;
    handleDateInput: (value: any, type: any) => void;
    handleDateChange: (value: any, type: any) => void;
    handleTimeInput: (value: any, type: any) => void;
    handleTimeChange: (value: any, type: any) => void;
    handleClear: () => void;
    handleConfirm: (visible?: boolean) => void;
    handleMinTimePick: (value: any, visible: any, first: any) => void;
    handleMaxTimePick: (value: any, visible: any, first: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("set-picker-option" | "pick")[], "set-picker-option" | "pick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: string;
} & {
    unlinkPanels?: boolean;
    parsedValue?: dayjs.Dayjs[];
    visible?: boolean;
}>, {}>;
export default _default;
