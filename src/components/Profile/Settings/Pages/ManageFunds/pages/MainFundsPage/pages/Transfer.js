import React from 'react';
import {StyledDescription, StyledInfoTitle, StyledActions } from "./styles";
import {StyledSeparator} from "../../../../styles";
import Select from "../../../../../../../UI/SolarForms/Select/Select";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import Button from "../../../../../../../UI/SolarForms/Button/Button";

const Transfer = () => {
    return (
        <div>
            <StyledDescription>
                You can send and receive blockchain based assets between your accounts or with any other public account.
            </StyledDescription>
            <StyledSeparator size={3} />
            <StyledInfoTitle>
                Transfer funds
            </StyledInfoTitle>
            <StyledSeparator noBorder size={3} />
            <StyledDescription>
                From which account?
            </StyledDescription>
            <Select placeholder='Select Option' value={''} />
            <StyledDescription>
                Where?
            </StyledDescription>
            <Select placeholder='Select Option'  value={''} />
            <StyledDescription>
                How Much?
            </StyledDescription>
            <Input placeholder='Leave Blank for transferring in full'  />
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

export default Transfer;
