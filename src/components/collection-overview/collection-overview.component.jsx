import React from "react";
import './collection-overview.component.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";
import Collectionpreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Collectionpreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStatetoProps)(CollectionOverview);
