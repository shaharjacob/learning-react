import os
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# we can render dict, tuple, or string
@app.route("/hello-world-string")
def hello_world_string():
    return "Hello World"

@app.route("/hello-world-dict")
def hello_world_dict():
    return {"key": "value"}

# we can render html syntax (tag language)
@app.route("/html-syntax")
def html_syntax():
    return """
    <table border="1">
        <tr>
            <td>000</td>
            <td>111</td>
        </tr>
        <tr>
            <td>222</td>
            <td>333</td>
        </tr>
    </table>
    """

# we can render html page
@app.route("/html-page")
def html_page():
    return render_template("example.html")


@app.route("/query", methods=["GET", 'POST'])
def query():
    param1 = request.args.get('param1')
    param2 = request.args.get('param2')
    return {
        "param1": param1,
        "param2": param2
    }


@app.route("/api", methods=["GET", 'POST'])
def api():
    param1 = request.args.get('param1')
    param2 = request.args.get('param2')
    # print("I'm here!!!")
    return jsonify({
        "my_string": f"{param1} {param2}",
    })



if __name__ == "__main__":
    os.environ['FLASK_ENV'] = 'development'
    app.run('localhost', port=5000, debug=True)