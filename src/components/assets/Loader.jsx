import * as React from "react";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate(props) {
  useEffect(() => {
    props.loading
      ? document.getElementById("loader").classList.add("d-print-block")
      : document.getElementById("loader").classList.add("d-none");
  }, [props.loading]);
  return (
    <div class="spinner-border spinner-border-sm" id="loader" role="status">
      {/* <span class="sr-only">Loading...</span> */}
    </div>
  );
}
