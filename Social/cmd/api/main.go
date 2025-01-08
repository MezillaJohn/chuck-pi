package main

import (
	"fmt"
	"log"

	"github.com/MezillaJohn/Social/internal/db"
	"github.com/MezillaJohn/Social/internal/env"
	"github.com/MezillaJohn/Social/internal/store"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {
	godotenv.Load()
	cfg := config{
		addr: env.GetEnvString("ADDR", ":8081"),
		db: dbConfig{
			addr:         env.GetEnvString("DB_ADDR", "postgres://admin:Mezilla@1995@localhost/social?sslmode=disable"),
			maxOpenConns: env.GetEnvInt("DB_MAX_OPEN_CONNS", 30),
			maxIdleConns: env.GetEnvInt("DB_MAX_IDLE_CONNS", 30),
			maxIdleTime:  env.GetEnvString("DB_MAX_IDLE_TIME", "15m"),
		},
		env: env.GetEnvString("ENV", "development"),
	}

	db, err := db.New(
		cfg.db.addr,
		cfg.db.maxOpenConns,
		cfg.db.maxIdleConns,
		cfg.db.maxIdleTime,
	)

	if err != nil {
		panic(err)
	}

	defer db.Close()

	fmt.Println("db connection pull established")

	store := store.NewStorage(db)

	app := &application{
		config: cfg,
		store:  store,
	}

	mux := app.mount()

	log.Fatal(app.run(mux))
}
