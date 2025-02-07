export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', "+NTvsragnMy+c4EMsm4BhQ=="), 
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "mnaXHvsMpEKa339MdrJpQQ=="), 
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', "defaultTransferSalt"), 
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
