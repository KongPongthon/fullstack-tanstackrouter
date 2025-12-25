package jwt

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type JWTService struct {
	secret []byte
	ttl    time.Duration
}
type Service interface {
	Generate(userID string) (string, error)
	Validate(token string) (string, error)
}

func NewJWTService(secret string, ttl time.Duration) Service {
	return &JWTService{
		secret: []byte(secret),
		ttl:    ttl,
	}
}

func (j *JWTService) Validate(token string) (string, error) {
	claims := jwt.MapClaims{}

	_, err := jwt.ParseWithClaims(token, claims, func(t *jwt.Token) (interface{}, error) {
		return j.secret, nil
	})

	if err != nil {
		return "", err
	}

	return claims["sub"].(string), nil
}

func (j *JWTService) Generate(userID string) (string, error) {
	claims := jwt.MapClaims{
		"sub": userID,
		"exp": time.Now().Add(j.ttl).Unix(),
		"iat": time.Now().Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	return token.SignedString(j.secret)
}
