import { Mockuser } from "../types/type";

type Prop = {
  user: Mockuser;
};

export default function UserItem({ user }: Prop) {
  return (
    <div>
      <div>
        <h3>users</h3>
        <div>
          <p>{user.fname}</p>
        </div>
        <div>
          <p>{user.email}</p>
        </div>
        <button>ban user</button>
      </div>
      <div>
        <h3>products</h3>
        <p>product title</p>
      </div>
    </div>
  );
}
