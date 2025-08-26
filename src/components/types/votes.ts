export interface Votes {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positive: number;
}

export type VoteType = "good" | "neutral" | "bad";
