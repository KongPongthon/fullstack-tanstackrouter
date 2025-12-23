// internal/handler/router.go
package handler

import (
	"net/http"

	"backend/internal/services"
)

func NewRouter(authService *services.AuthService) http.Handler {
	mux := http.NewServeMux()

	authHandler := NewAuthHandler(authService)

	mux.HandleFunc("/health", Health)
	mux.HandleFunc("/v1/login", authHandler.Login)

	return mux
}
