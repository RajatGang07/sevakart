import React from 'react';
import CollectionOverview from '../../components/collection-overview';

import {Route} from 'react-router-dom';
import CollectionPage from '../collection-page';


const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route  path={`${match.path}/:categoryId`} component={CollectionPage} />
           
        </div>
    )
}

export default ShopPage;
