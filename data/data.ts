export const items_data = [
    {
       
        type: "pizza",
        items: [
            {
                id: 1,
                item_name: "Margherita",
                item_image: "https://firebasestorage.googleapis.com/v0/b/pizza-16763.appspot.com/o/p7.png?alt=media&token=7819726d-a666-448a-877f-2f35bdc18942",
                category: "pizza",
                description: "variant of neapolitan pizza, Features tomatoes, sliced mozzarella, basil, and extra virgin olive oil.",
                ingredients: "Mozzarella cheese / Tomatoes / Basil/ olive oil",
                price: 6.00,
                
            },
            {
                id: 12,
                item_name: "Neopolitan",
                item_image: "https://firebasestorage.googleapis.com/v0/b/pizza-16763.appspot.com/o/p2.png?alt=media&token=b83a43fc-b722-4746-a137-4d308452f379",
                category: "pizza",
                description: "thin crust and basic, but very fresh topping. This makes for a delicious, harmonized taste that melts on the palette without various different flavors competing with one another",
                ingredients: "Mozzarella cheese / Tomatoes / Basil",
                price: 6.00,
                
            },
            {
                id: 3,
                item_name: "Chicago",
                item_image: "https://firebasestorage.googleapis.com/v0/b/pizza-16763.appspot.com/o/p4.png?alt=media&token=41df67c7-f665-47c6-97a7-a61ff0b4b7a7",
                category: "pizza",
                description: "baked in a pan, which creates a high crust and plenty of space for lots of toppings. Due  to its relatively long cooking times, the toppings are placed in reverse order on a Chicago pizza.",
                ingredients: "onions / mushrooms / cheese / bell peppers / tomatoes / Meat",
                price: 6.00,
               
            },
            {
                id: 6,
                item_name: "New york-style",
                item_image: "https://firebasestorage.googleapis.com/v0/b/pizza-16763.appspot.com/o/p-6.png?alt=media&token=dbf9aa91-3a17-45ea-aa6c-105d4319f93f",
                category: "pizza",
                description: "Boasting a thin, foldable base with a large, thick crust, feature more cheese, and as they are cooked for slightly longer on a lower heat, they are made with mozzarella with a lower moisture content.  ",
                ingredients: "Mozzarella cheese / tomatoes",
                price: 6.00,
               
            },
            {
                id: 7,
                item_name: "Sicilian",
                item_image: "https://firebasestorage.googleapis.com/v0/b/pizza-16763.appspot.com/o/p1.png?alt=media&token=2f50e51a-1f97-4ceb-a0e9-ed0145835d04",
                category: "pizza",
                description: "typically rectangular with a thick crust of over one inch. As its name implies, it originated in Sicily, Italy, and was first sold in Italian bakeries where it is known as sfincione. You can think of today’s Sicilian pizza as being a little like a focaccia bread smothered with various toppings.",
                ingredients: "onion / herbs / strong cheese / anchovies / tomatoes",
                price: 6.00,
               
            },
            {
                id: 8,
                item_name: "Greek",
                item_image: "https://firebasestorage.googleapis.com/v0/b/pizza-16763.appspot.com/o/p8.png?alt=media&token=40ffec29-5f4c-4a1f-a4db-d766b084abee",
                category: "pizza",
                description: "Proofed and baked in shallow pans, unlike regular pizzas, the dough is not stretched. While Greek-style pizzas are not very thin, they are also not as thick as Chicago or Detroit-style pizzas. They tend to predominantly feature popular ingredients from Greek cuisine.",
                ingredients: "red peppers / olives / feta cheese / Sun-dried tomatoes",
                price: 6.00,
               
            },
            {
                id: 9,
                item_name: "detroit",
                item_image: "https://firebasestorage.googleapis.com/v0/b/pizza-16763.appspot.com/o/p3.png?alt=media&token=e9ad61ed-d34a-4d38-bb67-be4ec8c21fe1",
                category: "pizza",
                description: "rectangular in shape with a thick, chewy crust. The crust is served crispy on the bottom, often brushed with butter before baking.",
                ingredients: "onion / mushrom / cheese / fish / tomato",
                price: 6.00,
               
            },
            {
                id: 10,
                item_name: "louin",
                item_image: "https://firebasestorage.googleapis.com/v0/b/pizza-16763.appspot.com/o/p5.png?alt=media&token=733ec906-bf8b-44ab-b8a1-e4a8249307f4",
                category: "pizza",
                description: "easily distinguishable by their wafer-thin crust. The crust is made without yeast, and as it is extremely brittle, this style of pizza is cut into rectangular slices rather than wedges. ",
                ingredients: "oregano  / provel cheese / meat / tomato",
                price: 6.00,
               
            }
        ]
    },
    {
      
        type: "burger",
        items: []
    },
    {
        
        type: "donut",
        items: []
    },
    {
        
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
                    {name: "bell pepper", price: 0.3, price_per: "1g", id: 5, quantity: 0, img: "/images/fake data/bell_pepper.jpg"},
                    {name: "onion", price: 0.3, price_per: "1g", id: 25, quantity: 0, img: "/images/fake data/onion.jpg"},
                    {name: "tomato", price: 0.4, price_per: "1g",  id: 6, quantity: 0, img: "/images/fake data/tomato.jpg"},
                    {name: "mushroum", price: 0.3, price_per: "1 slice",  id: 7, quantity: 0, img: "/images/fake data/mushroom.jpg"}
                ]
            },
            {
                ingredient_name: "Meat",
                ingredients_collection: [
                    {name: "Beaf", price: 2, price_per: "1g",  id: 15, quantity: 0, img: "/images/fake data/beaf.jpg"},
                    {name: "Chiken", price: 1.4, price_per: "1g",  id: 2, quantity: 0, img: "/images/fake data/chiken.jpg"},
                    {name: "Shrimp", price: 2.4, price_per: "1g",  id: 69, quantity: 0, img: "/images/fake data/shrimp.jpg"},
                ]
            },
            {
                ingredient_name: "Dough",
                ingredients_collection: [
                    {name: "white Dough", price: 2, price_per: "1 serve",  id: 45, quantity: 0, img: "/images/fake data/white.jpg"},
                    {name: "brown Dough", price: 1.4, price_per: "1g",  id: 20, quantity: 0, img: "/images/fake data/brown.jpg"},
                    {name: "corn Dough", price: 1.4, price_per: "1g",  id: 22, quantity: 0, img: "/images/fake data/corn.jpg"},
                    
                ]
            },
            {
                ingredient_name: "Sauce",
                ingredients_collection: [
                    {name: "Pesto", price: 2, price_per: "1 serve",  id: 45, quantity: 0, img: "/images/fake data/pesto.jpg"},
                    {name: "White Garlic Sauce", price: 1.4, price_per: "1g",  id: 20, quantity: 0, img: "/images/fake data/garlic sauce.jpg"},
                    {name: "Tomato Sauce", price: 1.4, price_per: "1g",  id: 22, quantity: 0, img: "/images/fake data/tomato sauce.jpg"},
                    {name: "Bechamel", price: 1.4, price_per: "1g",  id: 62, quantity: 0, img: "/images/fake data/bechamel.jpg"},
                    
                ]
            },
            {
                ingredient_name: "Cheese",
                ingredients_collection: [
                    {name: "cheddar", price: 2, price_per: "1 serve",  id: 45, quantity: 0, img: "/images/fake data/chedar.jpg"},
                    {name: "mozzarella", price: 5.4, price_per: "1g",  id: 20, quantity: 0, img: "/images/fake data/mozzarella.jpeg"},
                    {name: "feta", price: 3.4, price_per: "1g",  id: 28, quantity: 0, img: "/images/fake data/feta.jpg"},
                    {name: "emmental", price: 6.4, price_per: "1g",  id: 70, quantity: 0, img: "/images/fake data/emmental.jpg"},
                    
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
            },
            {
                ingredient_name: "Bun",
                ingredients_collection: [
                    {name: "white Bun", price: 2, price_per: "1 serve",  id: 45, quantity: 0, img: "/images/fake data/white.jpg"},
                    {name: "brown Bun", price: 1.4, price_per: "1g",  id: 20, quantity: 0, img: "/images/fake data/brown.jpg"},
                    {name: "corn Bun", price: 1.4, price_per: "1g",  id: 22, quantity: 0, img: "/images/fake data/corn.jpg"},
                    
                ]
            },
            {
                ingredient_name: "Sauce",
                ingredients_collection: [
                    {name: "Mayonese", price: 2, price_per: "1 serve",  id: 45, quantity: 0, img: "/images/fake data/mayonese.jpg"},
                    {name: "Ketshup", price: 1.4, price_per: "1g",  id: 20, quantity: 0, img: "/images/fake data/burger sauce.jpg"},
                    {name: "Burger Sauce", price: 1.4, price_per: "1g",  id: 22, quantity: 0, img: "/images/fake data/ketshup.jpg"},
                   
                    
                ]
            },
            {
                ingredient_name: "Cheese",
                ingredients_collection: [
                    {name: "cheddar", price: 2, price_per: "1 serve",  id: 45, quantity: 0, img: "/images/fake data/chedar.jpg"},
                    {name: "feta", price: 3.4, price_per: "1g",  id: 28, quantity: 0, img: "/images/fake data/feta.jpg"},
                    {name: "emmental", price: 6.4, price_per: "1g",  id: 70, quantity: 0, img: "/images/fake data/emmental.jpg"},
                    
                ]
            }
        ]
    }
]


