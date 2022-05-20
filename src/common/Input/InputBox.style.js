import styled from 'styled-components';
import { FormFeedback, Input } from 'reactstrap';

export const InputBoxStyle = styled(Input)`
    height: 44px;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 10px !important;
    display: block;
    width: 100%;
    font-weight: 500;
    line-height: 1.6;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    :focus{
        box-shadow: none;
        border-color: #FF6337;
    }
`;

export const InputBoxError = styled(FormFeedback)`
    color: red;
    display: ${props => props.display.errors ? 'flex' : 'none'}
`;