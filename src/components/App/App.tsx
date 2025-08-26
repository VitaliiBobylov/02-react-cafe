import css from "./app.module.css";
import CafeInfo from "../Cafeinfo/CafeInfo";
import { useState } from "react";
import type { Votes, VoteType } from "../types/votes";
import VoteOptions from "../voteOptions/voteOptions";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positive: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo
        title="Sip Happens Café"
        description="Please rate our service by selecting one of the options below."
      />

      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />

      <div>
        <p>Good: {votes.good}</p>
        <p>Neutral: {votes.neutral}</p>
        <p>Bad: {votes.bad}</p>
        <p>Total: {votes.total}</p>
        <p>Positive: {votes.positive} </p>
      </div>
    </div>
  );
}

export default App;
