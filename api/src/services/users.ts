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

  export const findOrCreate = async (
    payload: Partial<UserDocument>
  ): Promise<UserDocument> => {
    const result = await User.findOne({ email: payload.email });
    // find user by email from database
    if (result) {
      return result;
    } else {
      const user = new User({
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
      });
      const createdUser = await user.save();
      return createdUser;
    }
  };