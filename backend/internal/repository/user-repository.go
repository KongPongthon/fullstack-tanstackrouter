package repository

import (
	"backend/internal/models"
	"errors"

	"github.com/google/uuid"
)

type UserRepository interface {
	FindByUsername(username string) (*models.User, error)
	Create(user *models.User) (string, error)
}

type userRepository struct {
}

func NewUserRepository() UserRepository {
	return &userRepository{}
}

var ErrUserNotFound = errors.New("user not found")


func (r *userRepository) Create(user *models.User) (string, error) {
	// query := `
	// 	INSERT INTO users (username, password_hash)
	// 	VALUES ($1, $2)
	// 	RETURNING id
	// `

	// var id string
	// err := r.db.QueryRow(query, user.Username, user.PasswordHash).Scan(&id)
	// if err != nil {
	// 	return "", err
	// }

	return "", nil
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