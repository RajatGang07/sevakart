import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/selectors';
import "./index.scss";

const Directory = ({sections}) => {
  console.log(sections, "sections")
  return(
    <div className="directory-menu">
        {
            sections.map(({id, ...otheSectionProps}) => (
                <MenuItem key={id} {...otheSectionProps} />
            ))
        }
    </div>
)
}


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
