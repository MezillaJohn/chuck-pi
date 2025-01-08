package store

import (
	"context"
	"database/sql"
	"time"
)

type User struct {
	ID        int64     `json:"id"`
	Username  string    `json:"username"`
	Email     string    `json:"email"`
	Password  string    `json:"-"`
	CreatedAt time.Time `json:"created_at"`
}

type UsersStorage struct {
	db *sql.DB
}

func (u *UsersStorage) Create(ctx context.Context, user *User) error {
	query := `
		INSERT INTO Users (username, email, password)
		VALUES (?, ?, ?) RETURNING id, created_at
	`

	err := u.db.QueryRowContext(
		ctx,
		query,
		user.Username,
		user.Email,
		user.Password,
	).Scan(&user.ID, &user.CreatedAt)

	if err != nil {
		return err
	}

	return nil
}
