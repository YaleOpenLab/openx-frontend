import React from 'react';
import {StyledDescription, StyledActions, StyledError} from "./styles";
import {StyledSeparator} from "../../../../styles";
import Select from "../../../../../../../UI/SolarForms/Select/Select";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import Button from "../../../../../../../UI/SolarForms/Button/Button";

const P2P = () => {
    return (
        <div>
            <StyledDescription>
                You can create and send assets to other accounts
            </StyledDescription>
            <StyledSeparator size={3} />
            <StyledDescription>
                Enter Asset Name
            </StyledDescription>
            <Select  />
            <StyledDescription>
                Enter Issuance Amount
            </StyledDescription>

            <Input placeholder='Enter Amount' value={''} />
            <StyledDescription>
                Where?
            </StyledDescription>
            <Input placeholder='Enter Address'  value={''} />
            <StyledSeparator noBorder size={3} />
            <StyledActions>
                <Button
                    style={{width: 214}}
                    variant={'secondary'}
                    label={'CREATE AND SEND'}
                    action={() => console.log}
                />
            </StyledActions>
        </div>
    )
};

export default P2P;
