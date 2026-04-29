import shoplio from "../assets/Shoplio.png";

//Immagine e nome del sito generati con l'intelligenza artificiale

export default function Homepage() {
  return (
    <div className="text-center">
      <h1>Benvenuto su Shoplio!</h1>
      <img
        className="w-50 rounded"
        src={shoplio}
        alt="Immagine promozionale del sito"
      />
    </div>
  );
}
