import "./OrderTracking.css";

function OrderTracking() {
    const steps = [
        "Order Placed",
        "Preparing",
        "Out For Delivery",
        "Delivered",
    ];

    const currentStep = 2;

    return (
        <div className="tracking-page">
            <h1>Track Your Order</h1>

            <div className="tracking-container">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`tracking-step ${index <= currentStep ? "active" : ""
                            }`}
                    >
                        <div className="circle">{index + 1}</div>
                        <p>{step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderTracking;