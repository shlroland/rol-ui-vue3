export declare const getTimeLists: (disabledHours: any, disabledMinutes: any, disabledSeconds: any) => {
    getHoursList: (role: any, compare?: any) => any[];
    getMinutesList: (hour: any, role: any, compare?: any) => any[];
    getSecondsList: (hour: any, minute: any, role: any, compare?: any) => any[];
};
export declare const getAvaliableArrs: (disabledHours: any, disabledMinutes: any, disabledSeconds: any) => {
    getAvaliableHours: (role: any, compare?: any) => any;
    getAvaliableMinutes: (hour: any, role: any, compare?: any) => any;
    getAvaliableSeconds: (hour: any, minute: any, role: any, compare?: any) => any;
};
