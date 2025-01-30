import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import {Samples} from "./components/Samples";
import {Resume} from "./components/Resume";
import {Github} from "./components/Github";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    index: true,
    path: '/samples',
    element: <Samples />
  },
  {
    index: true,
    path: '/resume',
    element: <Resume />
  },
  {
    index: true,
    path: '/github',
    element: <Github />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
];

export default AppRoutes;
