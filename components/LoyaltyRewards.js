"use client";

const rewards = [
  {
    icon: "fas fa-mobile-alt",
    title: "Sign Up Free",
    text: "Join with just your phone number — at the truck or when you order online.",
  },
  {
    icon: "fas fa-utensils",
    title: "Earn Every Visit",
    text: "Collect points on every dollar you spend. The more you eat, the more you earn.",
  },
  {
    icon: "fas fa-gift",
    title: "100 Points = 10% Off",
    text: "Cash in your points for 10% off your order. Simple as that.",
  },
];

const LoyaltyRewards = () => {
  return (
    <section
      className="loyalty-section section-padding"
      style={{ background: "#98cedb" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span style={{ color: "#15535e", letterSpacing: "1px" }}>
            Rooster Rewards
          </span>
          <h2 style={{ color: "#1a1a1a" }}>
            Join the Flock, <span style={{ color: "#D12525" }}>Eat for Less</span>
          </h2>
          <p
            style={{
              maxWidth: "600px",
              margin: "15px auto 0",
              color: "#2c4a52",
            }}
          >
            Earn points every time you order and redeem them for discounts.
            It only takes your phone number to start.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {rewards.map((reward, index) => (
            <div className="col-md-4" key={index}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "35px 25px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#98cedb",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <i
                    className={reward.icon}
                    style={{ color: "#15535e", fontSize: "26px" }}
                  />
                </div>
                <h3 style={{ fontSize: "22px", marginBottom: "12px", color: "#1a1a1a" }}>
                  {reward.title}
                </h3>
                <p style={{ margin: 0, color: "#666", lineHeight: 1.6 }}>
                  {reward.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://online.skytab.com/2f3f98da057f3ff70d5e32d773b8e783/order-settings"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn bg-red-2"
          >
            <span className="button-content-wrapper d-flex align-items-center">
              <span className="button-icon">
                <i className="flaticon-delivery" />
              </span>
              <span className="button-text">Join &amp; Order Now</span>
            </span>
          </a>
          <p style={{ marginTop: "15px", color: "#2c4a52", fontSize: "14px" }}>
            Already a member? Just give your phone number at checkout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyRewards;