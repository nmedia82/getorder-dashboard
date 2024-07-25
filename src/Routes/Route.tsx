import SamplePage from "../Pages/Pages/SamplePage";
import { ProductPage } from "../Pages/Products";
import Default from "../Pages/Dashboard/Default";
import { POSHome } from "../Pages/POS";
export const routes = [
  {
    path: `${process.env.PUBLIC_URL}/dashboard`,
    element: <Default />,
  },
  {
    path: `${process.env.PUBLIC_URL}/sample_page`,
    element: <SamplePage />,
  },
  {
    path: `${process.env.PUBLIC_URL}/products`,
    element: <ProductPage />,
  },
  {
    path: `${process.env.PUBLIC_URL}/pos`,
    element: <POSHome />,
  },
];
