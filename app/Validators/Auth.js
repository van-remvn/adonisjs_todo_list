'use strict'

class Auth {
  get rules () {
    return {
      email : "required|email|unique:users",
      password : "required|min:5|confirmed"
    }
  }
  get messages () {
    return { 
      "email.required"  :"Email is required!",
      "email.email"     :"Must Be in Email Format",
      "email.unique"    :"Email Already Registered",
      "password.required"  :"Password is required",
      "password.min"       :"Password is must be more than 5 characters!",
      "password.confirmed" :"Password Confirm Must Be the Same as Password!",
    }
  }
}
module.exports = Auth