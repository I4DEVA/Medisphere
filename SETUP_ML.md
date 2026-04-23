# ML Backend Setup & Deployment Guide

## Quick Start

### Option 1: Local Development (Recommended for Testing)

#### Step 1: Open Terminal and Navigate to ML Service
```bash
cd ml_service
```

#### Step 2: Create Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python -m venv venv
source venv/bin/activate
```

#### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

#### Step 4: Train the Model
```bash
python train_model.py
```
**Expected output:**
```
✓ Training Accuracy: 0.95
✓ Testing Accuracy: 0.92
✓ Model saved to ml_service\disease_model.pkl
✓ Features: ['fever', 'cough', 'fatigue', ...]
```

#### Step 5: Run Flask Server
```bash
python app.py
```
**Expected output:**
```
✓ Model loaded successfully
 * Running on http://0.0.0.0:5001
```

#### Step 6: Test the API
Open a new terminal and run:
```bash
curl -X GET http://localhost:5001/api/ml/health
```

---

## Option 2: Docker Deployment (Recommended for Production)

### Step 1: Create Dockerfile
Create file: `ml_service/Dockerfile`

```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Train model on startup
RUN python train_model.py

EXPOSE 5001

CMD ["python", "app.py"]
```

### Step 2: Create docker-compose.yml
In the root folder (MediSphere-main), create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  ml-service:
    build: ./ml_service
    ports:
      - "5001:5001"
    environment:
      - FLASK_ENV=production
      - FLASK_DEBUG=0
    volumes:
      - ./ml_service:/app
    networks:
      - medisphere-network

  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    environment:
      - REACT_APP_ML_API_URL=http://localhost:5001
    depends_on:
      - ml-service
    networks:
      - medisphere-network

  backend:
    # Your existing Node.js backend config here
    ports:
      - "5000:5000"
    networks:
      - medisphere-network

networks:
  medisphere-network:
    driver: bridge
```

### Step 3: Run with Docker
```bash
docker-compose up --build
```

---

## Environment Configuration

### Frontend (.env or .env.local)
Create file: `frontend/.env.local`

```env
# ML Service Configuration
REACT_APP_ML_API_URL=http://localhost:5001

# For Production
# REACT_APP_ML_API_URL=https://your-ml-service.com
```

### Backend (if integrating with Node.js)
Create file: `backend/.env`

```env
ML_SERVICE_URL=http://localhost:5001
```

---

## Testing the ML API

### Test 1: Health Check
```bash
curl http://localhost:5001/api/ml/health
```

### Test 2: Get Available Symptoms
```bash
curl http://localhost:5001/api/ml/symptoms
```

### Test 3: Get Available Diseases
```bash
curl http://localhost:5001/api/ml/diseases
```

### Test 4: Make Prediction (Using Postman or curl)
```bash
curl -X POST http://localhost:5001/api/ml/predict \
  -H "Content-Type: application/json" \
  -d '{
    "symptoms": {
      "fever": 1,
      "cough": 1,
      "fatigue": 1,
      "headache": 1,
      "body_ache": 0,
      "chills": 1,
      "sore_throat": 0,
      "nausea": 0,
      "difficulty_breathing": 0,
      "chest_pain": 0
    }
  }'
```

---

## Troubleshooting

### Issue: "ModuleNotFoundError: No module named 'flask'"
**Solution:**
```bash
pip install -r requirements.txt
```

### Issue: "Model not loaded" Error
**Solution:**
```bash
python train_model.py
```

### Issue: CORS Error in Frontend
**Solution:** Ensure Flask-CORS is installed and app.py has `CORS(app)`

### Issue: Port 5001 Already in Use
**Solution:**
```bash
# Windows
netstat -ano | findstr :5001
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5001
kill -9 <PID>
```

---

## Next Steps to Improve

1. **Expand Training Data**: Use Kaggle datasets for medical data
2. **Add More Symptoms**: Include additional symptoms for better accuracy
3. **Use Better Algorithms**: Try XGBoost or Neural Networks
4. **Production Deployment**: Deploy to cloud (AWS, Google Cloud, Azure)
5. **Add Authentication**: Secure API with JWT tokens
6. **Database Integration**: Store predictions for analytics

---

## Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [scikit-learn Guide](https://scikit-learn.org/)
- [Google Medical Datasets](https://www.google.com/search?q=medical+datasets+kaggle)
- [Docker Setup](https://docs.docker.com/)
