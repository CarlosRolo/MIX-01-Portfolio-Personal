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

const REPOS: { name: string; track: string }[] = [
  { name: "CISCO-01-Homelab-Familiar", track: "CISCO" },
  { name: "net-traffic-analyzer",      track: "NET" },
  { name: "net-enterprise-topology",   track: "NET" },
  { name: "net-network-scanner",       track: "NET" },
  { name: "net-network-automation",    track: "NET" },
  { name: "net-ids-ml",                track: "NET" },
  { name: "net-sdn-controller",        track: "NET" },
  { name: "net-bgp-route-reflector",   track: "NET" },
  { name: "net-digital-twin",          track: "NET" },
  { name: "cloud-fastapi-demo",        track: "CLOUD" },
  { name: "cloud-terraform-localstack",track: "CLOUD" },
  { name: "cloud-cicd-pipeline",       track: "CLOUD" },
  { name: "cloud-observability-stack", track: "CLOUD" },
  { name: "cloud-microservices-platform", track: "CLOUD" },
  { name: "cloud-k8s-gitops",          track: "CLOUD" },
  { name: "cloud-idp-backstage",       track: "CLOUD" },
  { name: "MIX-01-Portfolio-Personal", track: "MIX" },
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
    REPOS.map(async ({ name, track }) => {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${name}`,
        { headers, next: { revalidate: 3600 } }
      );
      if (!res.ok) return null;
      const repo = await res.json() as GitHubRepo;
      return { ...repo, _track: track };
    })
  );

  const repos = results
    .filter((r): r is PromiseFulfilledResult<any> =>
      r.status === "fulfilled" && r.value !== null
    )
    .map((r) => r.value);

  const groups: Record<string, GitHubRepo[]> = {};
  for (const repo of repos) {
    const track = repo._track;
    if (!groups[track]) groups[track] = [];
    groups[track].push(repo);
  }

  const trackOrder = ["CISCO", "NET", "CLOUD", "IOT", "MIX"];
  return trackOrder
    .filter((t) => groups[t])
    .map((track) => ({
      track,
      label: TRACK_CONFIG[track]?.label ?? track,
      color: TRACK_CONFIG[track]?.color ?? "#374151",
      repos: groups[track],
    }));
}