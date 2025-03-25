import { NextResponse } from "next/server";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  fork: boolean;
  owner: {
    avatar_url: string;
  }
}

interface Repo {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
  image: string;
}

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/alecb6/repos", {
      headers: { Accept: "application/vnd.github.v3+json" },
      next: { revalidate: 3600 },
    });

    const repos: GitHubRepo[] = await response.json();

    const projects: Repo[] = repos
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description ?? "Sin descripción",
        url: repo.html_url,
        language: repo.language ?? "Desconocido",
        topics: repo.topics ?? [],
        image: repo.owner.avatar_url,
      }));

      console.log("Datos recibidos:", projects);

    return NextResponse.json(projects, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
