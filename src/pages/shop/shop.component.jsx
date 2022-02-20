import React, { useEffect } from 'react'

import CollectionOverview from "../../components/collection-overview/collection-overview.component"
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils"
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

const ShopPage  = ({updateCollection}) => {
  let location = useLocation()
  const params = useParams()
  const unsubscribeFromSnapshot = null

    useEffect(() => {
      const collectionRef = firestore.collection("collections")
      collectionRef.onSnapshot(async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        updateCollection(collectionsMap)
      })
    }, [])
    
  if (location.pathname === "/shop" || location.pathname ==="/shop/") {
       return <CollectionOverview />
    } else {
      return  <CollectionPage  path={params["*"]} />
    }
}
  

// class ShopPage extends React.Component{

//   unsubscribeFromSnapshot =null

//   componentDidMount() {
//     const collectionRef = firestore.collection("collections")
//     collectionRef.onSnapshot(async snapshot => {
//       convertCollectionsSnapshotToMap(snapshot)
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//       this.state.updateCollection(collectionsMap)
//     })
//   }

//   render() {
//     return <CollectionOverview />
//   }
// }


const mapDispatchToProps = dispatch => ({
  updateCollection: collections =>  dispatch(updateCollections(collections)) 
  })
export default connect(null, mapDispatchToProps)(ShopPage)
