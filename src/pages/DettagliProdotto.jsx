import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function DettagliProdotto() {
  const { id, max } = useParams();
  console.log(max);

  parseInt(id);
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((data) => {
      console.log(data);
      if (data.data) {
        setProduct(data.data);
      } else {
        navigate("/prodotti");
      }
    });
  }, [id]);

  function NextPage() {
    navigate(`/prodotti/${Number(id) + 1}/${max}`);
  }
  function PreviousPage() {
    navigate(`/prodotti/${Number(id) - 1}/${max}`);
  }

  return (
    <>
      {product ? (
        <>
          <h1 className="text-center mb-3">Dettagli prodotto</h1>
          <div className="productDetails row border border-2 rounded p-3">
            <div className="col-3">
              <img className="w-100" src={product.image} alt="" />
            </div>
            <div className="col-9 d-flex flex-column">
              <h2>{product.title}</h2>
              <div className="d-flex gap-2">
                <span className="fw-bold">{product?.rating.rate}</span>
                <div>
                  {Array.from({
                    length: Math.floor(product?.rating.rate),
                  }).map((prod, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <span>({product.rating.count})</span>
              </div>
              <div className="d-flex flex-column flex-grow-1">
                <span className="fs-5">{product.description}</span>
                <span className="text-primary">
                  Category:
                  <span className="category"> {product.category}</span>
                </span>
              </div>
              <span className="fs-2 fw-bolder">
                €{product.price.toFixed(2)}
              </span>
              <button className="btn btn-warning w-100">
                Aggiungi al carrello
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button
                    onClick={PreviousPage}
                    className={
                      id == 1
                        ? "page-link text-black fs-5 disabled"
                        : "page-link text-black fs-5"
                    }
                    href="#"
                  >
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button
                    onClick={NextPage}
                    className={
                      id == max
                        ? "page-link text-black fs-5 disabled"
                        : "page-link text-black fs-5"
                    }
                    href="#"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center placeholder-glow mb-3">
            <span className="placeholder col-4"></span>
          </h1>
          <div className="productDetails row border border-2 rounded p-3">
            <div className="col-3">
              <img className="w-100 h-100 card-img-top" src={null} alt="" />
            </div>
            <div className="col-9 d-flex flex-column placeholder-glow">
              <h2 className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </h2>
              <div className="d-flex gap-2 placeholder-glow">
                <span className="fw-bold placeholder col-3"></span>
                <div>
                  <span className="placeholder col-5"></span>
                </div>
                <span className="placeholder col-2"></span>
              </div>
              <br />
              <div className="d-flex flex-column flex-grow-1 placeholder-glow">
                <span className="fs-5 placeholder col-12"></span>
                <br />
                <span className=" placeholder col-4"></span>
                <br />
              </div>
              <span className="fs-2 fw-bolder placeholder col-4"></span>
              <button className="btn btn-warning disabled placeholder col-12 w-100"></button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
