export interface Children {
    children: Readonly<React.ReactNode>;
}

export interface DeviceSpecs {
    mobile:         boolean,
    lowPowerDevice: boolean,
    mounted:        boolean
}