package password

import "golang.org/x/crypto/bcrypt"

type Checker interface {
	Hash(password string) (string, error)
	Check(password, hash string) bool
}

type BcryptChecker struct{}

func (b *BcryptChecker) Hash(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(bytes), err
}

func (b *BcryptChecker) Check(password, hash string) bool {
	return bcrypt.CompareHashAndPassword(
		[]byte(hash),
		[]byte(password),
	) == nil
}
