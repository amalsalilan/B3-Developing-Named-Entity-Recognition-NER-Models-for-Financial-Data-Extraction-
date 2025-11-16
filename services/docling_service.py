from docling.document_converter import DocumentConverter

def extract_text_from_file(filepath: str) -> str:
    converter = DocumentConverter()
    result = converter.convert(filepath)
    text = result.document.export_to_text()
    if not text.strip():
        raise ValueError("Docling extracted no text. File might be scanned or empty.")
    return text.strip()

