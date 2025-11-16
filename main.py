import os
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from services.docling_service import extract_text_from_file
from services.ner_service import extract_entities
from models.schemas import TextIn, NERResponse

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

app = FastAPI(title="📊 Financial NER Backend")

# Enable CORS (so you can connect from frontend easily)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "✅ Financial NER backend is running"}

# --- 1️⃣ Extract entities from raw text ---
@app.post("/extract/text", response_model=NERResponse)
async def extract_from_text(payload: TextIn):
    cleaned_text = " ".join(payload.text.split())
    entities = extract_entities(cleaned_text)
    return {"text": cleaned_text, "entities": entities}

# --- 2️⃣ Extract entities from uploaded PDF ---
@app.post("/extract/file", response_model=NERResponse)
async def extract_from_file(file: UploadFile = File(...)):
    save_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(save_path, "wb") as f:
        f.write(await file.read())

    try:
        text = extract_text_from_file(save_path)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Docling extraction failed: {e}")

    entities = extract_entities(text)
    return {"text": text, "entities": entities}












