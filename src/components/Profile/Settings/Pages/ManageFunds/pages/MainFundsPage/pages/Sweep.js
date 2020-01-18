import React from 'react';
import {StyledDescription, StyledInfoTitle, StyledError, StyledActions} from "./styles";
import {StyledSeparator} from "../../../../styles";
import Select from "../../../../../../../UI/SolarForms/Select/Select";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import Button from "../../../../../../../UI/SolarForms/Button/Button";

const Sweep = () => {
    return (
        <div>
            <StyledDescription>
                You can sweep funds to another account using the user interface below or by using the rescue CLI function
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
            <Input placeholder='Destination public key' value={''} />
            <StyledSeparator noBorder size={3} />
            <StyledError>This will move all of your funds to the destination address your provide, which has to be an existing Stellar based account </StyledError>
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

export default Sweep;
