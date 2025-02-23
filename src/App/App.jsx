import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import style from './App.module.scss';
import { Capsule } from '../Widgets/Capsule/Cupsule.tsx';
import HomePage from '../Pages/HomePage/HomePage.jsx';
import AllProjects from '../Pages/AllProjects/AllProjects.tsx';

const MyRouter = createBrowserRouter([
  {
    path : '/',
    element : <Capsule/>,
    children : [
      {
        path : '/',
        element : <HomePage/>
      },
      {
        path : 'projects',
        element : <AllProjects/>
      }
    ]
  },
  {
    path : 'projects',
    element : <div>Project</div>
  }
])

function App() {
  return (
    <div className={style.app_component}>
      <RouterProvider router={MyRouter}/>
    </div>
  );
}

export default App;
