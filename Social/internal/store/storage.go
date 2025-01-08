package store

import (
	"context"
	"database/sql"
)

type Storage struct {
	Post interface {
		Create(context.Context, *Post) error
	}
	Users interface {
		Create(context.Context, *User) error
	}
}

func NewStorage(db *sql.DB) Storage {
	return Storage{
		Post:  &PostStroage{db},
		Users: &UsersStorage{db},
	}
}
