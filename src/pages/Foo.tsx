// Foo.tsx

import { Link } from "react-router-dom";

const Foo = () => {
  return(
    <div>
      <h1>This is the Foo Page.</h1>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default Foo;
