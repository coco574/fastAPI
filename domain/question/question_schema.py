import datetime
from datetime import date

import database

from pydantic import BaseModel

class Question(BaseModel):
    id : int
    subject : str
    content : str
    create_date : datetime.datetime