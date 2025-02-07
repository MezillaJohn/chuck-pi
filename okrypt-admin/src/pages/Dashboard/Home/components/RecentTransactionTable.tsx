import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function RecentTransactionTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ color: "white", fontSize: "1.3rem", fontWeight: "700" }}
            >
              Type
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontSize: "1.3rem", fontWeight: "700" }}
            >
              Coin Name
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontSize: "1.3rem", fontWeight: "700" }}
            >
              Coin Amount
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontSize: "1.3rem", fontWeight: "700" }}
            >
              NGN Amount
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontSize: "1.3rem", fontWeight: "700" }}
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ color: "white", fontSize: "1.3rem" }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", fontSize: "1.3rem" }}
              >
                {row.calories}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", fontSize: "1.3rem" }}
              >
                {row.fat}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", fontSize: "1.3rem" }}
              >
                {row.carbs}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", fontSize: "1.3rem" }}
              >
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
