import React, { useState } from "react";
import { StyledDescription, StyledInfoTitle, StyledActions } from "./styles";
import { StyledSeparator } from "../../../../styles";
import Select from "../../../../../../../UI/SolarForms/Select/Select";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import Button from "../../../../../../../UI/SolarForms/Button/Button";
import { displayErrorAction } from "../../../../../../../../store/actions/actions";
import { connect } from "react-redux";
import { Http } from "../../../../../../../../services/Http";
import * as Yup from "yup";
import SeeMore from "../../../../../../../UI/SeeMore/SeeMore";
import ConfirmModal from "../../../../../../../UI/ConfirmModal/ConfirmModal";

const formSchema = Yup.object().shape({
  from: Yup.string().required("Required"),
  to: Yup.string().required("Required")
});

const Transfer = ({ account, showMessage }) => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1);
  const [amount, setAmount] = useState(null);
  const [seedpwd, setSeedpwd] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreate = () => {
    if (!validateForm()) return;
    setOpen(true);
  };

  const handleTransfer = () => {
    setOpen(false);
    const sendValues = {
      destination: SelectItems[to].address,
      amount: amount.toString(),
      seedpwd: seedpwd
    };

    Http.manageTransfer(sendValues).subscribe(result => {
      if (result && result.status === 200 && typeof result.data == "string") {
        showMessage("success", "Money transferred!");
      } else {
        showMessage("error", "Error while transferring");
      }
    });
  };

  const validateForm = () => {
    if (from.toString() === to.toString()) {
      showMessage("error", "You can not transfer to the same account");
      return false;
    }
    if (amount <= 0) {
      showMessage("error", "Enter Amount");
      return false;
    }
    return true;
  };

  const SelectItems = [
    {
      value: 0,
      address: account.StellarWallet && account.StellarWallet.PublicKey,
      name: "Primary Account"
    },
    {
      value: 1,
      address: account.SecondaryWallet && account.SecondaryWallet.PublicKey,
      name: "Secondary Account"
    }
  ];

  const handleSelectChange = (e, field) => {
    if (field === "from") {
      setFrom(e.target.value);
    } else {
      setTo(e.target.value);
    }
  };

  return (
    <div>
      {open && (
        <ConfirmModal
          title="Enter seed password"
          onConfirm={handleTransfer}
          onCancel={() => setOpen(false)}
          body={
            <Input
              placeholder="Seed Password"
              type="password"
              value={seedpwd}
              onChange={e => setSeedpwd(e.target.value)}
            />
          }
        />
      )}
      <StyledDescription>
        You can send and receive blockchain based assets between your accounts
        or with any other public account.
      </StyledDescription>
      <StyledSeparator size={3} />
      <StyledInfoTitle>Transfer funds</StyledInfoTitle>
      <StyledSeparator noBorder size={3} />
      <StyledDescription>From which account?</StyledDescription>
      <Select
        placeholder="Select Option"
        value={from}
        items={SelectItems}
        onChange={e => handleSelectChange(e, "from")}
      />
      <StyledDescription>Where?</StyledDescription>
      <Select
        placeholder="Select Option"
        value={to}
        items={SelectItems}
        onChange={e => handleSelectChange(e, "to")}
      />
      <StyledDescription>How Much?</StyledDescription>
      <Input
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <StyledActions>
        <Button
          style={{ width: 214 }}
          variant={"secondary"}
          label={"confirm"}
          action={handleCreate}
        />
      </StyledActions>
    </div>
  );
};

const mapStateToProps = state => ({
  account: state.profile.user.items
});

const mapDispatchToProps = dispatch => ({
  showMessage: (type, message) => dispatch(displayErrorAction(type, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
