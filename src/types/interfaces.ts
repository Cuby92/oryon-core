import { Ref } from './refs';

export interface Children {
    children: Readonly<React.ReactNode>;
}

export interface DeviceSpecs {
    mobile:         boolean,
    lowPowerDevice: boolean,
    mounted:        boolean
}

export interface LinkProps extends Children {
    href:       string,
    className?: string,
    active?:    boolean,
    visited?:   boolean,
    label?:     string,
    ref?:       Ref.A
}

export interface LinkTemplate {
    href:   string;
    label:  string;
}