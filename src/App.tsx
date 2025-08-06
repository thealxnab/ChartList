import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from "./pages/layout";
import Settings from "./pages/settings/settings";
import ViewMode from "./pages/view-mode/view-mode";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/view-mode" element={<ViewMode/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Route>
    </Routes>
  );
}

export default App;
