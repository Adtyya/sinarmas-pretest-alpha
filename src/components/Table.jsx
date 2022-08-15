import React, { useState, useCallback, useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TableComp = ({ data, setOpen, setEdit }) => {
  // const ref = useRef(0);
  // console.log("render" + ref.current++);
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className=" max-w-[80px]">
                Nama Staff
              </TableCell>
              <TableCell align="center">Posisi</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) =>
                row.staff.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row" align="center">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.roles}</TableCell>
                    <TableCell align="center" className="flex space-x-2">
                      <span
                        className="bg-red-500 px-2 py-1 text-white rounded text-xs cursor-pointer"
                        onClick={(e) => setOpen(e, row.id)}
                      >
                        Delete
                      </span>
                      <span
                        className="bg-blue-500 px-2 py-1 text-white rounded text-xs cursor-pointer"
                        onClick={(e) => setEdit(e, row.id)}
                      >
                        Edit Data
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default React.memo(TableComp);
