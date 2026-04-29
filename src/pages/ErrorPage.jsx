import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <>
      <div className="d-flex flex-column gap-3 align-items-center">
        <h1 className="">ERROR 404</h1>
        <h3>Pagina non trovata</h3>
        <Link className="btn btn-primary" to="/">
          Torna alla home
        </Link>
      </div>
    </>
  );
}
