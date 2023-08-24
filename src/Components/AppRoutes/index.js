import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import User from "../../Pages/User";
import Roles from "../../Pages/Roles";
import Categery from "../../Pages/Categery";
import SubCategery from "../../Pages/Subcategery";
import Retailer from "../../Pages/Retailer";
import OfferZone from "../../Pages/Offerzone";
import ThirdParty from "../../Pages/Thirdparty";
import Updateuser from "../../Pages/User/Updateuser";
import Updaterole from "../../Pages/Roles/Updaterole";
import Updatesubcategery from "../../Pages/Subcategery/Updatesubcategery";
import Updatecategery from "../../Pages/Categery/Updatecategery";
// import Updatecategery from "../../Pages/Categery/Updatecategery";
// import Login from "../../Pages/Login/Login";
// import Login from "../../Pages/Login/Login";

function AppRoutes() {
  return (
    <Routes>
     
     <Route path="/" element={<Dashboard />}></Route>
     <Route path="/user" element={<User/>}></Route>
     <Route path="/Updateuser" element={<Updateuser/>}></Route>
     <Route path="/role" element={<Roles/>}></Route>
     <Route path="/updaterole" element={<Updaterole/>}></Route>
     <Route path="/categery" element={<Categery/>}></Route>
     <Route path="/Updatecategery" element={<Updatecategery/>}></Route>
     <Route path="/subcategery" element={<SubCategery/>}></Route>
     <Route path="/Updatesubcategery" element={<Updatesubcategery/>}></Route>
     <Route path="/retailer" element={<Retailer/>}></Route>
     <Route path="/offerzone" element={<OfferZone/>}></Route>
     <Route path="/thirdparty" element={<ThirdParty/>}></Route>
      {/* <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route> */}
      <Route path="/customers" element={<Customers />}></Route>
    
      {/* <Route path="/" element={<Login/>}></Route> */}

    </Routes>
  );
}
export default AppRoutes;