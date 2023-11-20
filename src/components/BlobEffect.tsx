import { PropsWithChildren } from "react";

let Props: PropsWithChildren<{
    children?: React.ReactNode;
    className?: string;
}>;

const BlobEffect = (props = Props): JSX.Element => {
    return (
        <div className={props.className}>
            <div className="blur-blob animate-blob transition">{props.children}</div>
        </div>
    );
};

export default BlobEffect;