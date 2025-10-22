import { ref, onMounted } from 'vue';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export function useGitHubProjects(username: string) {
  const projects = ref<GitHubRepo[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const fetchProjects = async () => {
    try {
      loading.value = true;
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }
      const data: GitHubRepo[] = await response.json();
      // Filter out forks and sort by updated_at
      projects.value = data
        .filter(repo => !repo.fork && repo.name !== 'NathanC16.github.io')
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    } catch (err: any) {
      error.value = err.message;
      console.error('Failed to fetch GitHub projects:', err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchProjects);

  return { projects, loading, error, fetchProjects };
}
