import React, {useState} from "react";
import {connect} from "react-redux";
import SeeMore from "../../../../../../UI/SeeMore/SeeMore";
import RadioButton from "../../../../../../UI/SolarForms/RadioButton/RadioButton";
import DivBox from "../../../../../../General/DivBox/DivBox";
import ROUTES from "../../../../../../../routes/routes";
import ToggleButton from "../../../../../../General/ToggleButton";
import ActionButtons from "../../../../ActionButtons";
import history from "../../../../../../../helpers/history";
import {progressAction} from "../../../../../../../store/actions/actions";
import {registerAction, registerEntityAction, updateAccount} from "../../../../../store/actions";

const Entity = ({account, setProgress, entity, isDeveloper, isContractor, isOriginator, isGuarantor}) => {
    const [verified, setVerified] = useState(account.Kyc);
    const [asEntity, setAsEntity] = useState(false);
    const handleVerify = () => {
        history.push(ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES_PAGES.VERIFY.replace(':username', account.Username).replace(':userType', 'user'))
    };

    const goNext = () => {
        if(asEntity){
            history.push(ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE_PAGES.NEW_ENTITY);
            return;
        }
        if (account.ProfileProgress < 60) {
            setProgress(account.Username, 60);
        }
        history.push(ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES);
    };

    return (
        <div className="ProfilePageContainer">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
                    <div className="component-box-title component-header">
                        <span className="-darker">Your Registered Entities</span>
                    </div>
                    <div className="component-box-text margin-bottom">
                        <span className="--highlight">Setup and manage the entity you represent.</span> ‘Entity’ refers
                        to the
                        organisation that you as an individual are
                        acting on behalf of. For example, you can be making investments on behalf of an investment firm,
                        operating a
                        solar development company, or acting as a member of a cooperative.
                    </div>
                    <div className="col-12 solar-form-separator"/>
                    <div style={{display: "flex"}}>
                        <DivBox
                            type="full"
                            text={account.Name}
                            label="individual"
                            leftIcon="profile-user-icon"
                            rightIcon="profile-edit-icon"
                        />
                        <DivBox
                            text={account.StellarWallet && account.StellarWallet.PublicKey}
                            label="public key"
                            leftIcon="profile-badge-icon"
                        />
                    </div>
                    {isDeveloper &&
                        <React.Fragment>
                            <div className="col-12 solar-form-separator"/>
                            <div style={{display: "flex"}}>
                                <DivBox
                                    type="full"
                                    text={entity.Name}
                                    label="developer profile"
                                    leftIcon="developer-icon"
                                    rightIcon="profile-edit-icon"
                                />
                                <DivBox
                                    text={entity.StellarWallet && entity.StellarWallet.PublicKey}
                                    label="public key"
                                    leftIcon="profile-badge-icon"
                                />
                            </div>
                        </React.Fragment>
                    }
                    {isGuarantor &&
                        <React.Fragment>
                            <div className="col-12 solar-form-separator"/>
                            <div style={{display: "flex"}}>
                                <DivBox
                                    type="full"
                                    text={entity.Name}
                                    label="guarantor profile"
                                    leftIcon="developer-icon"
                                    rightIcon="profile-edit-icon"
                                />
                                <DivBox
                                    text={entity.StellarWallet && entity.StellarWallet.PublicKey}
                                    label="public key"
                                    leftIcon="profile-badge-icon"
                                />
                            </div>
                        </React.Fragment>
                    }
                    {isContractor &&
                        <React.Fragment>
                            <div className="col-12 solar-form-separator"/>
                            <div style={{display: "flex"}}>
                                <DivBox
                                    type="full"
                                    text={entity.Name}
                                    label="contractor profile"
                                    leftIcon="developer-icon"
                                    rightIcon="profile-edit-icon"
                                />
                                <DivBox
                                    text={entity.StellarWallet && entity.StellarWallet.PublicKey}
                                    label="public key"
                                    leftIcon="profile-badge-icon"
                                />
                            </div>
                        </React.Fragment>
                    }
                    {isOriginator &&
                        <React.Fragment>
                            <div className="col-12 solar-form-separator"/>
                            <div style={{display: "flex"}}>
                                <DivBox
                                    type="full"
                                    text={entity.Name}
                                    label="originator profile"
                                    leftIcon="developer-icon"
                                    rightIcon="profile-edit-icon"
                                />
                                <DivBox
                                    text={entity.StellarWallet && entity.StellarWallet.PublicKey}
                                    label="public key"
                                    leftIcon="profile-badge-icon"
                                />
                            </div>
                        </React.Fragment>
                    }

                    <div className="component-box-content">
                        <ToggleButton
                            label={<SeeMore infoContent={<div style={{fontSize: 12}}>Is your account verified? </div>}>Is
                                your account
                                verified?</SeeMore>}
                            checked={verified}
                            handleChange={handleVerify}
                        />
                    </div>
                    <div className="col-12 solar-form-separator"/>
                    <div className="component-box-content">
                        <div className="component-box-title component-header">
                            <span className="-darker">Register a New Entity</span>
                        </div>
                        <RadioButton
                            name="ENTITY_MANAGER"
                            label="ENTITY MANAGER: I won't use the platform as an individual, but will operate on behalf of an entity (i.e. an organisation)."
                            checked={asEntity}
                            onChange={() => setAsEntity(!asEntity)}
                        />
                        <div className="margin-top">
                            <DivBox
                                type="full"
                                text="company name"
                                label="ONBOARD AN ORGANISATION"
                                leftIcon="profile-business-icon"
                                rightIcon="profile-add-icon"
                                link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE_PAGES.NEW_ENTITY}
                            />
                        </div>
                    </div>
                    <ActionButtons
                        cancelButton={{
                            url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.SECURITY,
                            label: 'back'
                        }}
                        confirmButton={{
                            action: goNext,
                            label: 'next'
                        }}
                    />
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    isInvestor: state.profile.investor.authorized,
    isRecipient: state.profile.recipient.authorized,
    isDeveloper: state.profile.entity.items.Developer,
    isContractor: state.profile.entity.items.Contractor,
    isOriginator: state.profile.entity.items.Originator,
    isGuarantor: state.profile.entity.items.Guarantor,
    account: state.profile.user.items,
    entity: state.profile.entity.items && state.profile.entity.items.U,
    loading: state.profile.user.isLoading
});

const mapDispatchToProps = dispatch => ({
    updateAccount: (entity, payload) => dispatch(updateAccount(entity, payload)),
    registerAccount: (entity, data) => dispatch(registerAction(entity, data)),
    registerEntityAccount: (entity, data) => dispatch(registerEntityAction(entity, data)),
    setProgress: (username, progress) => dispatch(progressAction(username, progress)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Entity);
