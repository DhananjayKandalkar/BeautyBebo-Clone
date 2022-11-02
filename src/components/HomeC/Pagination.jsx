import React from "react";
import {ButtonGroup, Button } from "@chakra-ui/react";


const Pagination = ({ pages, totalPage, handlePageChange }) => {
    const prev = (
        <Button
          colorScheme='teal'
          variant='outline'
          onClick={() => handlePageChange(-1)}
          disabled={pages === 1}
        >
          PREV
        </Button>
      );
      const currentPage = <Button>{`${pages} / ${totalPage}`}</Button>;
      const next = (
        <Button
          colorScheme='teal'
          variant='outline'
          onClick={() => handlePageChange(1)}
          disabled={pages === totalPage}
        >
          NEXT
        </Button>
      );
      return (
        <ButtonGroup gap='4'>
          {prev}
          {currentPage}
          {next}
        </ButtonGroup>
    );
};

export default Pagination;