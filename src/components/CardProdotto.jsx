import { Link } from "react-router-dom";

export default function CardProdotto({ product }) {
  return (
    <div className="product card h-100" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <div className="d-flex gap-2">
          <span className="fw-bold">{product.rating.rate}</span>
          <div>
            {Array.from({
              length: Math.floor(product.rating.rate),
            }).map((prod, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <span>({product.rating.count})</span>
        </div>
        <p className="card-text flex-grow-1 mt-2">
          {/* {product.description} <br /> */}
          <span className="text-primary">
            Category:
            <span className="category"> {product.category}</span>
          </span>
          <br />
          <span className="fs-2 fw-bolder">€{product.price.toFixed(2)}</span>
        </p>
        <button className="btn btn-warning w-100">Aggiungi al carrello</button>
      </div>
    </div>
  );
}
