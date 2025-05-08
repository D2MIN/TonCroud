import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import style from './App.module.scss';
import { Capsule } from '../Widgets/Capsule/Cupsule.tsx';
import HomePage from '../Pages/HomePage/HomePage.jsx';
import AllProjects from '../Pages/AllProjects/AllProjects.tsx';
import CreateProject from '../Pages/CreateProject/CreateProject.jsx';
import { Provider } from 'react-redux';
import { store } from '../Store/store.js';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import ProjectInfo from '../Pages/ProjectInfo/UI/ProjectInfo.tsx';
import { ErrorPage } from './ErrorPage/ErrorPage.jsx';
import { CreateContractButton } from '../Widgets/CreateProject/SectionFour/UI/CreateContractButton.jsx';
import Statistic from '../Pages/Statistic/UI/Statistic.tsx';

const MyRouter = createBrowserRouter([
  {
    path : '/',
    element : <Capsule/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : '/',
        element : <HomePage/>
      },
      {
        path : 'projects',
        element : <AllProjects/>,
      },
      {
        path : 'createproject',
        element : <CreateProject/>
      },
      {
        path : 'project/:id',
        element : <ProjectInfo/>
      },
      {
        path : 'statistic',
        element : <Statistic />
      },
    ]
  }
])

function App() {
  return (
    <TonConnectUIProvider 
      manifestUrl='https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json'
      onError={(error) => console.error('TonConnect error in APP')}
    >
      <div className={style.app_component}>
        <Provider store={store}>
          <RouterProvider router={MyRouter}/>
        </Provider>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
