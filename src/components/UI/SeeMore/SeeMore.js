import React, {useState} from 'react';

const SeeMore = ({children, infoContent}) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			{children}
			{open && <div>
				{infoContent}
			</div>}
		</div>
	)
};

export default SeeMore;
