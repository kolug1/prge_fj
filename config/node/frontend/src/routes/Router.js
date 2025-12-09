import {createBrowserRouter} from "react-router";
import {Home, About, Map, ListOfItems, Services} from './LazyImports';

const routes = createBrowserRouter(
    [
        {
            path: '/prge_fj/',
            element: <Home/>
        },
        {
            path: '/prge_fj/about',
            element: <About/>
        },
        {
            path: '/prge_fj/map',
            element: <Map/>
        },
        {
            path: '/prge_fj/services',
            element: <Services/>
        },
        {
            path: '/prge_fj/list',
            element: <ListOfItems/>
        },
        {
            path: '*',
            element: <div>404</div>
        }

    ]
)

export default routes;