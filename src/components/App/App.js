import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import {css} from "styled-components";

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <AppWrapper>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </AppWrapper>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

const AppWrapper = styled.div(() => css`
  isolation: isolate;
`)

export default App;
