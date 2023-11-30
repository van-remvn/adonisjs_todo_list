const {hooks} = require('@adonisjs/ignitor')
hooks.after.providersBooted(()=>{
    const Exception = use('Exception') 
    Exception.handle('InvalidSessionException',async(error,{response,session})=>{
        return response.redirect("/login")
    })
    Exception.handle('HttpException',async(error,{response,session})=>{
        return response.redirect("/")
    })

    const View = use('View')
    const momentHelper = require('./momentHelper')

    View.global('formatDate', momentHelper.formatDate)
})