exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("restaurants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("restaurants").insert([
        {
          name: "Dae Ji",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "+16046771636",
          yelp_id: "7f4AH7Isc9yirRcMQMaaXg",
          longitude: -123.114720,
          latitude: 49.28266
        },
        {
          name: "White Spot",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.3,
          categories: "Western",
          address: "405 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "+16048996072",
          yelp_id: "tWjcnCAYZfkkQ1C3J_Zctw",
          longitude: -123.113500,
          latitude: 49.282068
        }
      ]);
    });
};
