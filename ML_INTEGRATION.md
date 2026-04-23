# MediSphere ML Integration Guide

## Complete MLIntegration Checklist

### ✅ What's Been Created

1. **ML Backend Service** (`ml_service/` folder)
   - `app.py` - Flask API with disease prediction endpoint
   - `train_model.py` - Model training script with sample data
   - `train_model_expanded.py` - Extended training with more examples
   - `requirements.txt` - Python dependencies
   - `Dockerfile` - Container setup for deployment
   - `README.md` - Backend documentation

2. **Frontend Components**
   - `AiRecommendationML.jsx` - ML-powered prediction UI
   - `AiRecommendationML.css` - Styling

3. **Documentation**
   - `SETUP_ML.md` - Complete setup guide
   - This file - Integration guide

---

## Step-by-Step Implementation

### Phase 1: Local Testing (30 minutes)

#### 1.1 Open Terminal and Setup ML Backend
```bash
# Navigate to workspace
cd c:\Users\Deva\OneDrive\Desktop\MediSphere-main

# Open Terminal (Ctrl + ` in VS Code)
# Create virtual environment
python -m venv ml_env
ml_env\Scripts\activate

# Navigate to ML service
cd ml_service

# Install dependencies
pip install -r requirements.txt

# Train model
python train_model.py

# Start Flask server
python app.py
```

**Expected Output:**
```
✓ Training Accuracy: 0.XX
✓ Testing Accuracy: 0.XX
✓ Model loaded successfully
 * Running on http://0.0.0.0:5001
```

#### 1.2 Test API (New Terminal)
```bash
# Test health endpoint
curl http://localhost:5001/api/ml/health

# Test symptoms endpoint  
curl http://localhost:5001/api/ml/symptoms

# Test prediction
curl -X POST http://localhost:5001/api/ml/predict ^
  -H "Content-Type: application/json" ^
  -d "{\"symptoms\": {\"fever\": 1, \"cough\": 1, \"fatigue\": 1, \"headache\": 0, \"body_ache\": 0, \"chills\": 0, \"sore_throat\": 1, \"nausea\": 0, \"difficulty_breathing\": 0, \"chest_pain\": 0}}"
```

#### 1.3 Start Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Then open `http://localhost:5173`

---

### Phase 2: Frontend Integration (Optional)

If you want to use the new ML component instead of Google Gemini:

#### 2.1 Update Environment
Create file: `frontend/.env.local`
```env
REACT_APP_ML_API_URL=http://localhost:5001
```

#### 2.2 Update App.jsx or Your Router
Import and use the new component:

```jsx
import AiRecommendationML from './components/AiRecommendationML';

// In your router/App:
<Route path="/disease-prediction" element={<AiRecommendationML />} />
```

#### 2.3 Test the Component
- Navigate to disease prediction page
- Select symptoms
- Click "Get AI Diagnosis & Recommendation"
- Should see disease prediction with confidence score

---

### Phase 3: Production Deployment

#### 3.1 Using Docker (Recommended)

```bash
# Navigate to workspace root
cd MediSphere-main

# Build ML service image
docker build -t medisphere-ml:latest ./ml_service

# Run container
docker run -p 5001:5001 medisphere-ml:latest

# Or use docker-compose
docker-compose up --build ml-service
```

#### 3.2 Cloud Deployment Options

**Option A: Heroku**
```bash
# Install Heroku CLI
# Login
heroku login

# Create app
heroku create medisphere-ml

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

**Option B: AWS EC2**
1. Launch EC2 instance (Ubuntu 20.04)
2. SSH into instance
3. Install Python & dependencies
4. Run Flask app with Gunicorn:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5001 app:app
```

**Option C: Google Cloud Run**
```bash
gcloud run deploy medisphere-ml \
  --source ./ml_service \
  --platform managed \
  --region us-central1
```

---

## API Reference

### 1. Health Check
```
GET /api/ml/health
Response: {"status": "running", "model_loaded": true, "timestamp": "..."}
```

### 2. Get Symptoms
```
GET /api/ml/symptoms
Response: {"available_symptoms": [...], "total_symptoms": 10}
```

### 3. Get Diseases
```
GET /api/ml/diseases
Response: {"available_diseases": [...], "total_diseases": 5}
```

### 4. Predict Disease
```
POST /api/ml/predict
Body: {"symptoms": {"fever": 1, "cough": 1, ...}}
Response: {
  "success": true, 
  "predicted_disease": "Flu",
  "confidence": 95.23,
  "specialty_recommended": "General Physician",
  "urgency": "medium",
  "all_predictions": {...}
}
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `ModuleNotFoundError: flask` | `pip install -r requirements.txt` |
| `Model not loaded` | `python train_model.py` |
| `CORS Error` | ML service running on different port? Check REACT_APP_ML_API_URL |
| Port 5001 in use | `netstat -ano \| findstr :5001` then kill process |
| Frontend can't connect | Make sure ML server running at configured URL |

---

## Next Steps to Improve

1. **Better Training Data**
   - Use [Kaggle Medical Datasets](https://www.kaggle.com/datasets)
   - Download real disease/symptom correlations
   - Replace sample data with actual medical data

2. **Enhanced Features**
   - Add patient age, gender, medical history
   - Implement confidence thresholds
   - Add disclaimer modal
   - Store predictions for analytics

3. **Model Improvements**
   - Try XGBoost or neural networks
   - Implement cross-validation
   - Add feature engineering
   - Ensemble multiple models

4. **Security**
   - Add API authentication (JWT)
   - Implement rate limiting
   - Add input validation
   - Use HTTPS for production

5. **Monitoring**
   - Add error logging
   - Set up application monitoring
   - Track prediction accuracy
   - Monitor API performance

---

## File Structure

```
MediSphere-main/
├── ml_service/
│   ├── app.py                      # Flask API
│   ├── train_model.py              # Training script
│   ├── train_model_expanded.py     # Extended training
│   ├── requirements.txt            # Dependencies
│   ├── Dockerfile                  # Container config
│   ├── disease_model.pkl           # Trained model (generated)
│   ├── feature_names.pkl           # Feature list (generated)
│   └── README.md                   # ML docs
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AiRecommendation.jsx      # Old Gemini-based
│   │   │   ├── AiRecommendationML.jsx    # New ML-based
│   │   │   └── AiRecommendationML.css    # Styling
│   │   └── App.jsx
│   ├── .env.local                  # Environment config
│   └── package.json
├── backend/
│   └── server.js
├── SETUP_ML.md                     # Setup documentation
└── ML_INTEGRATION.md               # This file
```

---

## Quick Reference Commands

```bash
# Start ML Backend
cd ml_service
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python train_model.py
python app.py

# Start Frontend (new terminal)
cd frontend
npm install
npm run dev

# Test API
curl http://localhost:5001/api/ml/health
curl http://localhost:5001/api/ml/symptoms

# With Docker
docker-compose up --build
```

---

## Support Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [scikit-learn Documentation](https://scikit-learn.org/)
- [React Documentation](https://react.dev/)
- [Medical AI Guide](https://www.ibm.com/cloud/blog/ai-healthcare)

---

**Last Updated:** April 2024
**Status:** Ready for Implementation ✅
