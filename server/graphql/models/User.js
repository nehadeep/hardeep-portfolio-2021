

class User {
    constructor(model) {
        this.Model = model
    }

    signIn(){

    }

    signUp(signUpData){

       // console.log("sign update", signUpData)

        if(signUpData.password!== signUpData.passwordConfirmation){
            throw new Error('Password and confirm password must match.')
        }
        return this.Model.create(signUpData)

    }
    signOut(){

    }
}

module.exports = User;