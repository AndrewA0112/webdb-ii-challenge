
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('vin').unique().notNullable();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission_type');
        tbl.string('status');
    })
};

exports.down = function(knex) {
    
};
