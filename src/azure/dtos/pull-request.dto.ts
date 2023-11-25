export default class PullRequestDto {
  subscriptionId: string;
  notificationId: number;
  id: string;
  eventType: string;
  publisherId: string;
  message: {
    text: string;
    html: string;
    markdown: string;
  };
  detailedMessage: {
    text: string;
    html: string;
    markdown: string;
  };
  resource: {
    repository: {
      id: string;
      name: string;
      url: string;
      project: {
        id: string;
        name: string;
        url: string;
        state: string;
        visibility: string;
        lastUpdateTime: string;
      };
      defaultBranch: string;
      remoteUrl: string;
    };
    pullRequestId: number;
    status: string;
    createdBy: {
      displayName: string;
      url: string;
      id: string;
      uniqueName: string;
      imageUrl: string;
    };
    creationDate: string;
    title: string;
    description: string;
    sourceRefName: string;
    targetRefName: string;
    mergeStatus: string;
    mergeId: string;
    lastMergeSourceCommit: {
      commitId: string;
      url: string;
    };
    lastMergeTargetCommit: {
      commitId: string;
      url: string;
    };
    lastMergeCommit: {
      commitId: string;
      url: string;
    };
    reviewers: Array<{
      reviewerUrl: string | null;
      vote: number;
      displayName: string;
      url: string;
      id: string;
      uniqueName: string;
      imageUrl: string;
      isContainer: boolean;
    }>;
    commits: Array<{
      commitId: string;
      url: string;
    }>;
    url: string;
    _links: {
      web: {
        href: string;
      };
      statuses: {
        href: string;
      };
    };
  };
  resourceVersion: string;
  resourceContainers: {
    collection: {
      id: string;
    };
    account: {
      id: string;
    };
    project: {
      id: string;
    };
  };
  createdDate: string;
}