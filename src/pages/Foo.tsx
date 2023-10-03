// Foo.tsx

import { Link } from "react-router-dom";
import { styled } from '@linaria/react'

const Foo = () => {
  return(
    <StyledFoo>
      <h1>This is the Foo Page.</h1>
      <Link to="/">Back to Home Page</Link>
    </StyledFoo>
  );
};

const StyledFoo = styled.div`
  color: red;
`

export default Foo;
