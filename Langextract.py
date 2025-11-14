import langextract as lx
import textwrap
import os
import webbrowser


prompt = textwrap.dedent("""
Extract the governing law clauses from the document using the exact text.

Each extraction should:
- Use the exact words from the document (no paraphrasing)
- Identify the clause title, purpose, and effect
- Include relevant keywords if mentioned
""")


examples = [
    lx.data.ExampleData(
        text=(
            "This Agreement shall be governed by and construed in accordance with the laws of the State of New York. "
            "Any disputes shall be resolved through arbitration under the rules of the International Chamber of Commerce."
        ),
        extractions=[
            lx.data.Extraction(
                extraction_class="governing_law_clause",
                extraction_text=(
                    "This Agreement shall be governed by and construed in accordance with the laws of the State of New York. "
                    "Any disputes shall be resolved through arbitration under the rules of the International Chamber of Commerce."
                ),
                attributes={
                    "clause_title": "Governing Law Clause",
                    "jurisdiction": "State of New York",
                    "dispute_resolution": "Arbitration under ICC rules",
                    "keywords": ["governing law", "jurisdiction", "arbitration"]
                }
            )
        ]
    )
]



input_text = """
This Agreement is made between Alpha Capital Partners (“Client”) and NovaFin Services (“Consultant”) on March 5, 2024.

1. Scope of Services: The Consultant shall provide financial advisory, risk management, and portfolio optimization services to the Client during the Term of this Agreement.

2. Payment Terms: The Client agrees to pay the Consultant a monthly retainer fee of USD 10,000. Invoices shall be issued on the first business day of each month and payable within fifteen (15) days of receipt. Late payments shall attract an interest rate of 1.5% per month.

3. Confidentiality: Both parties agree to maintain the confidentiality of all non-public financial data, projections, and proprietary methodologies shared under this Agreement. No information shall be disclosed to third parties without prior written consent.

4. Liability and Indemnification: The Consultant shall not be liable for any indirect or consequential damages arising from the use of financial recommendations. The Client agrees to indemnify and hold the Consultant harmless from any claims, losses, or damages caused by the Client’s misuse of advice or breach of obligations.

5. Intellectual Property: Any reports, models, or analytical frameworks developed during the engagement shall remain the property of the Consultant unless explicitly transferred in writing.

6. Termination: Either party may terminate this Agreement upon thirty (30) days’ written notice. Immediate termination may occur in cases of fraud, non-payment, or material breach of contract.

7. Compliance: The Consultant shall comply with all applicable financial regulations, anti-money laundering laws, and data protection policies during the engagement.

8. Governing Law: This Agreement shall be governed by and construed in accordance with the laws of the State of New York. Any disputes shall be resolved through arbitration under the rules of the International Chamber of Commerce.

9. Dispute Resolution: In the event of any dispute, the parties agree to first attempt mediation in good faith before proceeding to arbitration.

10. Entire Agreement: This document constitutes the entire understanding between the parties and supersedes all prior proposals, communications, or agreements, whether written or oral.

Signed on behalf of Alpha Capital Partners and NovaFin Services as of the date above.
"""


result = lx.extract(
    text_or_documents=input_text,
    prompt_description=prompt,
    examples=examples,
    model_id="llama3", 
)


for extraction in result.extractions:
    print(f"Class: {extraction.extraction_class}")
    print(f"Text: {extraction.extraction_text}")
    print(f"Attributes: {extraction.attributes}")
    print("-" * 60)


lx.io.save_annotated_documents([result], output_name="governing_law_results.jsonl")
html = lx.visualize(r"C:\Users\Ishant Singh\OneDrive\Desktop\new folder\SpringB\test_output\governing_law_results.jsonl")
with open(r"C:\Users\Ishant Singh\OneDrive\Desktop\new folder\SpringB\governing_law_visual.html", "w", encoding="utf-8") as f:
    f.write(html)

webbrowser.open(r"C:\Users\Ishant Singh\OneDrive\Desktop\new folder\SpringB\governing_law_visual.html")
