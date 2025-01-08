package main

import (
	"net/http"

	"github.com/MezillaJohn/Social/internal/store"
)

type receivedPost struct {
	Title   string   `json:"title"`
	Content string   `json:"content"`
	Tags    []string `json:"tags"`
}

func (app application) createPostHandler(w http.ResponseWriter, r *http.Request) {
	var userPost receivedPost

	if err := readJson(w, r, &userPost); err != nil {
		writeErrorJson(w, http.StatusBadRequest, err.Error())
		return
	}

	post := &store.Post{
		Title:   userPost.Title,
		Content: userPost.Content,
		UserID:  1,
		Tags:    userPost.Tags,
	}

	ctx := r.Context()

	if err := app.store.Post.Create(ctx, post); err != nil {
		writeErrorJson(w, http.StatusInternalServerError, err.Error())
		return
	}

	if err := writeJson(w, http.StatusCreated, post); err != nil {
		writeErrorJson(w, http.StatusInternalServerError, err.Error())
		return
	}
}
