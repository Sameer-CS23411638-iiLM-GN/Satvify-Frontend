// import { products } from "../../data/products";
// // If the external ProductForm component is missing, provide a local fallback
// // to prevent build errors. Replace with the real component when available.
// import React from "react";

// const ProductForm: React.FC = () => {
//     return (
//         <div className="product-form-placeholder">
//             <h3>Add / Edit Product</h3>
//             <p>Product form component not found. Please add components/admin/ProductForm.tsx</p>
//         </div>
//     );
// };
// import "./ProductManagement.css";

// function ProductManagement() {
//     return (
//         <div className="product-management">
//             <h1>Product Management</h1>

//             <ProductForm />

//             <h2>All Products</h2>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Image</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Category</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.id}>
//                             <td>
//                                 <img
//                                     src={product.image}
//                                     alt={product.title}
//                                 />
//                             </td>

//                             <td>{product.title}</td>

//                             <td>{product.price}</td>

//                             <td>{product.category}</td>

//                             <td>
//                                 <button className="edit-btn">
//                                     Edit
//                                 </button>

//                                 <button className="delete-btn">
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ProductManagement;

import { products } from "../../data/products";
import "./ProductManagement.css";

function ProductManagement() {
    return (
        <div className="product-management">
            <h1>Product Management</h1>

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