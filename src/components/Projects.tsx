import { getPortfolioRepos, TrackGroup } from "@/lib/github";

const TRACK_STYLES: Record<string, { border: string; badge: string; bg: string }> = {
  CISCO: { border: "border-blue-700/50", badge: "text-blue-400 bg-blue-950/50 border-blue-800/40", bg: "bg-blue-950/20" },
  NET:   { border: "border-emerald-700/50", badge: "text-emerald-400 bg-emerald-950/50 border-emerald-800/40", bg: "bg-emerald-950/20" },
  CLOUD: { border: "border-violet-700/50", badge: "text-violet-400 bg-violet-950/50 border-violet-800/40", bg: "bg-violet-950/20" },
  IOT:   { border: "border-amber-700/50", badge: "text-amber-400 bg-amber-950/50 border-amber-800/40", bg: "bg-amber-950/20" },
  MIX:   { border: "border-rose-700/50", badge: "text-rose-400 bg-rose-950/50 border-rose-800/40", bg: "bg-rose-950/20" },
};

function RepoCard({ repo, style }: { repo: any; style: typeof TRACK_STYLES[string] }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block border ${style.border} ${style.bg} rounded-xl p-5 hover:brightness-125 transition-all duration-200 group`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h4 className="font-mono text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
          {repo.name}
        </h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-blue-400 shrink-0 mt-0.5 transition-colors">
          <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        </svg>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
        {repo.description ?? "Infrastructure and networking project — see repository for details."}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-600">
          {repo.language && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {repo.stargazers_count}
            </span>
          )}
        </div>
        <span className="text-xs text-gray-700">
          {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </span>
      </div>
    </a>
  );
}

function TrackSection({ group }: { group: TrackGroup }) {
  const style = TRACK_STYLES[group.track] ?? TRACK_STYLES.MIX;
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${style.badge}`}>
          {group.track}
        </span>
        <h3 className="text-lg font-semibold text-white">{group.label}</h3>
        <span className="text-xs text-gray-600">{group.repos.length} projects</span>
        <div className={`flex-1 h-px ${style.border} border-t`} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {group.repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} style={style} />
        ))}
      </div>
    </div>
  );
}

export default async function Projects() {
  const tracks = await getPortfolioRepos();

  return (
    <section id="projects" className="px-6 md:px-16 lg:px-32 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projects by Track
          </h2>
          <p className="text-gray-500 max-w-2xl">
            24 public projects organized across 5 tracks — from enterprise Cisco networking
            and cloud/DevOps pipelines to IoT edge computing and full-stack applications.
            All repositories include professional documentation and real commit history.
          </p>
        </div>

        {tracks.length === 0 ? (
          <p className="text-gray-600 text-sm">Loading repositories from GitHub...</p>
        ) : (
          tracks.map((group) => (
            <TrackSection key={group.track} group={group} />
          ))
        )}

        <div className="mt-8 text-center">
          <a
            href="https://github.com/CarlosRolo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white border border-gray-800 hover:border-gray-600 px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
