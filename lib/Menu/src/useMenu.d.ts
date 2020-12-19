import { ComponentInternalInstance } from 'vue';
export declare const emitEvent: {
    TOGGLECOLLAPSE: string;
    ITEMCLICK: string;
    SUBMENUCLICK: string;
    SELECT: string;
    CLICK: string;
    CLOSE: string;
    OPEN: string;
    MOUSELEAVECHILD: string;
    MOUSEENTERCHILD: string;
};
export declare const useMenu: (instance: ComponentInternalInstance, currentIndex?: string) => {
    parentMenu: import("vue").ComputedRef<ComponentInternalInstance>;
    paddingStyle: import("vue").ComputedRef<{
        paddingLeft: string;
    }>;
    indexPath: import("vue").ComputedRef<string[]>;
};
