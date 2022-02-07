const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            imageUrl: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            imageUrl:"https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80",
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            imageUrl: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            imageUrl: 'https://images.unsplash.com/photo-1615233500570-c5d7576b4262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            imageUrl: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}


export const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}