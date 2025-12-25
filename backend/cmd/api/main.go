package main

import (
	"log"
	"net/http"
	"os"
	"time"

	"backend/internal/foundations/db"
	"backend/internal/foundations/jwt"
	"backend/internal/foundations/password"
	"backend/internal/handler"
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

	tokenService := jwt.NewJWTService(
	os.Getenv("JWT_SECRET"),
	time.Hour*24,
)

	authService := services.NewAuthService(
		userRepo,
		passwordChecker,
		tokenService,

	)

	router := handler.NewRouter(authService, tokenService)

	server := http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	log.Println("server started at :8080")
	log.Fatal(server.ListenAndServe())
}
