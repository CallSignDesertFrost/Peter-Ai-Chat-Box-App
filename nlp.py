import os
import json

def process_message(text):
    # NLP code here
    # ...

    response = {"text": "AI: " + response}
    return json.dumps(response)

if __name__ == "__main__":
    # Load API key from environment variable
    api_key = os.environ.get("NLP_API_KEY")

    # Initialize NLP library with API key
    # ...
    
    import os

api_key = os.environ.get("NLP_API_KEY")

from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("NLP_API_KEY")