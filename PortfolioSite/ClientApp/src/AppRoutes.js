import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import {Samples} from "./components/Samples";
import {Resume} from "./components/Resume";
import {Github} from "./components/Github";
import Card from "./components/Card";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/samples',
    element: <Samples />
  },
  {
    path: '/samples/:sampleId',
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
  {
    path: '/card',
    element: <Card />
  }
];

export default AppRoutes;
