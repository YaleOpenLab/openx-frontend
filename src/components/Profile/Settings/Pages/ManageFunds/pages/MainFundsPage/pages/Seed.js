import React from 'react';
import {StyledDescription, StyledActions } from "./styles";
import {StyledSeparator} from "../../../../styles";
import Select from "../../../../../../../UI/SolarForms/Select/Select";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import Button from "../../../../../../../UI/SolarForms/Button/Button";

const Seed = () => {
    return (
        <div>
            <StyledDescription>
                Send 2/3 of these to another account in order to recover your seed at a later date
            </StyledDescription>
            <StyledSeparator size={3} />
            <Input placeholder='RANDOM STRING HERE'  />
            <Input placeholder='RANDOM STRING HERE'  />
            <Input placeholder='RANDOM STRING HERE'  />

            <Select placeholder='Select Option'  value={''} />
            <StyledDescription>
                Destination email address:
            </StyledDescription>
            <Input placeholder='Destination email address'  />
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

export default Seed;
