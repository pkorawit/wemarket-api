const AuthMiddleware = require('@src/middleware/authMiddleware').getInstance()

module.exports = {
  isAuth: AuthMiddleware.isAuth,
  isGuest: AuthMiddleware.isGuest,
  isUnverfied: AuthMiddleware.isUnverfied,
  isVerified: AuthMiddleware.isVerified
}
