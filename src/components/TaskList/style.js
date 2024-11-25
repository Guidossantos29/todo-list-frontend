import styled from "styled-components";


export const ListContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;

  strong {
    font-size: 18px;
  }

  p {
    color: #555;
  }

  span {
    font-weight: bold;
    color: #007bff;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;

    &.edit {
      background-color: #007bff;
    }

    &.delete {
      background-color: #dc3545;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;