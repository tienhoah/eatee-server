
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {facebook_id: "32109823327681728",first_name: "Roselle", last_name: "Alfredia",email: "palaeostriatum@unbarricade.co.uk", phone: "8228339745",age: "44", sex: "male", city: "Philippines" },
        {facebook_id: "10210734403791332",first_name: "Michael", last_name: "Otelia",email: "malaccan@crumblement.com", phone: "6681123478",age: "88", sex: "male", city: "Estonia" },
        {facebook_id: "32193923898928932",first_name: "Kara", last_name: "Cora",email: "introitus@mirthfully.com", phone: "8462397182",age: "26", sex: "male", city: "United Kingdom" },
        {facebook_id: "12090947584534578",first_name: "Lorna", last_name: "Tammara",email: "scylliorhinoid@convertend.org", phone: "9877242998",age: "40", sex: "male", city: "Tonga" },
        {facebook_id: "12309588990023235",first_name: "Kieth", last_name: "Lita",email: "eclair@phylogeny.edu", phone: "4753742482",age: "17", sex: "female", city: "Egypt" },
        {facebook_id: "09878743323929320",first_name: "Moises", last_name: "Wilfred",email: "wifelet@petzite.co.uk", phone: "5799742675",age: "44", sex: "male", city: "Canada" },
        {facebook_id: "43429719928003493",first_name: "Cedrick", last_name: "Kenya",email: "indexterity@defensibly.org", phone: "4232585221",age: "56", sex: "male", city: "France" },
        {facebook_id: "12390995994944343",first_name: "Camelia", last_name: "Erin",email: "otacousticon@urtica.org", phone: "6633233758",age: "26", sex: "female", city: "Senegal" },
        {facebook_id: "30293994930493043",first_name: "Shanna", last_name: "Jerome",email: "velloziaceae@mycetozoa.com", phone: "8411226513",age: "57", sex: "male", city: "Malaysia" },
        {facebook_id: "76753289800085823",first_name: "Ardelle", last_name: "Monika",email: "betonica@premedieval.org", phone: "9163757266",age: "14", sex: "female", city: "India" }
      ]);
    });
};
