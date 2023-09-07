import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import GoogleTokenStrategy from "passport-google-id-token";
import dotenv from "dotenv";

import { findOrCreate, findUserByEmailService } from "../services/users";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;
const clientId = process.env.GOOGLE_CLIENT_ID as string;

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const userEmail = payload.email;
    const foundUser = await findUserByEmailService(userEmail);
    done(null, foundUser);
  }
);

// google passport
export const googleStrategy = new GoogleTokenStrategy(
  {
    clientID: clientId,
  },

  // after the credential send from front end match from Google system
  async function (parsedToken: any, googleId: string, done: any) {
    console.log(parsedToken, "token");
    const userPayload = {
      email: parsedToken?.payload?.email,
      firstName: parsedToken?.payload?.given_name,
      lastName: parsedToken?.payload?.family_name,
      avatar: parsedToken?.payload?.picture,
    };
    const user = await findOrCreate(userPayload);
    // from the database
    done(null, user);
  }
);
