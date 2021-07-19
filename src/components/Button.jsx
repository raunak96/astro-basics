import React from "react";

const Button = ({ children }) => {
	const toggleTheme = () => {
		const currentTheme =
			document.documentElement.getAttribute("data-theme");
		document.documentElement.setAttribute(
			"data-theme",
			currentTheme === "dark" ? "light" : "dark"
		);
	};
	return <button onClick={toggleTheme}>{children}</button>;
};

export default Button;
