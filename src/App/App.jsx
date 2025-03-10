import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import style from './App.module.scss';
import { Capsule } from '../Widgets/Capsule/Cupsule.tsx';
import HomePage from '../Pages/HomePage/HomePage.jsx';
import AllProjects from '../Pages/AllProjects/AllProjects.tsx';
import CreateProject from '../Pages/CreateProject/CreateProject.jsx';
import { Provider } from 'react-redux';
import { store } from '../Store/store.js';

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
      <Provider store={store}>
        <RouterProvider router={MyRouter}/>
      </Provider>
    </div>
  );
}

export default App;
