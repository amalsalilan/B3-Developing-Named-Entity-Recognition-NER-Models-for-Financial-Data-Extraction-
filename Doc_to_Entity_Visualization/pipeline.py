import os
import spacy
import webbrowser
from spacy import displacy
from docling.document_converter import DocumentConverter


class DocToEntityVisualizer:
    def __init__(self, model_path=None):

        print("[INIT] Setting up pipeline...")

        if model_path and os.path.exists(model_path):
            print(f"[LOAD] Using custom model: {model_path}")
            self.nlp = spacy.load(model_path)
        else:
            print("[LOAD] Using default spaCy model: en_core_web_sm")
            self.nlp = spacy.load("en_core_web_sm")

        self.converter = DocumentConverter()

    def extract_text(self, file_path):

        if not os.path.exists(file_path):
            raise FileNotFoundError(f"File not found: {file_path}")

        print(f"\n[STEP 1] Extracting text from: {file_path}")
        result = self.converter.convert(file_path)


        ocr_flag = getattr(getattr(result.document, "metadata", {}), "ocr_used", False)
        print(f"[INFO] OCR applied: {ocr_flag}")
        text_blocks = []
        if hasattr(result.document, "texts"):
            for item in result.document.texts:
                text = getattr(item, "text", None)
                if isinstance(text, str):
                    text_blocks.append(text)
        else:

            try:
                text_blocks.append(result.document.export_to_markdown())
            except Exception:
                text_blocks.append(str(result.document))

        combined_text = "\n".join(text_blocks).strip()
        print(f"[INFO] Extracted {len(combined_text)} characters of text.")
        return combined_text

    def run_ner(self, text):

        print("\n[STEP 2] Running Named Entity Recognition (NER)...")
        return self.nlp(text)

    def visualize(self, doc, output_file="entity_visualization.html"):

        print("\n[STEP 3] Generating visualization...")
        html = displacy.render(doc, style="ent", page=True)

        with open(output_file, "w", encoding="utf-8") as f:
            f.write(html)

        abs_path = os.path.abspath(output_file)
        print(f"[INFO] Visualization saved at: {abs_path}")
        webbrowser.open(f"file://{abs_path}")

    def run(self, file_path):

        print("\n=== Document → NER → Visualization Pipeline ===")
        text = self.extract_text(file_path)
        doc = self.run_ner(text)
        self.visualize(doc)
        print("\nPipeline execution completed successfully.")


if __name__ == "__main__":
    SAMPLE_FILE = r"sample_docs/Finexia_2024.pdf"
    CUSTOM_MODEL = None
    pipeline = DocToEntityVisualizer(model_path=CUSTOM_MODEL)
    pipeline.run(SAMPLE_FILE)
