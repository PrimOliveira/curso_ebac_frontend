import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Cardapio from '../pages/cardapio';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/cardapio/:restauranteid',
        element: <Cardapio />
    } 
]);

export default router;

