import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "watch",
          element: <WatchPage />
        }
      ]
    }
  ]);
  return (
    <Provider store={appStore}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
