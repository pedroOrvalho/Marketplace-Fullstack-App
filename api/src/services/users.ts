import User,{UserDocument} from "../model/User";



export const CreateUserService= async (user:UserDocument):Promise<UserDocument>=>{

    return user.save()

}