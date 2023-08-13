/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { guestInfo, selectOption } from "./common/models";
export { guestInfo, selectOption } from "./common/models";
export namespace Components {
    interface IrButton {
        "btn_block": boolean;
        "btn_color": string;
        "btn_disabled": boolean;
        "btn_size": string;
        "btn_type": string;
        "icon": string;
        "name": string;
        "text": any;
    }
    interface IrGuestInfo {
        "data": guestInfo;
        "setupDataCountries": selectOption[];
        "setupDataCountriesCode": selectOption[];
    }
    interface IrSelect2 {
        "LabelAvailable": boolean;
        "data": selectOption[];
        "firstOption": string;
        "label": string;
        "name": string;
        "required": boolean;
        "selectStyle": boolean;
        "selectedValue": any;
        "submited": boolean;
    }
}
export interface IrButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrButtonElement;
}
export interface IrGuestInfoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrGuestInfoElement;
}
export interface IrSelect2CustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSelect2Element;
}
declare global {
    interface HTMLIrButtonElement extends Components.IrButton, HTMLStencilElement {
    }
    var HTMLIrButtonElement: {
        prototype: HTMLIrButtonElement;
        new (): HTMLIrButtonElement;
    };
    interface HTMLIrGuestInfoElement extends Components.IrGuestInfo, HTMLStencilElement {
    }
    var HTMLIrGuestInfoElement: {
        prototype: HTMLIrGuestInfoElement;
        new (): HTMLIrGuestInfoElement;
    };
    interface HTMLIrSelect2Element extends Components.IrSelect2, HTMLStencilElement {
    }
    var HTMLIrSelect2Element: {
        prototype: HTMLIrSelect2Element;
        new (): HTMLIrSelect2Element;
    };
    interface HTMLElementTagNameMap {
        "ir-button": HTMLIrButtonElement;
        "ir-guest-info": HTMLIrGuestInfoElement;
        "ir-select2": HTMLIrSelect2Element;
    }
}
declare namespace LocalJSX {
    interface IrButton {
        "btn_block"?: boolean;
        "btn_color"?: string;
        "btn_disabled"?: boolean;
        "btn_size"?: string;
        "btn_type"?: string;
        "icon"?: string;
        "name"?: string;
        "onClickHanlder"?: (event: IrButtonCustomEvent<any>) => void;
        "text"?: any;
    }
    interface IrGuestInfo {
        "data"?: guestInfo;
        "onGetSetupData"?: (event: IrGuestInfoCustomEvent<any>) => void;
        "onSubmitForm"?: (event: IrGuestInfoCustomEvent<guestInfo>) => void;
        "setupDataCountries"?: selectOption[];
        "setupDataCountriesCode"?: selectOption[];
    }
    interface IrSelect2 {
        "LabelAvailable"?: boolean;
        "data"?: selectOption[];
        "firstOption"?: string;
        "label"?: string;
        "name"?: string;
        "onSelectChange2"?: (event: IrSelect2CustomEvent<any>) => void;
        "required"?: boolean;
        "selectStyle"?: boolean;
        "selectedValue"?: any;
        "submited"?: boolean;
    }
    interface IntrinsicElements {
        "ir-button": IrButton;
        "ir-guest-info": IrGuestInfo;
        "ir-select2": IrSelect2;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ir-button": LocalJSX.IrButton & JSXBase.HTMLAttributes<HTMLIrButtonElement>;
            "ir-guest-info": LocalJSX.IrGuestInfo & JSXBase.HTMLAttributes<HTMLIrGuestInfoElement>;
            "ir-select2": LocalJSX.IrSelect2 & JSXBase.HTMLAttributes<HTMLIrSelect2Element>;
        }
    }
}