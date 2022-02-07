import CollectionOverview from "../../components/collection-overview/collection-overview.component"
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

// const ShopPage  = () => {
//   let location = useLocation()
//   const params = useParams()
//   if (location.pathname === "/shop" || location.pathname ==="/shop/") {
//        return <CollectionOverview />
//     } else {
//       return  <CollectionPAge  path={params["*"]} />
//     }
// }
  
const ShopPage  = () => {
  let location = useLocation()
  const params = useParams()
  if (location.pathname === "/shop" || location.pathname ==="/shop/") {
       return <CollectionOverview />
    } else {
      return  <CollectionPage  path={params["*"]} />
    }
}
  



  export default ShopPage