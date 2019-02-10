/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Wrap = styled.h1`
  font-size: 5rem;
  color: blue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto', cursive;
  font-weight: 100;
  letter-spacing: 7px;
`;

export default function App() {
  return (
    <>
      <Wrap
        css={css`
          padding: 1%;
        `}
      >
        Sanity Test - its alive!
      </Wrap>
    </>
  );
}
