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
import { Backdrop, Button, CircularProgress } from "@mui/material";
import moment from "moment";
import { columns } from "../utils/response.utils";
import { useRecoilValue } from "recoil";
import { LoadingAtom } from "../features/store/atoms/loading.state";

export default function Responses() {
  const loading = useRecoilValue(LoadingAtom);
  const rows = useGetResponses();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [bundle, setBundle] = React.useState(15);

  console.log(bundle);

  const handleLoadMore = () => {
    setBundle((v) => v + 15);
  };

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
      <div className="flex justify-between">
        <div className=" mx-3  w-auto flex justify-center items-center">
          <Button variant="contained" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
        <TablePagination
          rowsPerPageOptions={[15, 100]}
          component="div"
          count={rows?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Paper>
  );
}
