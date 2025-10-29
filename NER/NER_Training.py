import spacy
from spacy.tokens import DocBin
from tqdm import tqdm

nlp = spacy.blank("en")
db = DocBin()

import json
f = open(r"D:\NER\annotations.json")
TRAIN_DATA = json.load(f)

for text, annot in tqdm(TRAIN_DATA["annotations"]):
    doc = nlp.make_doc(text)
    ents = []
    for start, end, label in annot["entities"]:
        span = doc.char_span(start, end, label=label, alignment_mode="contract")
        if span is None:
            print("Skipping entity")
        else:
            ents.append(span)
    doc.ents = ents
    db.add(doc)
    db.to_disk("./training_data2.spacy")