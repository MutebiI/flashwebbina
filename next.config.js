/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/images/",
              outputPath: "static/images/",
              name: "[name].[hash].[ext]",
            },
          },
        ],
      });
    }
    return config;
  },
  env: {
    SUPABASE_URL: "https://pquqecfuohkgeipmcgkt.supabase.co",
    NEXT_PUBLIC_SUPABASE_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdXFlY2Z1b2hrZ2VpcG1jZ2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NTA2MDIsImV4cCI6MjAwMTUyNjYwMn0.aJWq2-mK9HvwRoE9b07XN7GqaNb1f66ICQH0Wv7iT-c",
  },
  
};

module.exports = nextConfig;
