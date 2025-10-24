import PyPDF2
import re
import spacy

# Load SpaCy English model
nlp = spacy.load("en_core_web_sm")

# PDF path (update with your own file path)
pdf_path = r"C:\Users\samee\OneDrive\Desktop\NER\financereport.pdf"


# 1️⃣ Extract text from PDF
def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    return text


# 2️⃣ Extract email addresses
def extract_emails(text):
    return sorted(set(re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', text)))


# 3️⃣ Extract phone numbers — handles formats like +91-9944332211
def extract_phone_numbers(text):
    phone_pattern = re.compile(r'\+?\d{1,3}[-\s]?\d{10}')
    matches = re.findall(phone_pattern, text)
    return sorted(set(matches))


# 4️⃣ Extract names using SpaCy + Regex filtering
def extract_names(text):
    # (a) Regex: capture structured patterns like "Name: Suresh Menon"
    regex_names = re.findall(r'Name[:\-]?\s*([A-Z][a-z]+\s[A-Z][a-z]+)', text)

    # (b) NER-based detection
    doc = nlp(text)
    spacy_names = [ent.text.strip() for ent in doc.ents if ent.label_ == "PERSON"]

    # (c) Combine both
    combined_names = set(regex_names + spacy_names)

    # (d) Filter out unwanted keywords
    exclude_words = {
        "Email", "E-mail", "Mail", "Phone", "Contact",
        "Number", "Address", "Manager", "CEO", "Director"
    }

    clean_names = [
        name for name in combined_names
        if name not in exclude_words and not re.match(r'^\d+$', name)
    ]

    return sorted(set(clean_names))


# 5️⃣ Main logic
if __name__ == "__main__":
    text = extract_text_from_pdf(pdf_path)

    emails = extract_emails(text)
    phones = extract_phone_numbers(text)
    names = extract_names(text)

    print("\n📘 Extracted Information:")
    print("=" * 50)
    print("👤 Names:")
    for n in names:
        print(" -", n)

    print("\n📧 Emails:")
    for e in emails:
        print(" -", e)

    print("\n📞 Phone Numbers:")
    for p in phones:
        print(" -", p)

    print("=" * 50)
