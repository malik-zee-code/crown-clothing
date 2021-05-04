import React from "react";
import './collection-overview.component.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import Collectionpreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => 
   (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Collectionpreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );


const mapStatetoProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStatetoProps)(CollectionOverview);
