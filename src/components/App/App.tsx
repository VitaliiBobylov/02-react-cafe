import css from "./app.module.css";
import CafeInfo from "../Cafeinfo/hh";
import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes";
import VoteOptions from "../voteOptions/voteOptions";
import VoteStats from "../VoteStats/VoteStats";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
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
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate =
    totalVotes > 0 ? ((votes.good / totalVotes) * 100).toFixed(1) : 0;

  return (
    <div className={css.app}>
      <CafeInfo
        title="Sip Happens Café"
        description="Please rate our service by selecting one of the options below."
      />

      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />

      <VoteStats
        votes={votes}
        totalVotes={totalVotes}
        positiveRate={positiveRate}
      />
    </div>
  );
}

export default App;
