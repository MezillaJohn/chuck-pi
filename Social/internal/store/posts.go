package store

import (
	"context"
	"database/sql"
	"time"

	"github.com/lib/pq"
)

type Post struct {
	ID        int64     `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	UserID    int64     `json:"user_id"`
	Tags      []string  `json:"tags"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type PostStroage struct {
	db *sql.DB
}

func (p *PostStroage) Create(ctx context.Context, post *Post) error {
	query := `
	INSERT INTO Posts (title, content, user_id, tags)
	VALUES ($1, $2, $3, $4) RETURNING id, created_at, updated_at
	`

	err := p.db.QueryRowContext(
		ctx,
		query,
		post.Title,
		post.Content,
		post.UserID,
		pq.Array(post.Tags),
	).Scan(&post.ID, &post.CreatedAt, &post.UpdatedAt)

	if err != nil {
		return err
	}

	return nil
}

func (p *PostStroage) getPostById(ctx context.Context, postId int64) {
	query := `SELECT id FROM posts WHERE id = $1;`

	err := p.db.
}
