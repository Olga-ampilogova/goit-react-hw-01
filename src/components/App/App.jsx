import "./App.css";
import { Profile } from "../Profile/Profile";
import { FriendList } from "../Friends/FriendList";
import { TransactionHistory } from "../Transactions/TransactionHistory";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <div className="box">
      <Profile data={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
