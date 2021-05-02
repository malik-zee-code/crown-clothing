import React from "react";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import { connect } from "react-redux";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapStatetoProps)(Directory);
