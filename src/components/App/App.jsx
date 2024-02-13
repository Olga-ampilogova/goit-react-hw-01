import { Profile } from "../Profile/Profile";
import "./App.css";
import userData from "../../userData.json";
import { FriendList } from "../Friends/FriendList";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import { TransactionHistory } from "../Transactions/TransactionHistory";

export default function App() {
  return (
    <div className="box">
      <Profile data={userData} />
      <ul className="friendBox">
        {friends.map((friend) => (
          <li key={friend.id} className="friendItem">
            <FriendList friends={friend} />
          </li>
        ))}
      </ul>
      <TransactionHistory items={transactions} />
    </div>
  );
}
