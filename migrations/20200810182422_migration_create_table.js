exports.up = function (knex) {
  return knex.schema.createTable("workouts", function (table) {
    table.increments("id");
    table.string("workout");
    table.date("date");
    table.integer("sets");
    table.integer("reps");
    table.decimal("weight_kg", 10, 2);
    table.decimal("weight_lb", 10, 2);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("workouts");
};
