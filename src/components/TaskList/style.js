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

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;


  }

  button:first-of-type {
    background-color: #4caf50;
    color: white;
  }

  button:last-of-type {
    background-color: #f44336;
    color: white;
  }
`;