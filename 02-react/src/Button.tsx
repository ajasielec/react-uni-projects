import {FC} from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
    className?: string;
    id?: string;
}

export const Button: FC<ButtonProps> = ({label, onClick, className, id}) => {
    return (
        <button id={id} onClick={onClick} className={className}>
            {label}
        </button>
    );
};