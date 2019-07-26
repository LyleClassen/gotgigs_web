import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/inputs/Button';

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
    <Link to="/page2">Go to Page 2</Link>
    <StyledButtonContainer>
      <Button>Default</Button>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button outlined>Outlined</Button>
      <Button outlined rounded>
        Rounded
      </Button>
    </StyledButtonContainer>
  </div>
);

export default Page1;
