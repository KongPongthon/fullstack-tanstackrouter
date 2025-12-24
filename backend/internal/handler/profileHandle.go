package handler

import (
	"fmt"
	"net/http"
)

func ProfileHandler(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value("userID").(string)
	// ใช้ userID ต่อ
	fmt.Println("user",userID)
	w.Write([]byte("Success"))
}