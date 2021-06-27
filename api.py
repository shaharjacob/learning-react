import os
from flask import Flask, render_template, jsonify, request

from utils import get_maximum_weighted_match, get_nodes_for_app, get_edges_for_app

app = Flask(__name__)


# # we can render dict, tuple, or string
# @app.route("/")
# def hello_world():
#     return "Hello World"

# @app.route("/hello-world-string")
# def hello_world2():
#     return "Hello World 2"

# @app.route("/hello-world-dict")
# def hello_world3():
#     return {"key": "value"}

# # we can render html syntax (tag language)
# @app.route("/html-syntax")
# def html_syntax():
#     return """
#     <table border="1">
#         <tr>
#             <td>000</td>
#             <td>111</td>
#         </tr>
#         <tr>
#             <td>222</td>
#             <td>333</td>
#         </tr>
#     </table>
#     """

# # we can render html page
# @app.route("/html-page")
# def html_page():
#     return render_template("example.html")


# @app.route("/query", methods=["GET", 'POST'])
# def query():
#     param1 = request.args.get('param1')
#     param2 = request.args.get('param2')
#     return {
#         "param1": param1,
#         "param2": param2
#     }


# @app.route("/api", methods=["GET", 'POST'])
# def api():
#     param1 = request.args.get('param1')
#     param2 = request.args.get('param2')
#     # print("I'm here!!!")
#     return jsonify({
#         "my_string": f"{param1} {param2}",
#     })


# @app.route("/final-example", methods=["GET", "POST"])
# def final_example():
#     # left_side = request.args.get('left').split(',')
#     # right_side = request.args.get('right').split(',')

#     left_side = [
#         "earth revolve around the sun",
#         "earth circle around the sun",
#         "earth is far away from the sun",
#         "earh is smaller then the sun",
#         "sun is red",
#         "the color of earth is blue",
#         "this is a workshop in react",
#     ]

#     right_side = [
#         "earth orbit the sun",
#         "earth turn around the sun",
#         "earth is blue",
#         "no good match"
#     ]

#     left_side_for_app = get_nodes_for_app(sentences=left_side, start_idx=0, x=200, group=0)
#     right_side_for_app = get_nodes_for_app(sentences=right_side, start_idx=len(left_side_for_app), x=800, group=1)

#     similatiry_edges = get_maximum_weighted_match(left_side, right_side)

#     return jsonify({
#         "nodes": left_side_for_app + right_side_for_app,
#         "edges": get_edges_for_app(similatiry_edges),
#     })



if __name__ == "__main__":
    os.environ['FLASK_ENV'] = 'development'
    app.run('localhost', port=5000, debug=True)