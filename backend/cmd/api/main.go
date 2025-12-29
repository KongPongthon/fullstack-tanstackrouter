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

	"github.com/joho/godotenv"
)

func main() {

	_ = godotenv.Load()

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
	
	port := os.Getenv("PORT")
	
	if port == "" {
		port = "8081"
	}
	log.Println("port", port)
	server := http.Server{
		Addr:    ":" + port,
		Handler: router,
	}

	log.Println("server started at :" + port)
	log.Fatal(server.ListenAndServe())
}
