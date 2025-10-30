# B3-Developing-Named-Entity-Recognition-NER-Models-for-Financial-Data-Extraction-

## Overview
This project focuses on developing Named Entity Recognition (NER) models specifically designed for extracting financial information from unstructured text data. The system leverages **Docling**, a powerful document processing and entity extraction framework, to identify and classify key financial entities such as organizations, monetary values, percentages, and more from various financial documents and news articles.

## Project Structure
```
.
├── Build-Document-to-Entity-Visualization-Pipeline                                 
│   ├── pipeline.ipynb                          
│   └── entities_output.html 
├── Text_Extraction/                              
│   ├── Data.pdf                                  
│   ├── Infy_Tasks.ipynb                          
│   └── SampleData.pdf                            
├── Train_NER_Models/                             
│   ├── Train_NER.ipynb                           
│   ├── config.cfg                                
│   ├── model-best/                               
│   ├── model-last/                               
│   └── training_data.spacy                       
├── NER_Synthetic_data.txt                        
├── annotations.json                              
└── NER__Intoduction_Report.pdf                   
```

## Key Features

### Financial Entity Recognition
- Identifies various financial entities including:
  - Organizations (ORG)
  - People (PEOPLE)
  - Monetary values (MONEY)
  - Stock information (STOCK)
  - Percentages (PERCENTAGE)
  - Dates (DATE)
  - Countries (COUNTRY)
  - And more financial-specific entities

### Document Processing with Docling
- **Docling Integration**: Utilizes the Docling framework for advanced document processing and entity extraction
- **PDF Processing**: Capable of extracting and processing text from PDF documents with high accuracy
- **Structured Output**: Converts unstructured financial documents into structured data with identified entities

### Model Training & Evaluation
- Custom NER model training scripts
- Performance evaluation metrics and visualization
- Model versioning and comparison

### Visualization
- Interactive entity visualization in documents
- Document-to-entity mapping
- Export capabilities for further analysis

## Requirements
- Python 3.8+
- spaCy 3.8.0+
- Docling 2.5.0+
- Jupyter Notebook

## Docling Integration
This project leverages [Docling](https://github.com/doclingjs/docling), a powerful document processing framework, for:
- Advanced text extraction from various document formats
- Entity recognition and classification
- Document structure analysis
- Multi-format output generation

Docling provides the foundation for our document processing pipeline, enabling efficient handling of financial documents and extraction of structured information.

## Getting Started
1. Install the required dependencies
   ```bash
   # Install Docling and core dependencies
   pip install docling
   ```

2. **For Model Training**
   - Open `Train_NER_Models/Train_NER.ipynb`
   - Follow the notebook to train and evaluate the NER model

3. **For Document Processing**
   - Open `Text_Extraction/Infy_Tasks.ipynb`
   - Use the notebook to process PDFs and extract entities using Docling

4. **For Visualization**
   - Explore `Build-Document-to-Entity-Visualization-Pipeline/Pipeline.ipynb`
   - This provides interactive visualization of extracted entities in documents

## Usage
### Training the Model
1. Prepare your training data in the required format (see `NER_Synthetic_data.txt` for reference)
2. Update the configuration in `config.cfg` if needed
3. Run the training process through the Jupyter notebook

### Extracting Entities
1. Place your PDF documents in the `Text_Extraction` directory
2. Use the provided notebooks to process the documents and extract entities

## Model Performance
The model's performance metrics and evaluation results can be found in the training notebook. The best performing model is saved in the `model-best` directory.

## License
This project is licensed under the terms of the [LICENSE](LICENSE) file.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## Contact
For any inquiries, please open an issue in the repository.
