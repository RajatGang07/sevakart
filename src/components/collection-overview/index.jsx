import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview';
import { selectCollectionsForPreview } from '../../redux/shop/selector';
import "./index.scss";



const CollectionOverview = ({ collections }) => {
    console.log(collections);
    return (
        <div className='collection-overview'>
            {
                collections.map(({ id, ...otherCollection }) => (
                    <CollectionPreview key={id} {...otherCollection} />
                ))
            }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
