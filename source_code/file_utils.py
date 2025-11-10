import os
from pathlib import Path

from docling.document_converter import DocumentConverter
from huggingface_hub import InferenceClient


def load_env_file(path: str = ".env"):
    """Populate os.environ with values from a local .env file."""
    env_path = Path(path)
    if not env_path.exists():
        return
    for line in env_path.read_text(encoding="utf-8").splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#") or "=" not in stripped:
            continue
        key, value = stripped.split("=", 1)
        cleaned_value = value.strip().strip("'").strip('"')
        os.environ.setdefault(key.strip(), cleaned_value)


load_env_file()

api_key = os.getenv("HUGGINGFACE_API_KEY")
if not api_key:
    raise RuntimeError("Missing HUGGINGFACE_API_KEY in environment or .env file.")

converter = DocumentConverter()
client = InferenceClient(provider="hf-inference", api_key=api_key)


def docling_convert(source, write_to_file=False):
    result = converter.convert(source)
    # print(result.document.export_to_text())
    if write_to_file:
        with open("output.txt", "w", encoding="utf-8") as f:
            f.write(result.document.export_to_text())
    return result.document.export_to_text(), result.document.export_to_html()


def sentiment_analysis(text):
    result = client.text_classification(
        text,
        model="ProsusAI/finbert",
    )
    return result
