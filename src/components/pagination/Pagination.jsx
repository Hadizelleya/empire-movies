import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Button, Typography } from "@mui/material";

export default function Pagination({ currentPage, setPage, totalPages }) {
  const [disabled, setDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    setDisabled(currentPage === 1);
    setNextButtonDisabled(currentPage === totalPages);
  }, [currentPage]);
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <div className={classes.container}>
      <Button
        disabled={disabled}
        className={classes.button}
        onClick={handlePrev}
        variant="contained"
        color="primary"
      >
        Prev
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        className={classes.button}
        disabled={nextButtonDisabled}
        variant="contained"
        onClick={handleNext}
        color="primary"
      >
        Next
      </Button>
    </div>
  );
}
