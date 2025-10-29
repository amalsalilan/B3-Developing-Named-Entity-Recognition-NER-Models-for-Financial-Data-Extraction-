import os
import spacy
from docling.document_converter import DocumentConverter
from spacy import displacy

# Paths
MODEL_PATH = r"C:\Users\sivak\OneDrive\Desktop\info\model-best"
SAMPLE_FILE = r"C:\Users\sivak\OneDrive\Desktop\info\Company_Financial_Report_NovaTech.txt"
OUTPUT_HTML = "entities_output.html"

def extract_text(source_path):
    """Extract text from PDF/DOCX/TXT using Docling or fallback."""
    ext = os.path.splitext(source_path)[1].lower()

    if ext == ".txt":
        print("📄 Reading plain text file...")
        with open(source_path, "r", encoding="utf-8") as f:
            return f.read()
    else:
        print(f"📄 Extracting text using Docling from: {source_path}")
        converter = DocumentConverter()
        result = converter.convert(source_path)
        return result.document.export_to_markdown()

def run_ner(text):
    """Run NER on extracted text."""
    print("🤖 Loading trained NER model...")
    nlp = spacy.load(MODEL_PATH)
    doc = nlp(text)
    return doc

def visualize_entities(doc):
    """Generate entity visualization and save to HTML."""
    print("🎨 Generating entity visualization...")
    html = displacy.render(doc, style="ent", page=True)
    with open(OUTPUT_HTML, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"✅ Visualization saved as: {OUTPUT_HTML}")

def main():
    text = extract_text(SAMPLE_FILE)
    doc = run_ner(text)
    visualize_entities(doc)
    print("🎯 Pipeline completed successfully!")

if __name__ == "__main__":
    main()
