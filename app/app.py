import events
from flask import Flask
from flask import render_template

app = Flask(__name__)
db = events.initialize()

@app.route('/')
def index(title='HIV Timeline'):
	timelineJSON = events.jsonTable()
	return render_template("index.html", title=title, timelineJSON=timelineJSON)

@app.route('/about')
def about(title='About Us'):
	return render_template("about.html", title=title)

@app.route('/support')
def support(title='Services | Community Support'):
	return render_template("support.html", title=title)

@app.route('/testing')
def testing(title='Services | Testing'):
	return render_template("testing.html", title=title)

@app.route('/aboutHIV')
def abouthiv(title='Information | About HIV'):
	return render_template("abouthiv.html", title=title)

@app.route('/prevention')
def prevention(title='Information | Prevention'):
	return render_template("prevention.html", title=title)

@app.route('/videos')
def videos(title='Information | Videos'):
	return render_template("videos.html", title=title)

@app.route('/partners')
def partners(title='Community Partners'):
	return render_template("partners.html", title=title)

@app.route('/advocacy')
def advocacy(title='Get Involved | Advocacy'):
	return render_template("advocacy.html", title=title)

@app.route('/volunteer')
def volunteer(title='Get Involved | Volunteer'):
	return render_template("volunteer.html", title=title)

@app.route('/classes')
def classes(title='Get Involved | Classes'):
	return render_template("classes.html", title=title)

if __name__ == '__main__':
	#App can be rendered at -> localhost:5000 or 127.0.0.1:5000
	app.run(debug=True)
