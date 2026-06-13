import "./CustomerManagement.css";

function CustomerManagement() {
    const customers = [
        {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            orders: 12,
            status: "Active",
        },
        {
            id: 2,
            name: "Priya Singh",
            email: "priya@gmail.com",
            orders: 8,
            status: "Active",
        },
        {
            id: 3,
            name: "Amit Verma",
            email: "amit@gmail.com",
            orders: 3,
            status: "Inactive",
        },
        {
            id: 4,
            name: "Neha Gupta",
            email: "neha@gmail.com",
            orders: 15,
            status: "Active",
        },
    ];

    return (
        <div className="customer-management">
            <h1>Customer Management</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total Orders</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.orders}</td>
                            <td>
                                <span
                                    className={`status ${customer.status.toLowerCase()}`}
                                >
                                    {customer.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerManagement;