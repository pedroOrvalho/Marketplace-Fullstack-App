import { User } from "../types/type";
import { Mockuser } from "../types/type";

type Prop = {
  user: Mockuser;
};


export default function UserItem({ user }:Prop) {
;
  return (
      <div>
          <h3>user</h3>
      <div>
        <p>{user.fname}</p>
      </div>
      <div>
        <p>{user.email}</p>
      </div>
      <button>ban user</button>
    </div>
  );
}


