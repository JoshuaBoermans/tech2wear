module.exports = {
  apps: [
    {
      name: 'tech2wear-website',
      script: 'python3',
      args: '-m http.server 3000 --bind 0.0.0.0',
      cwd: '/home/user/webapp',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 3
    }
  ]
};