import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PaginationLi } from "./styledAdminPagination";
import { Button, Flex } from "@chakra-ui/react";

interface AdminPaginationType {
  numberOfCurrentPage: number;
  numberOfPage: number;
  setPage: Dispatch<SetStateAction<string>>;
}

const AdminPagination = (props: AdminPaginationType) => {
  const numberOfPage = props.numberOfPage;
  const numberOfCurrentPage = props.numberOfCurrentPage;
  const setPage = props.setPage;

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= numberOfPage; i++) {
      arr.push(i);
    }
    setPageNumbers(arr);
  }, [numberOfPage, numberOfCurrentPage]);

  return (
    <div>
      <ul>
        <Flex>
          {pageNumbers.map((number: any) => (
            <PaginationLi key={number}>
              <Button
                style={{ background: numberOfCurrentPage === number ? "lightblue" : "white" }}
                onClick={() => setPage(number)}
              >
                {number}
              </Button>
            </PaginationLi>
          ))}
        </Flex>
      </ul>
    </div>
  );
};

export default AdminPagination;
