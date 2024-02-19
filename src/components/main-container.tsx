import React from "react";

interface MainContainerProps {
	children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			{children}
		</div>
	);
};

export default MainContainer;
