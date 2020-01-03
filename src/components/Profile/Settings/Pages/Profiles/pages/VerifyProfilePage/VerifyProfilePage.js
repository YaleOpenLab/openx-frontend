import React from 'react';
import StepsForm from "../../../../../../General/StepsForm/StepsForm";
import ROUTES from "../../../../../../../routes/routes";
import Verify from "./tabs/Verify";

const VerifyProfilePage = () => {
	return (
		<div className="RegisterNewEntity">
			<StepsForm
				goBackUrl={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE}
				tabs={[
					{ name: "register", key: 1 },
					{ name: "verify", key: 2 },
					{ name: "wallet", key: 3 }
				]}
			>
				<Verify key={1} />
				<div key={2}>2</div>
				<div key={3}>3</div>
			</StepsForm>
		</div>
	)
};

export default VerifyProfilePage;
