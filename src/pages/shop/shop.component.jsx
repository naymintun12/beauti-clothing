import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import ShopData from "./shop.data";

class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collections: ShopData
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, title, items}) => {
                        return <CollectionPreview title={title} items={items} key={id} />
                    })
                }
            </div>
        )
    }
}

export default ShopPage;