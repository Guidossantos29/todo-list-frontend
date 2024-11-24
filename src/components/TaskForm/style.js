import styled from "styled-components";



export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    max-width: 400px;
    gap: 20px 0;
    padding: 20px 50px 50px 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  input, button {
    
    padding: 10px;
    border-radius: 5px;
    width: 65%;

  }
  
  

  div {
    
    display: flex;
    justify-content: space-between;
    align-items: center;
   
  }

  button {
    background: #0077b6;
    color: white;
    cursor: pointer;
    border: none;

    &:hover {
      background: #005f8b;
    }
  }


`
