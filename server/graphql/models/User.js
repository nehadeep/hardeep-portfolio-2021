

class User {
    constructor(model) {
        this.Model = model
    }



    signUp(signUpData){

       // console.log("sign update", signUpData)

        if(signUpData.password!== signUpData.passwordConfirmation){
            throw new Error('Password and confirm password must match.')
        }
        return this.Model.create(signUpData)

    }

    async signIn(signInData, ctx){
        try{
            const user = await ctx.authenticate(signInData);
            return user;

        } catch (e) {
            return e;
        }

    }
    signOut(ctx){
        try{
            ctx.logout();
            return true;
        } catch (e) {
            return false;
        }

    }
}

module.exports = User;