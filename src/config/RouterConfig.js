
import { createBrowserRouter} from 'react-router-dom'
import AppLayout from '../App';
import About from '../components/About';
import Contact from '../components/Contact';
import Error from '../components/Error';
import Body from '../components/Body';
import Offers from '../components/Offers';
import RestaurantCollection from '../components/RestaurantCollection';
import RestaurantMenu from '../components/RestaurantMenu';
import {lazy} from "react"
import ProductType from '../components/Instamart/ProductType';
import ProductShowecase from '../components/Instamart/ProductShowecase';
import CartStore from '../components/CartStore';
const Store = lazy(()=> import("../components/Instamart/Store"))
const Routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [{
            path: '/',
            element: <Body/>,

        },
            {
                path: '/contact',
                element: <Contact />,

            }, {
                path: "/about",
                element: <About />,

            },
            {
                path: "/offers",
                element: <Offers />,

            }, {
                path: "/collection/:id",
                element: <RestaurantCollection />,

            }, {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>,

            }, {
                path: "/Cart",
                element: <CartStore />,

            }
        ]
    },
    {
        path: "/instamart",
        element: <Store />,
    },
    {
        path: "/instamart/:productType",
        element: <ProductType />,
    },
    {
        path: "/instamart/:productType",
        element: <ProductType />,
    },{
        path:"/instamart/item/:productId",
        element:<ProductShowecase />
    }
    
])

export default Routes;
