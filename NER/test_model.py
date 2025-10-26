import spacy

nlp=spacy.load(r"D:\NER\output2\model-best")

doc=nlp("Market analysts at MorganEast Research, based in Singapore, forecast that the Indian digital lending sector will surpass ₹1.8 lakh crore in transaction volume by 2027, with Aurora capturing approximately 6.4% market share Tesla.")

for ent in doc.ents:
    print(ent.text,"|",ent.label_)
    