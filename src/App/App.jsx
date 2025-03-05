import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import style from './App.module.scss';
import { Capsule } from '../Widgets/Capsule/Cupsule.tsx';
import HomePage from '../Pages/HomePage/HomePage.jsx';
import AllProjects from '../Pages/AllProjects/AllProjects.tsx';
import CreateProject from '../Pages/CreateProject/CreateProject.jsx';

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
      },
      {
        path : 'createproject',
        element : <CreateProject/>
      }
    ]
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
