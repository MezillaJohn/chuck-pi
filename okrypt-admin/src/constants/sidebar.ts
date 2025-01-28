export const SideList = [
  {
    id: "1",
    title: "Home",
    path: "/dashboard/home",
  },
  {
    id: "2",
    title: "All Coins",
    path: "/dashboard/all-coins",
  },
  {
    id: "3",
    title: "Users Coin List",
    submenu: [
      {
        id: "3-1",
        title: "Add Coin",
        path: "/dashboard/users-coin/add-coin",
      },
      {
        id: "3-2",
        title: "Remove Coin",
        path: "/dashboard/users-coin/remove-coin",
      },
      {
        id: "3-3",
        title: "Edit Coin",
        path: "/dashboard/users-coin/edit-coin",
      },
    ],
  },
  {
    id: "4",
    title: "Coin Chain",
    submenu: [
      {
        id: "4-1",
        title: "Add Chain to Coin",
        path: "/dashboard/coin-chain/add-chain",
      },
      {
        id: "4-2",
        title: "Remove Chain from Coin",
        path: "/dashboard/coin-chain/remove-chain",
      },
      {
        id: "4-3",
        title: "Edit Chain Address",
        path: "/dashboard/coin-chain/edit-chain-address",
      },
    ],
  },
  {
    id: "5",
    title: "Transactions",
    path: "/dashboard/transactions",
  },
  {
    id: "6",
    title: "Moderators",
    path: "/dashboard/moderators",
    submenu: [
      {
        id: "6-4",
        title: "All Moderator",
        path: "/dashboard/moderator/all-moderator",
      },
      {
        id: "6-1",
        title: "Update Moderator Email",
        path: "/dashboard/moderator/email",
      },
      {
        id: "6-2",
        title: "Update Moderator User Name",
        path: "/dashboard/moderator/userName",
      },
      {
        id: "6-3",
        title: "Update Moderator Image",
        path: "/dashboard/moderator/image",
      },
    ],
  },
  {
    id: "7",
    title: "Users",
    path: "/dashboard/users",
    submenu: [
      {
        id: "7-1",
        title: "All Users",
        path: "/dashboard/users/all-users",
      },
      {
        id: "7-2",
        title: "Update User Name",
        path: "/dashboard/transactions/confirm-transaction",
      },
      {
        id: "7-3",
        title: "Update Image",
        path: "/dashboard/transactions/reject-transaction",
      },
    ],
  },
];
