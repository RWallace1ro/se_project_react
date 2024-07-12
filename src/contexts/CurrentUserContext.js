import React from "react";

const CurrengtUserContext = React.createContext();

<CurrentUserContext.Provider value={currentUser}>
  <div className="page"></div>
</CurrentUserContext.Provider>;

export default CurrengtUserContext;
