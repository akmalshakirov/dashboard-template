import type React from "react";

type ModalProps = {
    title?: string;
    visible: boolean;
    children: React.ReactNode;
};

export const Modal = ({ children, visible, title }: ModalProps) => {
    return (
        visible && (
            <div>
                <h2>{title}</h2>
                <div id='modalBody'>{children}</div>
            </div>
        )
    );
};
