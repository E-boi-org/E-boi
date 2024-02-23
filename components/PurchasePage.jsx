import "./PurchasePage.css";
import { Link } from "react-router-dom";
const PurchasePage = () => {
  return (
    <div className="purchase-text">
      <h1>Thank you for your Purchase</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default PurchasePage;
