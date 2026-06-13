import { products } from "../../data/products";
import "./ProductManagement.css";

function ProductForm() {
    return (
        <form className="product-form">
            <h2>Add New Product</h2>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" placeholder="Product title" />
            </div>

            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input id="price" type="number" placeholder="Product price" />
            </div>

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <input id="category" type="text" placeholder="Product category" />
            </div>

            <button type="submit">Save Product</button>
        </form>
    );
}

function ProductManagement() {
    return (
        <div className="product-management">
            <h1>Product Management</h1>

            <ProductForm />

            <h2>All Products</h2>

            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                />
                            </td>

                            <td>{product.title}</td>

                            <td>{product.price}</td>

                            <td>{product.category}</td>

                            <td>
                                <button className="edit-btn">
                                    Edit
                                </button>

                                <button className="delete-btn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductManagement;