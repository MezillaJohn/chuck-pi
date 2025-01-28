import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../route/ProtectedRoute";
import AddCoin from "../pages/Dashboard/UsersCoin/AddCoin";
import AllCoins from "../pages/Dashboard/AllCoins/AllCoins";
import RemoveCoin from "../pages/Dashboard/UsersCoin/RemoveCoin";
import AddChain from "../pages/Dashboard/CoinChain/AddChain";
import RemoveChain from "../pages/Dashboard/CoinChain/RemoveChain";
import EditCoin from "../pages/Dashboard/UsersCoin/EditCoin";
import EditChainAddress from "../pages/Dashboard/CoinChain/EditChainAddress";
import GetTransactions from "../pages/Dashboard/Transactions/GetTransactions";
import Home from "../pages/Dashboard/Home/Home";
import UpdateModeratorEmail from "../pages/Dashboard/Moderator/UpdateModeratorEmail";
import UpdateModeratorUserName from "../pages/Dashboard/Moderator/UpdateModeratorUserName";
import UpdateModeratorImage from "../pages/Dashboard/Moderator/UpdateModeratorImage";
import AllModerators from "../pages/Dashboard/Moderator/AllModerators";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),

    children: [
      {
        path: "/dashboard/home",
        element: <Home />,
      },
      {
        path: "/dashboard/all-coins",
        element: <AllCoins />,
      },
      {
        path: "/dashboard/users-coin",
        children: [
          {
            path: "/dashboard/users-coin/add-coin",
            element: <AddCoin />,
          },
          {
            path: "/dashboard/users-coin/remove-coin",
            element: <RemoveCoin />,
          },
          {
            path: "/dashboard/users-coin/edit-coin",
            element: <EditCoin />,
          },
        ],
      },
      {
        path: "/dashboard/coin-chain",
        children: [
          {
            path: "/dashboard/coin-chain/add-chain",
            element: <AddChain />,
          },
          {
            path: "/dashboard/coin-chain/remove-chain",
            element: <RemoveChain />,
          },
          {
            path: "/dashboard/coin-chain/edit-chain-address",
            element: <EditChainAddress />,
          },
        ],
      },
      {
        path: "/dashboard/transactions",
        element: <GetTransactions />,
      },
      {
        path: "/dashboard/moderator",
        children: [
          {
            path: "/dashboard/moderator/all-moderator",
            element: <AllModerators />,
          },
          {
            path: "/dashboard/moderator/email",
            element: <UpdateModeratorEmail />,
          },
          {
            path: "/dashboard/moderator/userName",
            element: <UpdateModeratorUserName />,
          },
          {
            path: "/dashboard/moderator/image",
            element: <UpdateModeratorImage />,
          },
        ],
      },
    ],
  },
]);
