import { NotFoundError } from "../helpers/apiErrors";
import User,{UserDocument} from "../model/User";


export const createUserService = async (
  user: UserDocument
): Promise<UserDocument> => {
  return await user.save();
};

export const findUserByEmailService = async (
    userEmail: string
  ): Promise<UserDocument> => {
    const foundUser = await User.findOne({ email: userEmail });
    if (foundUser) {
      return foundUser;
    } else {
      throw new NotFoundError(`Could not find user with email in the database.`);
    }
  };