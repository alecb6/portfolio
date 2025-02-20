import type { NextConfig } from "next";
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/perfil',
        destination: '/pages/profile',
      },
      {
        source: '/experiencia',
        destination: '/pages/experience',
      },
      {
        source: '/proyectos',
        destination: '/pages/projects',
      },
      {
        source: '/conocimientos',
        destination: '/pages/knowledge',
      },
    ]
  },
};

export default nextConfig;
