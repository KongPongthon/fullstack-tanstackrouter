package repository

import (
	"backend/internal/models"
	"errors"

	"github.com/google/uuid"
)

type UserRepository interface {
	FindByUsername(username string) (*models.User, error)
}

type userRepository struct {
}

func NewUserRepository() UserRepository {
	return &userRepository{}
}

func (r *userRepository) FindByUsername(username string) (*models.User, error) {
	if username != "admin" {
		return nil, errors.New("user not found")
	}

	return &models.User{
		ID:           uuid.New(),
		Username:     "admin",
		PasswordHash: "1234",
		Status:       "active",
	}, nil
}