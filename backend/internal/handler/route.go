// internal/handler/router.go
package handler

import (
	"backend/internal/handler/middleware"
	"backend/internal/infra/jwt"
	"backend/internal/services"
	"net/http"
)

func NewRouter(authService *services.AuthService,jwtService jwt.Service,) http.Handler {
	mux := http.NewServeMux()

	authHandler := NewAuthHandler(authService)

	mux.HandleFunc("/health", Health)
	mux.HandleFunc("/v1/login", authHandler.Login)
	mux.HandleFunc("/v1/register",authHandler.Register)
	mux.Handle("/v1/profile",
	middleware.AuthMiddleware(jwtService)(
		http.HandlerFunc(ProfileHandler),
	),
)

	return mux
}
