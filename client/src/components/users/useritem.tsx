import { User } from "../types/type";

type Prop = {
  item: User;
};

export default function UserItem({ item }: Prop) {
  const user = item;
  return (
      <div>
          <h3>user</h3>
      <div>
        <p>{user.firstName}</p>
      </div>
      <div>
        <p>{user.email}</p>
      </div>
      <button>ban user</button>
    </div>
  );
}
