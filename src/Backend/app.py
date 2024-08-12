from flask import Flask, request, jsonify
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_ollama.llms import OllamaLLM

app = Flask(__name__)

# Initialize the model and chain
prompt = ChatPromptTemplate.from_messages([
    ('system', 'you are an efficient private assistant, give reply to each question efficiently, for every good answer you provide I will be happy'),
    ('user', 'question:{question}')
])
model = OllamaLLM(model="llama3.1")
output_parser = StrOutputParser()
chain = prompt | model | output_parser

@app.route('/ask', methods=['POST'])
def ask_question():
    # Get the question from the POST request
    data = request.json
    question = data.get('question', '')

    if not question:
        return jsonify({'error': 'No question provided'}), 400

    # Invoke the chain with the provided question
    try:
        res = chain.invoke({'question': question})
        return jsonify({'response': res}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("model online...\n")
    app.run(host='0.0.0.0', port=5000)
