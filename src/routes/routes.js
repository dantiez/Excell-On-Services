import config from "../config";
import DashBoard from '../pages/DashBoard'
import Payment from "../pages/Payment";
const publicRoutes = [
  {
    path: config.routes.dashboard, component: DashBoard,
  },
  {
    path: config.routes.payment, component: Payment,
  },
];

const privateRoutes = []
export { publicRoutes, privateRoutes }