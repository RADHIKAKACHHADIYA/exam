import React from 'react';
import {LinkButton, OutlinedButton, PrimaryButton } from './Button.style';

export const ButtonType = {
    PRIMARY : "PRIMARY",
    LINK : "LINK",
    OUTLINE:"OUTLINE"
}

function Button({buttonType, children ,...rest}) {
    // console.log(buttonType === ButtonType.PRIMARY)
    if (buttonType === ButtonType.PRIMARY) {
        return (
            <PrimaryButton {...rest}>
                {children}
            </PrimaryButton>
        )
    } else if (buttonType === ButtonType.LINK) {
        return (
            <LinkButton {...rest}>
                {children}
            </LinkButton>
        )
    } else if (buttonType === ButtonType.OUTLINE) {
        return (
            <OutlinedButton {...rest}>
                {children}
            </OutlinedButton>
        )
    }
    return (
        <div>
            
        </div>
    );
}

export default Button;