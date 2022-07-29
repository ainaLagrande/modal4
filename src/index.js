import React from 'react';
import styled from 'styled-components'

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ModalDiv = styled.div`
  width: 400px;
  height: 250px;
  background-color: white;
  z-index: 9999;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ModalButton = styled.button`
  color: black;
  background-color: white;
  padding: 5px 7px;
  border:none;
`

export default function Modal({ setOpen, message, buttonText}) {
  return (
    <Background onClick={() => setOpen(false)}>
      <Center>
        <ModalDiv>
          <p>{message}</p>
            <ModalButton onClick={(closeModal) => setOpen(false)}>
            {buttonText}
            </ModalButton>
        </ModalDiv>
      </Center>
    </Background>
  );
}

