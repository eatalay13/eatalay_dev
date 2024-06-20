'use client';

import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

import styles from './styles.module.css';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    loadingText?: string;
}

function SubmitButton({ children, loadingText, className, ...rest }: SubmitButtonProps) {
    const [loading, setLoading] = useState<string>(loadingText ?? 'Bekleyiniz...');

    const { pending } = useFormStatus();

    useEffect(() => {
        setLoading(loadingText ?? 'Bekleyiniz...');
    }, [loadingText]);


    return (
        <button
            disabled={pending}
            type={'submit'}
            {...rest}
            className={className ?? styles.submitButton}
        >
            {pending ? loading : children}
        </button>
    );
}

export default SubmitButton;
