import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button';

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
    <Link to="/page2">Go to Page 2</Link>
    <Button color="primary">Primary</Button>
    <Button variant="outlined" color="secondary">
      Secondary
    </Button>
  </div>
);

export default Page1;
