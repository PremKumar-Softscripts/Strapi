module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'L62uOtUNm8tkdxf8zzW8EQ=='),
      },
    },
  });
  