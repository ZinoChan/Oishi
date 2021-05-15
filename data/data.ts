export const items_data = [
    {
        id: 1,
        item_name: "Margarita",
        item_image: "/images/piiza.png",
        category_id: "pizza",
        description: "delicieus classical pizza",
        ingredients: "onion / mushrom / cheese / fish / tomato",
        price: 6.00,
        comments: [
            {
                commentId: 22, 
                user_id: 13, 
                item_id: 1, 
                content: "realy delicieus pizza"
            }
        ]
    }
]


export const makeNew = [
    {
        type: "pizza",
        ingredients: [
            {
                ingredient_name: "veggies",
                ingredients_collection: [
                    {name: "onion", price: 0.3, price_per: "1g", id: 5, quantity: 0, img: "/images/fake data/onion.jpg"},
                    {name: "tomato", price: 0.4, price_per: "1g",  id: 6, quantity: 0, img: "/images/fake data/tomato.jpg"},
                    {name: "mushroum", price: 0.3, price_per: "1 slice",  id: 7, quantity: 0, img: "/images/fake data/mushroom.jpg"}
                ]
            },
            {
                ingredient_name: "Meat",
                ingredients_collection: [
                    {name: "Beaf", price: 2, price_per: "1g",  id: 15, quantity: 0, img: "/images/fake data/beaf.jpg"},
                    {name: "Chiken", price: 1.4, price_per: "1g",  id: 2, quantity: 0, img: "/images/fake data/chiken.jpg"},
                   
                ]
            }
        ]
    },
    {
        type: "burger",
        ingredients: [
            {
                ingredient_name: "veggies",
                ingredients_collection: [
                    {name: "onion", price: 0.3, price_per: "1g",  id: 15 , quantity: 0, img: "/images/fake data/onion.jpg"},
                    {name: "tomato", price: 0.4, price_per: "1g",  id: 30, quantity: 0, img: "/images/fake data/tomato.jpg"},
                    {name: "cucomber", price: 0.3, price_per: "1 slice",  id: 80, quantity: 0, img: "/images/fake data/cucumber.jpg"},
                    {name: "letus", price: 0.3, price_per: "1 slice",  id: 90, quantity: 0, img: "/images/fake data/letus.jpg"}
                ]
            },
            {
                ingredient_name: "Meat",
                ingredients_collection: [
                    {name: "Beaf", price: 2, price_per: "1g",  id: 88, quantity: 0, img: "/images/fake data/beaf.jpg"},
                    {name: "Chiken", price: 1.4, price_per: "1g",  id: 82, quantity: 0, img: "/images/fake data/chiken.jpg"},
                    {name: "Fish", price: 1.5, price_per: "1 slice",id: 23, quantity: 0, img: "/images/fake data/fried fish.jpeg"}
                ]
            }
        ]
    }
]