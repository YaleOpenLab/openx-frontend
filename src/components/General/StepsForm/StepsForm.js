import React, { useState } from "react";
import "./StepsForm.scss";
import StepsFormHeader from "./StepsFormHeader/StepsFormHeader";
import Button from "../../UI/SolarForms/Button/Button";

const StepsForm = ({
  tabs,
  disabledNext,
  separator,
  loading,
  handleSave,
  disabledConfirm,
  classes,
  children,
  saveText,
  goBackUrl
}) => {
  const [step, setStep] = useState(1);

  const goNext = () => {
    if (step < children.length) {
      setStep(step + 1);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  let content = null;
  let buttons = null;

  if (!children) {
    return <div>empty form</div>;
  }

  if (children) {
    content = children.find(item => {
      return parseInt(item.key) === step;
    });
  }

  if (step > 1 && step < children.length) {
    buttons = (
      <React.Fragment>
        <div className="col-6">
          <Button variant={"reversed"} action={goBack} disabled={disabledNext}>
            back
          </Button>
        </div>
        <div className="col-6">
          <Button variant={"default"} action={goNext} disabled={disabledNext}>
            next
          </Button>
        </div>
      </React.Fragment>
    );
  } else if (step < children.length) {
    buttons = (
      <React.Fragment>
        {goBackUrl && (
          <div className="col-6">
            <Button
              variant={"reversed"}
              link={goBackUrl}
              disabled={disabledNext}
            >
              go back
            </Button>
          </div>
        )}
        <div className="col-6">
          <Button variant={"default"} action={goNext} disabled={disabledNext}>
            next
          </Button>
        </div>
      </React.Fragment>
    );
  } else {
    buttons = (
      <React.Fragment>
        <div className="col-6">
          <Button variant={"reversed"} action={goBack} disabled={loading}>
            back
          </Button>
        </div>
        <div className="col-6">
          <Button
            variant={"default"}
            action={handleSave}
            disabled={disabledConfirm || loading}
          >
            {saveText ? saveText : "save"}
          </Button>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="MultiSteps">
      <div className="solar-form">
        <div className="container">
          <StepsFormHeader
            tabs={tabs}
            active={step}
            classes={classes}
            separator={separator}
          />
        </div>
        <div className="col-12 mx-auto">
          <div className="row  justify-content-center">
            <div className="col-12">{content}</div>
            <div className="container">
              <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="row justify-content-end">{buttons}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsForm;
