import cn from 'classnames';

import { ReactNode } from 'react';
import styles from './styles.module.css';

interface ButtonProps extends Readonly<{
    children?: ReactNode;
}> {
    className?: string;
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
};

function Button(props: ButtonProps) {
    return (
        <button className={cn(styles.base, styles?.[props.variant ?? "primary"], props.className)}>
            {props.children}
        </button>
    )
}

export default Button;
