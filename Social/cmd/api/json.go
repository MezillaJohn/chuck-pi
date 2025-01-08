package main

import (
	"encoding/json"
	"net/http"
)

func writeJson(w http.ResponseWriter, status int, data any) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(data)
}

func readJson(w http.ResponseWriter, r *http.Request, data any) error {
	maxBytes := 1_048_579
	r.Body = http.MaxBytesReader(w, r.Body, int64(maxBytes))

	decode := json.NewDecoder(r.Body)

	decode.DisallowUnknownFields()

	return decode.Decode(data)
}

func writeErrorJson(w http.ResponseWriter, status int, message string) error {

	type err struct {
		Message string `json:"message"`
	}

	type errorData struct {
		Data err `json:"data"`
	}

	return writeJson(w, status, &errorData{Data: err{message}})
}
