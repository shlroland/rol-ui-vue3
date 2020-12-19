import { InjectionKey } from 'vue';
import { SelectGroupContext, SelectProvideContext } from './type';
export declare const selectGroupKey: InjectionKey<SelectGroupContext>;
export declare const selectKey: InjectionKey<SelectProvideContext>;
export declare const selectEvents: {
    queryChange: string;
    groupQueryChange: string;
};
