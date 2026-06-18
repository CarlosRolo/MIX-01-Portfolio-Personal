export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

export interface TrackGroup {
  track: string;
  label: string;
  color: string;
  repos: GitHubRepo[];
}

const TRACK_CONFIG: Record<string, { label: string; color: string }> = {
  CISCO: { label: "Cisco Networking", color: "#1d4ed8" },
  NET:   { label: "Network Engineering", color: "#065f46" },
  CLOUD: { label: "Cloud & DevOps", color: "#7c3aed" },
  IOT:   { label: "IoT & Edge Computing", color: "#b45309" },
  MIX:   { label: "Full Stack & Mixed", color: "#be123c" },
};

const REPO_NAMES = [
  "CISCO-01", "CISCO-02",
  "NET-01", "NET-02", "NET-03", "NET-04",
  "NET-05", "NET-06", "NET-07", "NET-08",
  "CLOUD-01", "CLOUD-02", "CLOUD-03", "CLOUD-04",
  "CLOUD-05", "CLOUD-06", "CLOUD-07",
  "IOT-01",
  "MIX-01",
];

export async function getPortfolioRepos(): Promise<TrackGroup[]> {
  const username = "CarlosRolo";
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const results = await Promise.allSettled(
    REPO_NAMES.map((name) =>
      fetch(`https://api.github.com/repos/${username}/${name}`, {
        headers,
        next: { revalidate: 3600 },
      }).then((r) => (r.ok ? (r.json() as Promise<GitHubRepo>) : null))
    )
  );

  const repos: GitHubRepo[] = results
    .filter(
      (r): r is PromiseFulfilledResult<GitHubRepo> =>
        r.status === "fulfilled" && r.value !== null
    )
    .map((r) => r.value);

  const groups: Record<string, GitHubRepo[]> = {};
  for (const repo of repos) {
    const track = repo.name.split("-")[0];
    if (!groups[track]) groups[track] = [];
    groups[track].push(repo);
  }

  return Object.entries(groups).map(([track, trackRepos]) => ({
    track,
    label: TRACK_CONFIG[track]?.label ?? track,
    color: TRACK_CONFIG[track]?.color ?? "#374151",
    repos: trackRepos.sort((a, b) => a.name.localeCompare(b.name)),
  }));
}
