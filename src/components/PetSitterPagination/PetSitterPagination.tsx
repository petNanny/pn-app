import { useMemo } from "react";
import classnames from "classnames";
import {
  PaginationItemList,
  PaginationItem,
  PaginationContainer,
} from "./StylePetsitterPagination";

const DOTS = 0;

interface PaginationType {
  pageSize: number;
  siblingCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

/*
	Create an array of certain length and set the elements within it from
  start value to end value.
*/
const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
};

/*
	Create an array for Pagination component
*/
const usePagination = (
  // totalCount: number,
  pageSize: number,
  siblingCount: number,
  currentPage: number,
  totalPages: number
) => {
  const paginationRange = useMemo(() => {
    // const totalPageCount: number = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers: number = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex: number = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex: number = Math.min(currentPage + siblingCount, totalPages);

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots: boolean = leftSiblingIndex > 2;
    const shouldShowRightDots: boolean = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex: number = totalPages;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount: number = 3 + 2 * siblingCount;
      const leftRange: number[] = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPages];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount: number = 3 + 2 * siblingCount;
      const rightRange: number[] = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange: number[] = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    /*
      SHOULD NOT be processed here: case 1 already handled on the above
      writing this to avoid typeScript return undefined 
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    return range(1, totalPages);
  }, [totalPages, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

/*
	Create Pagination component
*/
const PetSitterPagination = (props: PaginationType) => {
  const {
    // totalCount: totalCount,
    pageSize: pageSize,
    siblingCount: siblingCount,
    currentPage: currentPage,
    onPageChange: onPageChange,
    totalPages: totalPages,
  } = props;

  const paginationRange = usePagination(
    // totalCount,
    pageSize,
    siblingCount,
    currentPage,
    totalPages
  );
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    console.log(paginationRange);
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    console.log(paginationRange);
    onPageChange(currentPage - 1);
  };
  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer>
      <PaginationItemList>
        {/* Left navigation arrow */}
        {currentPage === 1 ? (
          <div></div>
        ) : (
          <PaginationItem onClick={onPrevious}>
            <div className={classnames("arrow left")} />
          </PaginationItem>
        )}
        {paginationRange.map((pageNumber, i) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li className="dots" key={i}>
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <PaginationItem
              className={classnames("", {
                selected: pageNumber === currentPage,
              })}
              key={i}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </PaginationItem>
          );
        })}
        {/*  Right Navigation arrow */}
        {currentPage === lastPage ? (
          <div></div>
        ) : (
          <PaginationItem onClick={onNext}>
            <div className={classnames("arrow right")} />
          </PaginationItem>
        )}
      </PaginationItemList>
    </PaginationContainer>
  );
};

export default PetSitterPagination;
