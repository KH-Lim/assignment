import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Layout = React.lazy(() => import("./components/Layout"));

const ListPage = React.lazy(() => import("./pages/List"));
const HomePage = React.lazy(() => import("./pages/Home"));
const AboutPage = React.lazy(() => import("./pages/About"));
const PhotoPage = React.lazy(() => import("./pages/Photo"));
const TopicsPage = React.lazy(() => import("./pages/Topics"));
const SwiperPage = React.lazy(() => import("./pages/Swiper"));
const LoginPage = React.lazy(() => import("./pages/Login"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>로딩중</div>}>
        <Layout>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/topics">
              <TopicsPage />
            </Route>
            <Route path="/list">
              <ListPage />
            </Route>
            <Route path="/photo">
              <PhotoPage />
            </Route>
            <Route path="/swiper">
              <SwiperPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
}
