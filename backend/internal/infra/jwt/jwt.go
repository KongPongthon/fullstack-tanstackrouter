package jwt

type Service interface {
	Generate(userID string) (string, error)
}

type JWTService struct{}

func (j *JWTService) Generate(userID string) (string, error) {
	return "mock-jwt-token", nil
}
