import spacy
from docling.document_converter import DocumentConverter
from spacy import displacy

nlp = spacy.load(r"D:\NER\output2\model-best")


converter = DocumentConverter()


def get_text(path):
    p = path.lower()
    if p.endswith(".pdf") or p.endswith(".docx"):
        result = converter.convert(path)
        return result.document.export_to_text()
    elif p.endswith(".txt"):
        return open(path, "r", encoding="utf-8").read()
    else:
        return path 

file_path = r"C:\Users\Ishant Singh\OneDrive\Desktop\new folder\SpringB\IC_annual report.docx"

text = get_text(file_path)
doc = nlp(text)

displacy.serve(doc,style="ent")
    