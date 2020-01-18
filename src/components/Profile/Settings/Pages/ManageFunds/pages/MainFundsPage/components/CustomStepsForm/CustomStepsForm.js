import React from 'react';
import styled from 'styled-components';
import {Variables} from "../../../../../../../../../styles/variables";

const StyledCustomStepsForm = styled.div`
    border-radius: 2px;
`;

const StyledCustomStepsFormHeader = styled.div`
    height: 60px;
    display: flex;
`;

const StyledCustomStepsFormBody = styled.div`
    border: 1px solid ${Variables.Colors.warmGreyTwo};
    min-height: 150px;
    padding: 15px;
`;

const StyledHeaderItemLink = styled.div`
    flex: 1;
`;

const StyledHeaderItem = styled.div`
    font-size: 10px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    color: ${Variables.Colors.thirdColorLight};
    border: 1px solid ${Variables.Colors.warmGreyTwo};
    &:hover {
        background: ${Variables.Colors.secondaryColorVeryLight};
    }
`;

const CustomStepsForm = ({content, active, setActive}) => {
    const headerItems = content.map(item => {
        return (
            <StyledHeaderItemLink onClick={()=> setActive(item.url)} style={{flex: 1}}>
                <StyledHeaderItem>{item.title}</StyledHeaderItem>
            </StyledHeaderItemLink>
        )
    });

    return (
        <StyledCustomStepsForm>
            <StyledCustomStepsFormHeader>
                {headerItems}
            </StyledCustomStepsFormHeader>
            <StyledCustomStepsFormBody>
                {content.filter(item => item.url === active)[0].content}
            </StyledCustomStepsFormBody>
        </StyledCustomStepsForm>
    );
};

export default CustomStepsForm;
