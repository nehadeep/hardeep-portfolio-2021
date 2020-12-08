

class User {
    constructor(model) {
        this.Model = model
    }

    getAuthUser(ctx){
        if(ctx.isAuthenticated()){
            return ctx.getUser();
        }

        return null;
    }

   async signUp(signUpData){

       // console.log("sign update", signUpData)

        if(signUpData.password!== signUpData.passwordConfirmation){
            throw new Error('Password and confirm password must match.')
        }
        try{
            return await this.Model.create(signUpData)

        }catch (e) {
            if(e.code && e.code ===11000) {
                throw new Error('User with this email already exists.')
            }

            throw e;
        }

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