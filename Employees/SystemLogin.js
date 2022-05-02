//canBeUser means that the user han canLogin method.
//ducky typing - works goos for not so typed languages, as JS - doesn't matter the type, it matters what it can do (and thus, we can share methods).

export class SystemLogin {
    static login(canBeUser, password){
        if (SystemLogin.isUser(canBeUser)) {
            return canBeUser.canLogin(password);
        }
        return false; 
    } 
    
    //verifies if canBeUser has the attribute "login" and if it's a method
    static isUser(canBeUser){
        return "login" in canBeUser && canBeUser.login instanceof Function;
    }
}