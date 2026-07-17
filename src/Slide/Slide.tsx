import styles from './Slide.module.scss';
import type { Children } from '../types/interfaces';
import { Ref } from '../types/refs';

const s = styles;

interface Props extends Children {
    className?: string;
    ref?: Ref;
    id?: string;
}

export function Slide({ children, className, ref, id } : Props) {
    return (
        <section className={`${className} ${s.slide}`} ref={ref} id={id}>
            {children}
        </section>
    );
}