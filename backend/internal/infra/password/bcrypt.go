package password

import "golang.org/x/crypto/bcrypt"

type Checker interface {
	Check(password, hash string) bool
}

type BcryptChecker struct{}

func (b *BcryptChecker) Check(password, hash string) bool {
	return bcrypt.CompareHashAndPassword(
		[]byte(hash),
		[]byte(password),
	) == nil
}
