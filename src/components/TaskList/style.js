import styled from "styled-components";

export const ListContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    margin: 10px;
    gap: 10px;
  }
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
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    color: #555;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  span {
    font-weight: bold;
    color: #007bff;
    font-size: 16px;
    

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
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
    font-size: 14px;

    &.edit {
      background-color: #007bff;
    }

    &.delete {
      background-color: #dc3545;
    }

    &:hover {
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      padding: 6px 10px;
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 5px;
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
    font-size: 14px;

    @media (max-width: 768px) {
      padding: 6px;
      font-size: 12px;
    }
  }

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    @media (max-width: 768px) {
      padding: 6px 10px;
      font-size: 12px;
    }
  }

  button:first-of-type {
    background-color: #4caf50;
    color: white;
  }

  button:last-of-type {
    background-color: #f44336;
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;
