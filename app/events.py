import json
import os
from playhouse.shortcuts import model_to_dict, dict_to_model
from peewee import *

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
events_path = os.path.join(BASE_DIR, 'events.db')
db = SqliteDatabase(events_path)

class Event(Model):
	year = DateTimeField(default=0)
	deaths = IntegerField(default=0)
	health = TextField()
	international = TextField()
	political = TextField()
	social = TextField()
	celeb = TextField()

	class Meta:
		database = db

def initialize():
	db.connect()
	db.create_tables([Event], safe=True)
	return db;

def insertRow(dataList):
	Event.create(
		year = dataList[0],
		deaths = int(dataList[1].replace(',', '')),
		health = dataList[2],
		international = dataList[3],
		political = dataList[4],
		social = dataList[5],
		celeb = dataList[6]
		)

def displayTable():
	for event in Event.select():
		print(event)

def jsonTable():
	timelineJSON = []
	for event in Event.select():
		timelineJSON.append(json.dumps(model_to_dict(event)))
	return timelineJSON

if __name__ == '__main__':
	initialize()
	print(jsonTable())
	
