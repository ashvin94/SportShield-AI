import { Navigate, useLocation } from "react-router-dom";
import { useWallet } from "../context/WalletContext";
import Spinner from "../components/Spinner";

function ProtectedRoute({ children }) {
  const { walletAddress, connecting } = useWallet();
  const location = useLocation();

  if (connecting) {
    return <Spinner label="Checking wallet connection..." />;
  }

  if (!walletAddress) {
    // Instead of login, we redirect to home where they can connect wallet
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
