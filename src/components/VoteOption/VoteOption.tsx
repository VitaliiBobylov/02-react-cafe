import type { VoteType } from "../../types/votes";
import css from "./VoteOption.module.css";

interface VoteOptionProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset?: boolean;
}

export default function voteOption({
  onVote,
  onReset,
  canReset = true,
}: VoteOptionProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
