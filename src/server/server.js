import { createServer, Model } from "miragejs";


createServer({
    models: {
        vans: Model,
    },

    seeds(server){
        server.create("van", {
            id: 1, 
            name: 'Modest Explorer', 
            description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
            price: 60,
            type: 'Simple',
            image: '/images/vans/1.jpg'
        });
        server.create("van",
        {
            id: 2, 
            name: 'Beach Bum', 
            description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
            price: 80,
            type: 'Rugged',
            image: '/images/vans/2.jpg'
        });
        server.create("van",
        {
            id: 3, 
            name: 'Reliable Red', 
            description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
            price: 100,
            type: 'Luxury',
            image: '/images/vans/3.jpg'
        });
        server.create("van",
        {
            id: 4, 
            name: 'Dreamfinder', 
            description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
            price: 65,
            type: 'Simple',
            image: '/images/vans/4.jpg'
        });
        server.create("van",
        {
            id: 5, 
            name: 'The Cruiser', 
            description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
            price: 120,
            type: 'Luxury',
            image: '/images/vans/5.jpg'
        });
        server.create("van",
        {
            id: 6, 
            name: 'Green Wonder', 
            description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
            price: 70,
            type: 'Rugged',
            image: '/images/vans/6.jpg'
        });
    },

    routes() {
        this.namespace = 'api';
        this.logging = false;
        this.get("/vans", (schema, request) => {
            return schema.vans.all();
        })
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
    
})