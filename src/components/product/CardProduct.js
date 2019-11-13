import React from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default function CardProduct({ product, refresh }) {
  async function deleteProduct() {
    swal({
      title: "Are You Sure",
      text:
        "Once deleted, data (" + product.name + ") will not able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        swal("data (" + product.name + ") has been deleted!", {
          icon: "success"
        });
        await axios.delete(
          "http://localhost/reactapi/deleteProduct.php?id=" + product.id
        );
        return refresh();
      } else {
        swal("data (" + product.name + ") is safe!");
      }
    });
  }

  return (
    <tr>
      <th scope="col">{product.id}</th>
      <th scope="col">{product.name}</th>
      <th scope="col">{product.price}</th>
      <th scope="col">
        <Link className="btn btn-dark" to={"/EditProduct/" + product.id}>
          Edit
        </Link>
        <button type="button" className="btn btn-dark" onClick={deleteProduct}>
          Delete
        </button>
      </th>
    </tr>
  );
}
