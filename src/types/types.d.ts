type ID = number;
type UserID = number;

interface User {
  user_id: UserID;
  username: string;
  display_name: string;
  description: string;
  account_created: string;
  icon_url?: string;
  banner_url?: string;
  location?: string;
  profile_link?: string;
}

interface Tweet {
  tweet_id: ID;
  author: UserID;
  created_at: string;
  tweet_content: string;
  like_count: number;
  retweet_count: number;
  private_qrts: number;
  views: number;
  media?: string[]
  mentions?: UserID[];
  original_tweetid?: ID;
  is_qrt?: boolean;
  is_reply?: boolean;
}