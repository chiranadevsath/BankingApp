import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
	const loggedIn = { firstName: "Chirana" };
	return (
		<section className="home">
			<div className="home-content"></div>
			<header className="home-header">
				<HeaderBox
					type="greeting"
					title="Welcome"
					user={loggedIn?.firstName || "Guest"}
					subtext="Access and Manage your account with Horizon"
				/>
				<TotalBalanceBox
					accounts={[]}
					totalBanks={1}
					totalCurrentBalance={1250.35}
				/>
			</header>
		</section>
	);
};

export default Home;
