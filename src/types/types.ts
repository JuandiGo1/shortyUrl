export interface Link {
    original: string;
    short: string;
}

export interface LinksListProps {
    linkObj: Link;
    index : number;
    handleCopyLink: (link: string) => void;
    handleRemoveLink: (index: number) => void;
    handleFetchStats: (link: string) => void;
}

export interface LinkStats {
  original_url: string;
  short_id: string;
  access_count: number;
  created_at: string;
}

export interface StatsProps {
  stats: LinkStats | null;
  error: string | null;
  handleFetchStats: (link: string) => void;
}