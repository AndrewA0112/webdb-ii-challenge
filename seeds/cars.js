
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '161234', make: 'Nissan', model: 'Rogue', mileage: 50000},
        {vin: '611242', make: 'Honda', model: 'Accord', mileage: 30000},
        {vin: '123892', make: 'Ford', model: 'Fusion', mileage: 10000},
        {vin: '123-01', make: 'Tesla', model: 'Model 3', mileage: 70000}
      ]);
    });
};
