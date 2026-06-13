import "./ReferralRewards.css";

function ReferralRewards() {
    return (
        <div className="referral-page">
            <h1>Referral & Rewards</h1>

            <div className="referral-card">
                <h2>Your Referral Code</h2>

                <div className="referral-code">
                    SATVIFY2026
                </div>

                <p>
                    Share this code with your friends and earn
                    reward points when they place their first order.
                </p>

                <button>Copy Code</button>
            </div>

            <div className="rewards-card">
                <h2>Your Rewards</h2>

                <h3>250 Points</h3>

                <p>
                    Redeem points for discounts on subscriptions
                    and healthy meal plans.
                </p>
            </div>
        </div>
    );
}

export default ReferralRewards;