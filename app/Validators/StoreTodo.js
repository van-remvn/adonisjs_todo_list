'use strict'

class StoreTodo {
  get rules () {
    return {
      title:"required|min:3"
    }
  }
  get messages () {
    return {
      "title.required":"Title is required!",
      "title.min":"Title is very short!",
    }
  }
}

module.exports = StoreTodo
