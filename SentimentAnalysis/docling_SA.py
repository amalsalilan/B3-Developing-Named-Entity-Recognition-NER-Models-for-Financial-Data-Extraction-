import re
import os
from collections import defaultdict
from docling.document_converter import DocumentConverter
from huggingface_hub import InferenceClient



def extract_html(
    input_path,
    output_dir=r"C:\Users\Ishant Singh\OneDrive\Desktop\new folder\SpringB\B3-Developing-Named-Entity-Recognition-NER-Models-for-Financial-Data-Extraction-\SentimentAnalysis"
):
    """Extracts text and HTML from DOCX/PDF using Docling."""
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    converter = DocumentConverter()
    res = converter.convert(input_path)
    doc = res.document

    text_content = doc.export_to_text()
    html_content = doc.export_to_html()

    html_output_path = os.path.join(output_dir, "output_html.html")
    with open(html_output_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    print(f" HTML extracted and saved to: {html_output_path}")
    return text_content, html_output_path



def create_hf_client():
    """Connect to Hugging Face Inference API."""
    token = os.environ.get("HF_TOKEN") or "hf_your_actual_token_here"
    if not token.startswith("hf_"):
        raise ValueError(" Invalid or missing Hugging Face token.")
    client = InferenceClient(provider="hf-inference", api_key=token)
    return client



def analyze_sentiment_clauses(text, client, model_name="ProsusAI/finbert"):
    """
    Performs clause-level sentiment analysis.
    Returns all three sentiment scores (positive, negative, neutral) per clause.
    """
    clauses = re.split(r'(?<=[.!?])\s+| but | however | although | though ', text, flags=re.IGNORECASE)
    clauses = [c.strip() for c in clauses if c.strip()]

    results = []
    for clause in clauses:
        res = client.text_classification(clause, model=model_name)

        # Extract all three scores
        scores = {"positive": 0.0, "negative": 0.0, "neutral": 0.0}
        if isinstance(res, list):
            for r in res:
                label = r.get("label", "").lower()
                score = r.get("score", 0.0)
                if label in scores:
                    scores[label] = score

        
        dominant = max(scores, key=scores.get)

        results.append({
            "clause": clause,
            "scores": scores,
            "dominant": dominant
        })

    return results



def generate_colored_html(results, output_html_path):
    """Generates an HTML visualization for clause-level sentiment."""
    color_map = {"positive": "#c8f7c5", "negative": "#d92e2e", "neutral": "#f2f2f2"}
    html = "<html><head><meta charset='utf-8'><title>Sentiment Visualization</title></head><body>"
    html += "<h2>Clause-level FinBERT Sentiment Visualization</h2><p>"

    for r in results:
        dom = r["dominant"]
        color = color_map.get(dom, "#f2f2f2")
        html += (
            f"<span style='background-color:{color}; padding:3px; margin:2px; border-radius:4px;'>"
            f"{r['clause']} "
            f"(<b>{dom.upper()}</b> → "
            f"P:{r['scores']['positive']:.2f}, "
            f"N:{r['scores']['negative']:.2f}, "
            f"Neu:{r['scores']['neutral']:.2f})</span><br>"
        )

    html += "</p></body></html>"

    output_path = os.path.splitext(output_html_path)[0] + "_sentiment.html"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)

    print(f" Sentiment visualization saved to: {output_path}")
    return output_path



def run_hf_finbert_pipeline(input_path):
    """Runs the entire sentiment pipeline."""
    if not os.path.exists(input_path):
        raise FileNotFoundError(f" File not found: {input_path}")

    print("🔄 Step 1: Extracting text and HTML...")
    text, html_path = extract_html(input_path)

    print("\n🔗 Step 2: Connecting to Hugging Face API...")
    client = create_hf_client()

    print("\n Step 3: Performing clause-level FinBERT sentiment analysis...")
    results = analyze_sentiment_clauses(text, client)

    # Print detailed per-clause results
    print("\n Clause-level Results:")
    for i, r in enumerate(results, 1):
        s = r["scores"]
        print(f"{i}. {r['clause']}")
        print(f"   POS:{s['positive']:.2f} | NEG:{s['negative']:.2f} | NEU:{s['neutral']:.2f} → Dominant: {r['dominant'].upper()}")

    # Compute overall averages
    avg_scores = defaultdict(float)
    for r in results:
        for k in r["scores"]:
            avg_scores[k] += r["scores"][k]
    for k in avg_scores:
        avg_scores[k] /= len(results)

    dominant_overall = max(avg_scores, key=avg_scores.get)

    print("\n Overall Document Sentiment:")
    print(f"Positive Avg: {avg_scores['positive']:.4f}")
    print(f"Negative Avg: {avg_scores['negative']:.4f}")
    print(f"Neutral  Avg: {avg_scores['neutral']:.4f}")
    print(f" Overall Sentiment: {dominant_overall.upper()}")

    sentiment_html = generate_colored_html(results, html_path)

    return avg_scores, dominant_overall, sentiment_html



if __name__ == "__main__":
    input_file = r"C:\Users\Ishant Singh\OneDrive\Desktop\new folder\SpringB\B3-Developing-Named-Entity-Recognition-NER-Models-for-Financial-Data-Extraction-\SentimentAnalysis\testing_data.docx"
    avg_scores, overall_label, html_path = run_hf_finbert_pipeline(input_file)
    
