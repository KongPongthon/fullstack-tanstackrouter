package services

import (
	"backend/internal/infra/jwt"
	"backend/internal/infra/password"
	"backend/internal/repository"
	"errors"
	"fmt"
)

type AuthService struct {
	userRepo repository.UserRepository
	password password.Checker
	token    jwt.Service
}

func NewAuthService(
	userRepo repository.UserRepository,
	password password.Checker,
	token jwt.Service,
) *AuthService {
	return &AuthService{
		userRepo: userRepo,
		password: password,
		token:    token,
	}
}

func (s *AuthService) Login(username, password string) (string, error) {
	user, err := s.userRepo.FindByUsername(username)
	if err != nil {
		return "", err
	}

	if user.Status != "active" {
		return "", errors.New("user not allowed")
	}

	fmt.Println(password,user.PasswordHash)
	
	// if !s.password.Check(password, user.PasswordHash) {
	// 	return "", errors.New("invalid password")
	// }

	return s.token.Generate(user.ID.String())
}