import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";
import {
  firestore,
  convertCollectionSnapshottoMap,
} from "../../components/firebase/firebase.utils.js";
class ShopPage extends React.Component {
  UnsubscribefromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.UnsubscribefromSnapshot = collectionRef.onSnapshot((snapShot) => {
      const collectionsMap = convertCollectionSnapshottoMap(snapShot);

      updateCollections(collectionsMap);
      console.log(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchtoProps)(ShopPage);
