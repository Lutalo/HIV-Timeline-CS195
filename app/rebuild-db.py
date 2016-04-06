import events
import csv

def build():
	f = open('timeline.csv', encoding='utf-8')
	csv_f = csv.reader(f)

	for data in csv_f:
		events.insertRow(data)

if __name__ == '__main__':
	events.initialize()
	build()