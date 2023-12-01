import { routingList } from './routing.list';
import { Route, Routes } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
      {routingList.map((route) => (
        <Route
          path={route.path}
          element={route.element}
          key={route.path}
        ></Route>
      ))}
    </Routes>
  );
};

export default Routing;
