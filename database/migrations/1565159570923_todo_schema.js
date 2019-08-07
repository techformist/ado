"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TodoSchema extends Schema {
  up() {
    this.create("todos", table => {
      table.increments();
      table.timestamps();

      table.string("description");
      table.string("status");
      table.datetime("date");
    });
  }

  down() {
    this.drop("todos");
  }
}

module.exports = TodoSchema;
