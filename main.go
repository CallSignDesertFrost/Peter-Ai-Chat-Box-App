package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Message struct {
	Text string `json:"text"`
}

func main() {
	http.HandleFunc("/api/message", func(w http.ResponseWriter, r *http.Request) {
		var msg Message
		err := json.NewDecoder(r.Body).Decode(&msg)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		// Call Python NLP code here
		response := processMessage(msg.Text)

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func processMessage(text string) Message {
	// Call Python NLP code here
	// ...

	return Message{Text: "AI: " + response}
}