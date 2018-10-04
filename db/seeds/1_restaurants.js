exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("restaurants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("restaurants").insert([
        {
          name: "Cavo Bar and Kitchen",
          Yelp_image_URL:
            "https://s3-media3.fl.yelpcdn.com/bphoto/pWeOcVZl6UHGMbE8TnMLew/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/cavo-bar-and-kitchen-vancouver?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Bars, Mediterranean",
          address: "911 Granville Street",
          city: "Vancouver",
          country: "Canada",
          phone: "+16045683454",
          yelp_id: "0jl_GNZrf0PUXnbUH797jw",
          price_range: "$$",
          longitude: -123.1216592,
          latitude: 49.2801605
        },
        {
          name: "Miku",
          Yelp_image_URL:
            "https://s3-media3.fl.yelpcdn.com/bphoto/OBIHYzIe_0-RYJ8TjQ8CdQ/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/miku-vancouver-2?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 4.5,
          categories: "Sushi Bars, Japanese",
          address: "200 Granville Street",
          city: "Vancouver",
          country: "Canada",
          phone: "+16045683900",
          yelp_id: "4EV_ZcQmjAmP3pmO-_nb2A",
          price_range: "$$$",
          longitude: -123.113051358108,
          latitude: 49.2870083463066
        },
        {
          name: "Gotham Steakhouse & Bar",
          Yelp_image_URL:
            "https://s3-media3.fl.yelpcdn.com/bphoto/ZaZh6c76xdOCeHH0zIZNCw/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/gotham-steakhouse-and-bar-vancouver?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 4,
          categories: "Seafood, Steakhouses, Cocktail Bar",
          address: "615 Seymour Street",
          city: "Vancouver",
          country: "Canada",
          phone: "+16046058282",
          yelp_id: "cY7rImCLGK1PPNcivk3ofw",
          price_range: "$$$$",
          longitude: -123.115793,
          latitude: 49.2829254
        },
        {
          name: "Nana's Green Tea",
          Yelp_image_URL:
            "https://s3-media3.fl.yelpcdn.com/bphoto/4VBbGRg21moVGBskjey9GQ/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/nanas-green-tea-vancouver?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 4,
          categories: "Cafes",
          address: "2135 W 41st Avenue",
          city: "Vancouver",
          country: "Canada",
          phone: "+16046058282",
          yelp_id: "yhlLjEZUhzPES8vrtcPGrA",
          price_range: "$",
          longitude: -123.15657,
          latitude: 49.23485
        },
        {
          name: "Ramen Danbo",
          Yelp_image_URL:
            "https://s3-media2.fl.yelpcdn.com/bphoto/y3as4TXt5urZmcSRr_Z6QQ/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/ramen-danbo-vancouver?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 4,
          categories: "Noodles, Ramen",
          address: "1333 Robson Street",
          city: "Vancouver",
          country: "Canada",
          phone: "+16046058282",
          yelp_id: "jMz_y_-cWMfiZF7Q5snE6Q",
          price_range: "$$",
          longitude: -123.128934167326,
          latitude: 49.2874959131639
        },
        {
          name: "La Casita",
          Yelp_image_URL:
            "https://s3-media4.fl.yelpcdn.com/bphoto/PatvXBohgCu40q90opap4g/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/la-casita-vancouver?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3,
          categories: "Mexican",
          address: "101 W Cordova Street",
          city: "Vancouver",
          country: "Canada",
          phone: "+16046058282",
          yelp_id: "w-WIdtND5jGIiiYoFjhtmg",
          price_range: "$$",
          longitude: -123.1069048188,
          latitude: 49.2830484880298
        },
        {
          name: "Spicy 6",
          Yelp_image_URL:
            "https://s3-media2.fl.yelpcdn.com/bphoto/HX1pOeE78u0tPdXNO1IXXQ/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/spicy-6-vancouver-3?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 4,
          categories: "Indian",
          address: "116 Robson Street",
          city: "Vancouver",
          country: "Canada",
          phone: "+16043367999",
          yelp_id: "eqpBdNm-UtMIsodfxLU7MA",
          price_range: "$$",
          longitude: -123.1256892,
          latitude: 49.2848585
        }
      ]);
    });
};
