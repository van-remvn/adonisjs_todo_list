'use strict'

const { DateTime } = require('luxon')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Todo extends Model {
    static get dates() {
        return super.dates.concat(['due_date'])
    }
    
    // ... other model code
    setDueDateField(value) {
        return DateTime.fromJSDate(value).toUTC()
    }
}

module.exports = Todo
