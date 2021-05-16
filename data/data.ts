export const items_data = [
    {
        id: 32,
        type: "pizza",
        items: [
            {
                id: 1,
                item_name: "Margherita",
                item_image: "/images/pizza 1.png",
                category_id: "pizza",
                description: "variant of neapolitan pizza, Features tomatoes, sliced mozzarella, basil, and extra virgin olive oil.",
                ingredients: "Mozzarella cheese / Tomatoes / Basil/ olive oil",
                price: 6.00,
                comments: [
                    {
                        commentId: 22, 
                        user_id: 13, 
                        item_id: 1, 
                        content: "realy delicieus pizza"
                    }
                ]
            },
            {
                id: 12,
                item_name: "Neopolitan",
                item_image: "/images/pizza 1.png",
                category_id: "pizza",
                description: "thin crust and basic, but very fresh topping. This makes for a delicious, harmonized taste that melts on the palette without various different flavors competing with one another",
                ingredients: "Mozzarella cheese / Tomatoes / Basil",
                price: 6.00,
                comments: [
                    {
                        commentId: 22, 
                        user_id: 13, 
                        item_id: 1, 
                        content: "realy delicieus pizza"
                    }
                ]
            },
            {
                id: 3,
                item_name: "Chicago",
                item_image: "/images/pizza 1.png",
                category_id: "pizza",
                description: "baked in a pan, which creates a high crust and plenty of space for lots of toppings. Due  to its relatively long cooking times, the toppings are placed in reverse order on a Chicago pizza.",
                ingredients: "onions / mushrooms / cheese / bell peppers / tomatoes / Meat",
                price: 6.00,
                comments: [
                    {
                        commentId: 22, 
                        user_id: 13, 
                        item_id: 1, 
                        content: "realy delicieus pizza"
                    }
                ]
            },
            {
                id: 6,
                item_name: "New york-style",
                item_image: "/images/pizza 1.png",
                category_id: "pizza",
                description: "Boasting a thin, foldable base with a large, thick crust, feature more cheese, and as they are cooked for slightly longer on a lower heat, they are made with mozzarella with a lower moisture content.  ",
                ingredients: "Mozzarella cheese / tomatoes",
                price: 6.00,
                comments: [
                    {
                        commentId: 22, 
                        user_id: 13, 
                        item_id: 1, 
                        content: "realy delicieus pizza"
                    }
                ]
            },
            {
                id: 7,
                item_name: "Sicilian",
                item_image: "/images/pizza 1.png",
                category_id: "pizza",
                description: "typically rectangular with a thick crust of over one inch. As its name implies, it originated in Sicily, Italy, and was first sold in Italian bakeries where it is known as sfincione. You can think of today’s Sicilian pizza as being a little like a focaccia bread smothered with various toppings.",
                ingredients: "onion / herbs / strong cheese / anchovies / tomatoes",
                price: 6.00,
                comments: [
                    {
                        commentId: 22, 
                        user_id: 13, 
                        item_id: 1, 
                        content: "realy delicieus pizza"
                    }
                ]
            },
            {
                id: 8,
                item_name: "Greek",
                item_image: "/images/pizza 1.png",
                category_id: "pizza",
                description: "Proofed and baked in shallow pans, unlike regular pizzas, the dough is not stretched. While Greek-style pizzas are not very thin, they are also not as thick as Chicago or Detroit-style pizzas. They tend to predominantly feature popular ingredients from Greek cuisine.",
                ingredients: "red peppers / olives / feta cheese / Sun-dried tomatoes",
                price: 6.00,
                comments: [
                    {
                        commentId: 22, 
                        user_id: 13, 
                        item_id: 1, 
                        content: "realy delicieus pizza"
                    }
                ]
            },
            {
                id: 9,
                item_name: "detroit",
                item_image: "/images/pizza 1.png",
                category_id: "pizza",
                description: "rectangular in shape with a thick, chewy crust. The crust is served crispy on the bottom, often brushed with butter before baking.",
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
            },
            {
                id: 10,
                item_name: "louin",
                item_image: "/images/pizza 1.png",
                category_id: "pizza",
                description: "easily distinguishable by their wafer-thin crust. The crust is made without yeast, and as it is extremely brittle, this style of pizza is cut into rectangular slices rather than wedges. ",
                ingredients: "oregano  / provel cheese / meat / tomato",
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
    },
    {
        id: 65,
        type: "burger",
        items: []
    },
    {
        id: 78,
        type: "donut",
        items: []
    },
    {
        id: 90,
        type: "drink",
        items: []
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