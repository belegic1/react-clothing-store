import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import "./collection-preview.styles.scss"

const CollectionPreview = ({ title, items }) => {
  console.log("this is items", items);

  return <div className='collection-preview'>
    <h1 className='title'>{items.title}</h1>
    <div className="preview">
    {items &&  items.items.filter((item,idx) => idx < 4).map((item) => {
        return <CollectionItem key={item.id} item={item}  />
      })}
    </div>
  </div>;
};

export default CollectionPreview;
