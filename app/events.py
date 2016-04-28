import json
import os
from playhouse.shortcuts import model_to_dict, dict_to_model
from peewee import *

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
events_path = os.path.join(BASE_DIR, 'events.db')
db = SqliteDatabase(events_path)

class Event(Model):
	date = DateTimeField(default=0)
	category = TextField()
	title = TextField()
	photos = TextField()
	description = TextField()

	class Meta:
		database = db

def initialize():
	db.connect()
	db.create_tables([Event], safe=True)
	return db;

def insertRow(dataList):
	Event.create(
		date = dataList[0],
		category = dataList[1],
		title = dataList[2],
		photos = dataList[3],
		description = dataList[4]
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
	
