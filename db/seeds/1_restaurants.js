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
          phone: "6046771636",
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
          phone: "6048994581",
          longitude: -123.113500,
          latitude: 49.282068
        },
        {
          name: "Dae Ji",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "6046771636",
          longitude: -123.114720,
          latitude: 49.28266
        },
        {
          name: "Dae Ji",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "6046771636",
          longitude: -123.114720,
          latitude: 49.28266
        },
        {
          name: "Dae Ji",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "6046771636",
          longitude: -123.114720,
          latitude: 49.28266
        },
        {
          name: "Dae Ji",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "6046771636",
          longitude: -123.114720,
          latitude: 49.28266
        },
        {
          name: "Dae Ji",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "6046771636",
          longitude: -123.114720,
          latitude: 49.28266
        },
        {
          name: "Dae Ji",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "6046771636",
          longitude: -123.114720,
          latitude: 49.28266
        },
        {
          name: "Dae Ji",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "6046771636",
          longitude: -123.114720,
          latitude: 49.28266
        },
        {
          name: "Dae Ji",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "Asian, Korean",
          address: "519 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "6046771636",
          longitude: -123.114720,
          latitude: 49.28266
        },
        {
          name: "White Spot",
          Yelp_image_URL: "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          Yelp_business_URL: "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=Jok6JM5JDfNTuRmFGEnEJg&utm_campaign=yelp_api_v3&utm_medium=api_v3_phone_search&utm_source=Jok6JM5JDfNTuRmFGEnEJg",
          rating: 3.5,
          categories: "White",
          address: "405 Dunsmuir St",
          city: "Vancouver",
          country: "Canada",
          phone: "6048994581",
          longitude: -123.113500,
          latitude: 49.282068
        }
      ]);
    });
};
