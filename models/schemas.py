from pydantic import BaseModel
from typing import List, Dict

class TextIn(BaseModel):
    text: str

class NERResponse(BaseModel):
    text: str
    entities: List[Dict[str, str]]

