'use strict'

class StoreTodo {
  get rules () {
    return {
      title:"required|min:3",
      due_date:"required"
    }
  }
  get messages () {
    return {
      "title.required":"Title is required!",
      "title.min":"Title is must be than 3 characters!",
      "due_date.required":"Due date is required!",
    }
  }
}

module.exports = StoreTodo
