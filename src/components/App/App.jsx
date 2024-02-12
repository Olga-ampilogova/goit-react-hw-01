import { Profile } from "../Profile/Profile";
import "./App.css";
import userData from "../../userData.json";
import { FriendListItem } from "../Friends/FriendListItem";
import friends from "../../friends.json";
// import "../Friends/FriendListItem.module.css";
import "../Profile/Profile.module.css";
// import "../Friends/FriendListItem.module.css";
import transactions from "../../transactions.json";
import { TransactionHistory } from "../Transactions/TransactionHistory";
// import "../Transactions/TransactionHistory.module.css";
// import clsx from "clsx";

export default function App() {
  return (
    <div className="box">
      <Profile data={userData} />
      <ul className="friend-box">
        {friends.map((friend) => (
          <li key={friend.id} className="friend-item">
            <FriendListItem friends={friend} />
          </li>
        ))}
      </ul>
      <TransactionHistory items={transactions} />
    </div>
  );
}
