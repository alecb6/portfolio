"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  fork: boolean;
  pushed_at: string;
}

export type ReposState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; repos: Repo[] };

// Una sola petición compartida por todas las secciones que la usan
let request: Promise<Repo[]> | null = null;

function fetchRepos(): Promise<Repo[]> {
  request ??= fetch(
    `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=pushed`
  )
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`Error al obtener los repositorios: ${res.status}`);
      }
      const data = await res.json();
      if (!Array.isArray(data)) {
        throw new Error("Formato incorrecto en la respuesta de la API");
      }
      // Solo los repositorios propios, no los forks
      return (data as Repo[]).filter((repo) => !repo.fork);
    })
    .catch((error) => {
      request = null;
      throw error;
    });

  return request;
}

export function useGithubRepos(): ReposState {
  const [state, setState] = useState<ReposState>({ status: "loading" });

  useEffect(() => {
    let active = true;
    fetchRepos()
      .then((repos) => active && setState({ status: "ready", repos }))
      .catch((error) => {
        console.error(error);
        if (active) setState({ status: "error" });
      });
    return () => {
      active = false;
    };
  }, []);

  return state;
}
