import React, { useEffect } from "react";
import "assets/less/main.less";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import appRoutes from "routes/app";
import Layout from "components/Layout/index";
import { setTeamList } from "store/slices/teams";
import { useDispatch } from "react-redux";
import teamsMockData from 'mockData/teams.json';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTeamList(teamsMockData))
  }, [dispatch])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {
            appRoutes.map(route => (
              <Route key={route.name} path={route.path} element={<route.component />} />
            ))
          }
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
