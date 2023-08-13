from flask import Flask, jsonify, request
from flask_cors import CORS
from classes.Rive import Rive

app = Flask(__name__)
cors = CORS(app)
rive = Rive()

@app.route('/mob/reply', methods=['POST'])
def reply():
    content = request.get_json(force=True)
    user = 'local'
    print(content)
    result = {
        'status': 200,
        'message': "requisicao realizada com sucesso",
        'content': {
            'message': rive.reply(user, content.get('sentence'))
        }
    }
    return result


if __name__ == '__main__':
    app.run(debug=True, port=5000)