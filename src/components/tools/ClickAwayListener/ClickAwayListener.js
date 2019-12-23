import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, action) {
	function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			action && action();
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
}

const ClickAwayListener = ({children, onClickAway}) => {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, onClickAway);

	return <div ref={wrapperRef}>{children}</div>;
};

export default ClickAwayListener;
