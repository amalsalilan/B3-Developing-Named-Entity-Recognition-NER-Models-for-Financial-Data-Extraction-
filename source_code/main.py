from pathlib import Path

from bs4 import BeautifulSoup

from file_utils import docling_convert, sentiment_analysis


def classify_paragraph_sentiments(html_content: str):
    """Return soup, paragraph nodes, and their sentiment labels."""
    soup = BeautifulSoup(html_content, "html.parser")
    paragraph_nodes = []
    paragraph_texts = []
    for node in soup.find_all("p"):
        text = node.get_text(separator=" ", strip=True)
        if text:
            paragraph_nodes.append(node)
            paragraph_texts.append(text)

    sentiments = []
    for text in paragraph_texts:
        classification = sentiment_analysis(text) or []
        top_label = (
            max(classification, key=lambda item: item.get("score", 0))
            if classification
            else {"label": "neutral"}
        )
        sentiments.append(top_label.get("label", "neutral").lower())
    return soup, paragraph_nodes, sentiments


def apply_sentiment_highlights(soup, paragraph_nodes, sentiments):
    """Add inline colors to each paragraph node based on sentiment."""
    color_map = {
        "positive": "#d4edda",  # light green
        "negative": "#f8d7da",  # light red
    }
    for node, label in zip(paragraph_nodes, sentiments):
        color = color_map.get(label)
        if not color:
            continue
        existing_style = node.get("style", "")
        if existing_style and not existing_style.strip().endswith(";"):
            existing_style = existing_style.strip() + ";"
        node["style"] = f"{existing_style} background-color: {color};".strip()
    return soup.prettify()


def main():
    source = Path(
        "D:/Internships/Finance Insight/B3-Developing-Named-Entity-Recognition-NER-Models-for-Financial-Data-Extraction-/Source_code/news_file.pdf"
    )
    text, html = docling_convert(str(source))
    print("-----TEXT OUTPUT-----")
    print(text)
    print("-----HTML OUTPUT-----")
    print(html)

    soup, paragraph_nodes, sentiments = classify_paragraph_sentiments(html)
    highlighted_html = apply_sentiment_highlights(soup, paragraph_nodes, sentiments)

    output_path = Path("highlighted_output.html")
    output_path.write_text(highlighted_html, encoding="utf-8")
    print(f"Highlighted HTML saved to {output_path.resolve()}")


if __name__ == "__main__":
    main()
