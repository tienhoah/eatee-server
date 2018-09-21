
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: "Roselle", last_name: "Alfredia",email: "palaeostriatum@unbarricade.co.uk", phone: "8228339745",age: "44", sex: "male", city: "Philippines" },
        {first_name: "Michael", last_name: "Otelia",email: "malaccan@crumblement.com", phone: "6681123478",age: "88", sex: "male", city: "Estonia" },
        {first_name: "Kara", last_name: "Cora",email: "introitus@mirthfully.com", phone: "8462397182",age: "26", sex: "male", city: "United Kingdom" },
        {first_name: "Lorna", last_name: "Tammara",email: "scylliorhinoid@convertend.org", phone: "9877242998",age: "40", sex: "male", city: "Tonga" },
        {first_name: "Kieth", last_name: "Lita",email: "eclair@phylogeny.edu", phone: "4753742482",age: "17", sex: "female", city: "Egypt" },
        {first_name: "Moises", last_name: "Wilfred",email: "wifelet@petzite.co.uk", phone: "5799742675",age: "44", sex: "male", city: "Canada" },
        {first_name: "Cedrick", last_name: "Kenya",email: "indexterity@defensibly.org", phone: "4232585221",age: "56", sex: "male", city: "France" },
        {first_name: "Camelia", last_name: "Erin",email: "otacousticon@urtica.org", phone: "6633233758",age: "26", sex: "female", city: "Senegal" },
        {first_name: "Shanna", last_name: "Jerome",email: "velloziaceae@mycetozoa.com", phone: "8411226513",age: "57", sex: "male", city: "Malaysia" },
        {first_name: "Ardelle", last_name: "Monika",email: "betonica@premedieval.org", phone: "9163757266",age: "14", sex: "female", city: "India" }
      ]);
    });
};
