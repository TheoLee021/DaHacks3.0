from flask import Flask, jsonify, send_from_directory
import csv

app = Flask(__name__)

# CSV 파일에서 데이터를 읽고 JSON 형태로 변환
@app.route('/api/debris')
def get_debris():
    debris_data = []
    with open('data/debris.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            debris_data.append(row)
    return jsonify(debris_data)  # JSON 형태로 반환

# 정적 파일 제공 (index.html, styles.css, script.js)
@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

# 메인 페이지 라우트
@app.route('/')
def home():
    return send_from_directory('static', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
