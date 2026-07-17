import * as React$1 from 'react';
import React__default from 'react';

type Ref<T extends HTMLElement = HTMLElement> = React__default.RefObject<T | null>;
declare namespace Ref {
    type H = React__default.RefObject<HTMLHeadingElement | null>;
    type P = React__default.RefObject<HTMLParagraphElement | null>;
    type Btn = React__default.RefObject<HTMLButtonElement | null>;
    type Div = React__default.RefObject<HTMLDivElement | null>;
    type Li = React__default.RefObject<HTMLLIElement | null>;
    type A = React__default.RefObject<HTMLAnchorElement | null>;
}

interface Children {
    children: Readonly<React.ReactNode>;
}

interface Props extends Children {
    className?: string;
    ref?: Ref;
    id?: string;
}
declare function Slide({ children, className, ref, id }: Props): React$1.JSX.Element;

export { Slide };
