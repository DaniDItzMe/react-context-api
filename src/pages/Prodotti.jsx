import axios from "axios";
import { useEffect, useState } from "react";
import CardProdotto from "../components/CardProdotto";
import { Link } from "react-router-dom";
import { useBudgetMode } from "../contexts/BudgetContext";
export default function Prodotti() {
  const [products, setProducts] = useState();

  const { budgetMode, setBudgetMode } = useBudgetMode();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  //Per le card dei prodotti ho preso ispirazione da Amazon

  return (
    <div>
      <h1 className="text-center mb-5">Prodotti {budgetMode.toString()}</h1>

      <div className="row g-5">
        {products
          ? budgetMode
            ? products.map((product) => {
                if (product.price <= 30) {
                  return (
                    <div className="col d-flex" key={product.id}>
                      <Link
                        className="detailsLink"
                        to={`/prodotti/${product.id}/${products.length}`}
                      >
                        <CardProdotto product={product} />
                      </Link>
                    </div>
                  );
                }
              })
            : products.map((product) => (
                <div className="col d-flex" key={product.id}>
                  <Link
                    className="detailsLink"
                    to={`/prodotti/${product.id}/${products.length}`}
                  >
                    <CardProdotto product={product} />
                  </Link>
                </div>
              ))
          : Array.from({ length: 20 }).map((card, index) => (
              <div className="card col-3" aria-hidden="true" key={index}>
                <img src={null} className="card-img-top w-100 h-100" alt="" />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
