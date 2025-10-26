import spacy
from spacy.tokens import DocBin
from tqdm import tqdm
from spacy import displacy

nlp = spacy.blank("en") # load a new spacy model
db = DocBin() # create a DocBin object

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



nlp2=spacy.load(r"D:\NER\output\model-best")
doc2=nlp2("Market analysts at MorganEast Research, based in Singapore, forecast that the Indian digital lending sector will surpass ₹1.8 lakh crore in transaction volume by 2027, with Aurora capturing approximately 6.4% market share.")


for ent in doc.ents:
    print(ent.text,"|",ent.label_)
# displacy.serve(doc,style="ent")