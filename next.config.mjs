/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'm.media-amazon.com',
        'ia.media-imdb.com',
        'image.tmdb.org',
        'img.omdbapi.com',
      ],
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "m.media-amazon.com",
            port: "",
          },
        ],
      },
    };
    
   
  
  export default nextConfig;
  