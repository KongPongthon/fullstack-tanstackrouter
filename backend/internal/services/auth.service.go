package services

import (
	"backend/internal/infra/jwt"
	"backend/internal/infra/password"
	"backend/internal/models"
	"backend/internal/repository"
	"errors"
	"fmt"
)

type AuthService struct {
	userRepo repository.UserRepository
	password password.Checker
	token    jwt.Service
}

type PasswordChecker interface {
	Hash(password string) (string, error)
	Compare(hashedPassword, password string) bool
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

func (s *AuthService) Register(username, password string) (string, error) {
	_, err := s.userRepo.FindByUsername(username)
	if err == nil {
		return "", errors.New("There are already users in the system.")
	}

	if !errors.Is(err, repository.ErrUserNotFound) {
		return "", err
	}
	
	
	hashed, err := s.password.Hash(password)

	if err != nil {
		return "", err
	}

	user := &models.User{
		Username: username,
		PasswordHash: hashed,
	}

	return s.userRepo.Create(user)
}