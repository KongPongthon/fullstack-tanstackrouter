// cmd/api/main.go
package main

import (
	"log"
	"net/http"

	"backend/internal/foundations/db"
	"backend/internal/handler"
	"backend/internal/infra/jwt"
	"backend/internal/infra/password"
	"backend/internal/repository"
	"backend/internal/services"
)

func main() {

	database, err := db.NewPostgres()
	if err != nil {
		log.Fatal(err)
	}
	defer database.Close()

	userRepo := repository.NewUserRepository()
	passwordChecker := &password.BcryptChecker{}
	tokenService := &jwt.JWTService{}

	authService := services.NewAuthService(
		userRepo,
		passwordChecker,
		tokenService,
	)

	router := handler.NewRouter(authService)

	server := http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	log.Println("server started at :8080")
	log.Fatal(server.ListenAndServe())
}
