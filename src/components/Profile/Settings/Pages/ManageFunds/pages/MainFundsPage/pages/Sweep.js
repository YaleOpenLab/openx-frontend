import React, {useState} from 'react';
import {StyledDescription, StyledInfoTitle, StyledError, StyledActions} from "./styles";
import {StyledSeparator} from "../../../../styles";
import Select from "../../../../../../../UI/SolarForms/Select/Select";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import Button from "../../../../../../../UI/SolarForms/Button/Button";
import {Http} from "../../../../../../../../services/Http";
import ConfirmModal from "../../../../../../../UI/ConfirmModal/ConfirmModal";
import {displayErrorAction} from "../../../../../../../../store/actions/actions";
import {connect} from "react-redux";

const Sweep = ({account, showMessage}) => {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState('');
    const [seedpwd, setSeedpwd] = useState('');
    const [open, setOpen] = useState(false);

    const handleCreate = () => {
        if(!validateForm()) return;
        setOpen(true);
    };

    const handleTransfer = () => {
        setOpen(false);
        const sendValues = {
            destination: to,
            seedpwd: seedpwd
        };

        Http.manageSweep(sendValues).subscribe(result => {
            if(result.data && result.data.Code === 200) {
                showMessage('success', 'Successfully transferred!');
            }else {
                showMessage('error', 'Error while transferring');
            }
        });
    };

    const validateForm = () => {
        if(from.toString() === to.toString()) {
            showMessage('error', 'You can not transfer to the same account');
            return false;
        }
        return true;
    };

    const SelectItems = [
        {value: 0, address: account.StellarWallet && account.StellarWallet.PublicKey, name: 'Primary Account'},
        {value: 1, address: account.SecondaryWallet && account.SecondaryWallet.PublicKey, name: 'Secondary Account'},
    ];

    const handleSelectChange = (e) => {
        setFrom(e.target.value);
    };


    return (
        <div>
            {open &&
            <ConfirmModal
                title='Enter seed password'
                onConfirm={handleTransfer}
                onCancel={() => setOpen(false)}
                body={
                    <Input placeholder='Seed Password' type='password' value={seedpwd} onChange={(e) => setSeedpwd(e.target.value)} />
                }
            />}
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
            <Select placeholder='Select Option'  value={from} items={SelectItems} onChange={handleSelectChange}/>
            <StyledDescription>
                Where?
            </StyledDescription>
            <Input placeholder='Destination public key' value={to} onChange={(e) => setTo(e.target.value)} />
            <StyledSeparator noBorder size={3} />
            <StyledError>This will move all of your funds to the destination address your provide, which has to be an existing Stellar based account </StyledError>
            <StyledActions>
                <Button
                    style={{width: 214}}
                    variant={'secondary'}
                    label={'confirm'}
                    action={handleCreate}
                />
            </StyledActions>
        </div>
    )
};

const mapStateToProps = state => ({
    account: state.profile.user.items,
});

const mapDispatchToProps = dispatch => ({
    showMessage: (type, message) => dispatch(displayErrorAction(type, message)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sweep);
