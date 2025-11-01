export interface VideoModel {
  id: string;
  info?: {
    snippet: {
      publishedAt: string;
      channelTitle: string;
      title: string;
      thumbnails: { medium: { url: string } };
    };
    statistics: {
      viewCount: string;
    };
  };
}
