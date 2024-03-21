import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useGetResponses } from "../features/hooks/useGetResponses";
import { Backdrop, CircularProgress } from "@mui/material";
import moment from "moment";

interface Column {
  id:
    | "id"
    | "username"
    | "code_language"
    | "source_code"
    | "submitted_at"
    | "stdout"
    | "stderr"
    | "status"
    | "stdin";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "Serial No.", minWidth: 30 },
  { id: "username", label: "Username", minWidth: 100 },
  {
    id: "code_language",
    label: "Code\u00a0Language",
    minWidth: 30,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "source_code",
    label: "Source\u00a0Code",
    minWidth: 130,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "stdin",
    label: "Input",
    minWidth: 60,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "stderr",
    label: "Error",
    minWidth: 50,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 40,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "stdout",
    label: "Output",
    minWidth: 40,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "submitted_at",
    label: "Submitted\u00a0At",
    minWidth: 200,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

export default function Responses() {
  const [loading, setLoading] = React.useState(false);
  const rows = useGetResponses({ setLoading });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  console.log(rows);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", height: "93vh", overflow: "hidden" }}>
      <TableContainer className="h-[86vh]">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "700" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <>
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = String(row[column.id]);
                          if (column.id === "id") {
                            console.log(value);
                          }
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                column.id === "status"
                                  ? value === "Accepted"
                                    ? "bg-green-300"
                                    : " bg-yellow-300"
                                  : column.id === "stderr"
                                  ? value === "null"
                                    ? ""
                                    : "bg-red-400"
                                  : ""
                              }
                            >
                              {column.id === "submitted_at"
                                ? moment(value).format(
                                    "MMMM Do YYYY, h:mm:ss a"
                                  )
                                : column.id === "id"
                                ? index + 1
                                : value.length > 50
                                ? value.slice(0, 50) + " ..."
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    </>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 100]}
        component="div"
        count={rows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Paper>
  );
}
