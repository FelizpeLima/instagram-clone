import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import New from "./pages/New";

function Routes() {
  return (
    <switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={New} />
    </switch>
  );
}

export default Routes;
