import styled from "styled-components";

export const PaginationContainer = styled.div`
  &&& {
    display: flex;
    justify-content: center;
  }
`;

export const PaginationItemList = styled.ul`
  &&& {
    display: flex;
    list-style-type: none;
    align-items: center;
    margin: 1rem 0;
  }
`;

export const PaginationItem = styled.li`
  &&& {
    height: 1.7rem;
    width: 1.7rem;
    text-align: center;
    margin: 4px 4px;
    box-sizing: border-box;
    border-radius: 50%;
    &.dots:hover {
      background-color: transparent;
      cursor: default;
    }
    &:hover {
      background-color: lightcyan;
      cursor: pointer;
    }
    &.selected {
      background-color: #4299e1;
    }

    .arrow {
      position: relative;
      top: -2px;
      content: "";
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      border-right: 0.12rem solid rgba(0, 0, 0, 1);
      border-top: 0.12rem solid rgba(0, 0, 0, 1);

      &.left {
        transform: rotate(-135deg) translate(-50%);
      }
      &.right {
        transform: rotate(45deg);
      }
    }
  }
`;
