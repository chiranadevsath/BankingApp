import HeaderBox from "@/components/HeaderBox";
import RightNavBar from "@/components/RightNavBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
	const loggedIn = {
		firstName: "Chirana",
		lastName: "Devsad",
		email: "chiranadevsath@gmail.com",
	};
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

			<RightNavBar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.5 }, {currentBalance: 5000}]}
			/>
		</section>
	);
};

export default Home;
