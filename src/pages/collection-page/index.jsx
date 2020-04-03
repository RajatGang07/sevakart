import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/selector';
import CollectionItem from '../../components/collection-item';
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './index.styles';
  
  const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
  };
  
  const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });
  
  export default connect(mapStateToProps)(CollectionPage);