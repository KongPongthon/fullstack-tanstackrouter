// internal/handler/router.go
package handler

import (
	"backend/internal/handler/middleware"
	"backend/internal/infra/jwt"
	"backend/internal/services"
	"net/http"
)

func NewRouter(authService *services.AuthService,jwtService jwt.Service,) http.Handler {
	root := http.NewServeMux()

	authHandler := NewAuthHandler(authService)

	root.Handle("/health", http.HandlerFunc(Health))
	root.Handle("/v1/login", http.HandlerFunc(authHandler.Login))
	root.Handle("/v1/register", http.HandlerFunc(authHandler.Register))

	private := http.NewServeMux()
	private.HandleFunc("/v1/profile", ProfileHandler)

	root.Handle("/v1/",
		middleware.AuthMiddleware(jwtService)(private),
	)
	return root
}
