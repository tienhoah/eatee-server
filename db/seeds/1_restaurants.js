exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("restaurants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("restaurants").insert([
        {
          name: "Dae Ji",
          Yelp_image_URL:
            "https://s3-media3.fl.yelpcdn.com/bphoto/3uG7r5aS0L8LUO8Oon09Bg/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/dae-ji-vancouver?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "+16046771636",
          yelp_id: "7f4AH7Isc9yirRcMQMaaXg",
          price_range: "$",
          longitude: -123.1146671,
          latitude: 49.2826395
        },
        {
          name: "White Spot",
          Yelp_image_URL:
            "https://s3-media4.fl.yelpcdn.com/bphoto/tpjFlP9yXNR42myK6cWxlw/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/white-spot-vancouver-23?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.3,
          categories: "Western",
          address: "405 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "+16048996072",
          yelp_id: "tWjcnCAYZfkkQ1C3J_Zctw",
          price_range: "$$",
          longitude: -123.1135,
          latitude: 49.282068
        },
        {
          name: "Fat Burger",
          Yelp_image_URL:
            "https://s3-media4.fl.yelpcdn.com/bphoto/fFk-jDAy0ZSl5CrU3IHYFQ/o.jpg",
          Yelp_business_URL:
            "https://www.yelp.com/biz/fatburger-vancouver-7?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 2.5,
          categories: "Burgers",
          address: "111 Dunsmuir Street",
          city: "Vancouver",
          country: "Canada",
          phone: "+16046699640",
          yelp_id: "U9JJQA50QgLOloqZpmtxOA",
          price_range: "$$",
          longitude: -123.110347464681,
          latitude: 49.2802519807659
        }
      ]);
    });
};
