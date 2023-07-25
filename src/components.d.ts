/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
    }
    interface MyWrapperComponent {
    }
}
export interface MyComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyComponentElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyWrapperComponentElement extends Components.MyWrapperComponent, HTMLStencilElement {
    }
    var HTMLMyWrapperComponentElement: {
        prototype: HTMLMyWrapperComponentElement;
        new (): HTMLMyWrapperComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-wrapper-component": HTMLMyWrapperComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        "onCustomclick"?: (event: MyComponentCustomEvent<any>) => void;
    }
    interface MyWrapperComponent {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-wrapper-component": MyWrapperComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-wrapper-component": LocalJSX.MyWrapperComponent & JSXBase.HTMLAttributes<HTMLMyWrapperComponentElement>;
        }
    }
}