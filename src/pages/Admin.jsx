import React from "react";
import Axios from "axios";
import { API_URL } from "../constants/API";
import "../assets/styles/admin.css";

class Admin extends React.Component {
  state = {
    productList: [],
    addProductName: "",
    addProductPrice: "",
    addProductImage: "",
    addDescription: "",
    addCategory: "",
  };

  fetchProducts = () => {
    Axios.get(`${API_URL}/products`)
      .then((result) => {
        this.setState({ productList: result.data });
      })
      .catch(() => {
        alert("Terjadi kesalahan diserver");
      });
  };

  renderProducts = () => {
    return this.state.productList.map((val) => {
      return (
        <tr>
          <td>{val.id}</td>
          <td>{val.productName}</td>
          <td>{val.price}</td>
          <td>
            <img
              className="admin-product-image"
              src={val.productImage}
              alt=""
            />
          </td>
          <td>{val.description}</td>
          <td>{val.category}</td>
          <td>
            <button className="btn btn-secondary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
  };

  addNewProduct = () => {
    Axios.post(`${API_URL}/products`, {
      productName: this.state.addProductName,
      price: this.state.addProductPrice,
      productImage: this.state.addProductImage,
      description: this.state.addDescription,
      category: this.state.addCategory,
    })
      .then(() => {
        this.fetchProducts();
      })
      .catch(() => {
        alert("Terjadi Kesalahan add Product!");
      });
  };

  inputHandler = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <div className="p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Manage Products</h1>
            <table className="table mt-4">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>{this.renderProducts()}</tbody>
              <tfoot className="bg-light">
                <tr>
                  <td></td>
                  <td>
                    <input
                      onChange={this.inputHandler}
                      name="addProductName"
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      onChange={this.inputHandler}
                      name="addProductPrice"
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      onChange={this.inputHandler}
                      name="addProductImage"
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      onChange={this.inputHandler}
                      name="addDescription"
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select
                      onChange={this.inputHandler}
                      name="addCategory"
                      className="form-control"
                    >
                      <option value="">All Items</option>
                      <option value="Baju">Baju</option>
                      <option value="Topi">Topi</option>
                      <option value="Celana">Celana</option>
                    </select>
                  </td>
                  <td colSpan={2}>
                    <button
                      onClick={this.addNewProduct}
                      className="btn btn-info"
                    >
                      Add Product
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
