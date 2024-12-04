module.exports = {
  apps: [
    {
      name: 'api-zoi',
      script: 'src/index.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
        PORT: 3001,
        DB_SERVER: 'localhost',
        DB_DATABASE: 'nombre_de_tu_base_de_datos',
        DB_USER: 'tu_usuario',
        DB_PASSWORD: 'tu_contraseña'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
        DB_SERVER: '192.168.10.11',
        DB_DATABASE: 'zoinew',
        DB_USER: 'api_user',
        DB_PASSWORD: 'Univalle/2024'
      }
    }
  ]
};




