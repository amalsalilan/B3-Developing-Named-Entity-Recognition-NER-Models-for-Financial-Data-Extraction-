
from docling.document_converter import DocumentConverter
import re
import spacy

GENERIC_EMAILS = {'info', 'contact', 'support', 'admin', 'help', 'cdc'}
PHONE_REGEX = r'(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})'
EMAIL_REGEX = r'\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b'


REJECT_TERMS = {
    'center', 'excel', 'renovation', 'project', 'warehouse',
    'event', 'associate', 'intern', 'sales', 'department',
    'office', 'auditor', 'consultant', 'developer', 'keyholder',
    'remodeling', 'deli', 'catering', 'counselor', 'voucher'
}


HEADER_WORDS = {
    'WORK', 'EXPERIENCE', 'SKILLS', 'INTERESTS', 'EDUCATION', 'PROJECT',
    'TRAINING', 'CERTIFICATIONS', 'AWARDS', 'ACTIVITIES', 'CAREER',
    'EMAIL', 'MARITAL', 'STATUS', 'ID', 'JOURNAL', 'EXECUTIVE'
}


REJECT_NAMES = {
    "Kreischer Miller", "Aramark Catering", "Camp Counselor",
    "EMAIL ID:-", "Journal Vouchers", "EXECUTIVE-SALES ACCOUNTING",
    "Marital Status", "Anil Vihar", "Khora Colony"
}


def looks_like_real_name(name):
    if any(ch.isdigit() for ch in name):
        return False
    if any(sym in name for sym in "-:()[]"):
        return False
    words = name.split()
    if not (2 <= len(words) <= 4):
        return False
    for w in words:
        if not (re.match(r'^[A-Z][a-z\.]+$', w) or re.match(r'^[A-Z]{2,}$', w)):
            return False
        if w.lower() in REJECT_TERMS:
            return False
        if w.upper() in HEADER_WORDS:
            return False
    if name in REJECT_NAMES:
        return False
    return True


def extract_names(doc):
    nlp = spacy.load("en_core_web_sm")
    final, seen = [], set()

    for block in doc.texts:
        for line in block.text.splitlines():
            line = " ".join(line.strip().split())
            if not line or line in seen or line in REJECT_NAMES:
                continue


            words = line.split()
            if any(w.upper() in HEADER_WORDS for w in words):
                continue


            if 2 <= len(words) <= 4 and all(w.isupper() for w in words):
                if looks_like_real_name(line):
                    seen.add(line)
                    final.append(line)
                    continue


            doc_ents = nlp(line)
            for ent in doc_ents.ents:
                if ent.label_ == "PERSON":
                    name = ent.text.strip()
                    if name not in seen and looks_like_real_name(name):
                        seen.add(name)
                        final.append(name)

    return final

def extract_emails(text):
    seen, emails = set(), []
    for e in re.findall(EMAIL_REGEX, text):
        local = e.split("@")[0].lower()
        if local not in GENERIC_EMAILS and e not in seen:
            emails.append(e)
            seen.add(e)
    return emails

def extract_phones(text):
    seen, phones = set(), []
    for num in re.findall(PHONE_REGEX, text):
        d = re.sub(r'\D', '', num)
        if 10 <= len(d) <= 13 and d not in seen and d != "6104362501":
            phones.append(d)
            seen.add(d)
    return phones


if __name__ == "__main__":
    pdf_file = "accFinance.pdf"
    converter = DocumentConverter()
    doc = converter.convert(pdf_file).document


    combined_text = "\n".join([block.text for block in doc.texts])

    names = extract_names(doc)
    emails = extract_emails(combined_text)
    phones = extract_phones(combined_text)

    print("Names:", names)
    print("Emails:", emails)
    print("Phone Numbers:", phones)
