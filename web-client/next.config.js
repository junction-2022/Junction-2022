/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/api/survey',
                destination: 'http://10.100.27.14:8000/api/survey/',
            },
        ]
    },
}

module.exports = nextConfig
