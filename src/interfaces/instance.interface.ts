export interface IInstance {
  flag: string;
  region: string;
  stats: {
    version: string;
    software: {
      name: string;
      version: string;
      branch: string;
    };
    openRegistrations: boolean;
    usage: {
      users: {
        total: number;
        activeHalfyear: number;
        activeMonth: number;
      };
    };
    metadata: {
      updatedAt: number;
      lastChannelRefreshedAt: number;
    };
    playback: {
      totalRequests: number;
      successfulRequests: number;
      ratio: number;
    };
  } | null;
  cors: boolean | null;
  api: boolean | null;
  type: string;
  uri: string;
  monitor: {
    monitorId: number;
    createdAt: number;
    statusClass: string;
    name: string;
    url: string | null;
    type: string;
    dailyRatios: {
      ratio: string;
      label: string;
    }[];
    '90dRatio': {
      ratio: string;
      label: string;
    };
    '30dRatio': {
      ratio: string;
      label: string;
    };
  } | null;
}
