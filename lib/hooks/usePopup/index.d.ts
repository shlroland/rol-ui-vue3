declare const usePopup: (props: any, doClose: (...rest: any) => unknown) => {
    state: {
        opened: boolean;
        bodyPaddingRight: any;
        computedBodyPaddingRight: number;
        withoutHiddenClass: boolean;
        rendered: boolean;
        visible: boolean;
    };
    close: () => void;
    doAfterClose: () => void;
    updateClosingFlag: (value: any) => void;
    restoreBodyStyle: () => void;
};
export default usePopup;
