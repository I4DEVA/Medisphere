<!-- ML Service Integration Guide -->

# ML Integration Complete ✅

## Overview
The ML service is now fully integrated with the MediSphere application, allowing disease prediction based on user symptoms through a machine learning model.

## Architecture

```
┌─────────────┐
│  Frontend   │
│ (React)     │
└──────┬──────┘
       │ HTTP Requests
       │ (Axios/Fetch)
       ↓
┌─────────────────────┐
│  Backend API        │
│  (Node/Express)     │
│  Port: 5000         │
└──────┬──────────────┘
       │ /api/ml routes
       │ (ml.route.js)
       ↓
┌─────────────────────┐
│  ML Service         │
│  (Python/Flask)     │
│  Port: 5001         │
└─────────────────────┘
```

## Running Services

### 1. Backend (Node.js) - Port 5000
```bash
npm run dev
```
✅ Already running

### 2. Frontend (React/Vite) - Port 5173
```bash
npm run dev --prefix frontend
```
✅ Already running

### 3. ML Service (Flask) - Port 5001
```bash
cd ml_service
python app.py
```
✅ Running at http://localhost:5001

## ML Service Endpoints

The ML service provides the following endpoints:

### 1. Health Check
- **Endpoint**: `GET /api/ml/health`
- **Description**: Check if ML service and model are running
- **Response**: `{ status: 'running', model_loaded: true, timestamp: '...' }`

### 2. Get Available Symptoms
- **Endpoint**: `GET /api/ml/symptoms`
- **Description**: Get list of all symptoms the model can predict
- **Response**: `{ available_symptoms: [...], total_symptoms: n, description: '...' }`

### 3. Get Available Diseases
- **Endpoint**: `GET /api/ml/diseases`
- **Description**: Get list of all diseases the model can predict
- **Response**: `{ available_diseases: [...], total_diseases: n }`

### 4. Predict Disease
- **Endpoint**: `POST /api/ml/predict`
- **Body**: 
  ```json
  {
    "symptoms": {
      "fever": 1,
      "cough": 1,
      "fatigue": 0,
      ...
    }
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "predicted_disease": "COVID-19",
    "confidence": 87.5,
    "specialty_recommended": "General Physician",
    "urgency": "high",
    "all_predictions": {
      "COVID-19": 87.5,
      "Flu": 10.2,
      ...
    },
    "timestamp": "2026-04-14T..."
  }
  ```

## Frontend Integration

### AI Recommendation Component
- **Location**: `frontend/src/components/AiRecommendationML.jsx`
- **Route**: `/user/ai-recommendation`
- **Features**:
  - Symptom selection
  - Disease prediction
  - Doctor recommendations based on predicted disease
  - Confidence scoring
  - Urgency indicators

### Configuration
- **API URL**: Configured in `frontend/.env`
  ```
  VITE_ML_API_URL=http://localhost:5000/api/ml
  ```

## Backend Integration

### ML Proxy Routes
- **Location**: `backend/routes/ml.route.js`
- **Mounted at**: `/api/ml`
- **Features**:
  - Proxies all ML service requests through the backend
  - Handles CORS automatically
  - Enriches responses with additional context
  - Error handling and logging

### Integration in Server
Updated `backend/server.js` to include:
```javascript
import MLroutes from './routes/ml.route.js';
app.use('/api/ml', MLroutes);
```

## Supported Diseases
The ML model can predict the following diseases:
1. COVID-19
2. Common Cold
3. Flu
4. Gastroenteritis
5. Pneumonia

## Doctor Recommendations
Based on the predicted disease, the system recommends appropriate medical specialists:
- **COVID-19** → General Physician (Urgency: High)
- **Common Cold** → General Physician (Urgency: Low)
- **Flu** → General Physician (Urgency: Medium)
- **Pneumonia** → Pulmonologist (Urgency: High)
- **Gastroenteritis** → Gastroenterologist (Urgency: Medium)

## Testing the Integration

### 1. Check ML Service Health
```bash
curl http://localhost:5001/api/ml/health
```

### 2. Get Symptoms
```bash
curl http://localhost:5000/api/ml/symptoms
```

### 3. Test Prediction via Backend
```bash
curl -X POST http://localhost:5000/api/ml/predict \
  -H "Content-Type: application/json" \
  -d '{
    "symptoms": {
      "fever": 1,
      "cough": 1,
      "fatigue": 1,
      "shortness_of_breath": 0
    }
  }'
```

### 4. Test in Frontend
- Navigate to: `http://localhost:5173/user/ai-recommendation`
- Select symptoms
- Click "Get Prediction"
- View recommended doctor and disease prediction

## Environment Variables

### Frontend (.env)
```
VITE_CLERK_PUBLISHABLE_KEY=...
MONGO_URL=...
PORT=5000
VITE_ML_API_URL=http://localhost:5000/api/ml
```

### Backend (.env)
- Optional: `ML_SERVICE_URL` (defaults to http://localhost:5001)

### ML Service (app.py)
- Runs on port 5001 by default
- Flask debug mode enabled

## Features Enabled

✅ Disease Prediction UI
✅ Symptom Selection
✅ Doctor Recommendations
✅ Confidence Scoring
✅ Urgency Indicators
✅ Backend Proxy Routes
✅ Error Handling
✅ CORS Support
✅ Real-time Predictions

## Next Steps (Optional)

1. **Train Custom Model**: Update `train_model.py` or `train_model_expanded.py` with your own dataset
2. **Add More Diseases**: Extend the disease list and doctor recommendations
3. **Improve UI**: Enhance the AiRecommendationML component styling
4. **Database Integration**: Store predictions in the database for history tracking
5. **User Authentication**: Link predictions to user profiles
6. **Analytics**: Track prediction accuracy and user feedback
7. **Production Deployment**: Use Gunicorn for Flask instead of development server

## Troubleshooting

### ML Service Not Starting
- Check if port 5001 is available: `netstat -ano | findstr :5001`
- Verify model files exist: `ml_service/disease_model.pkl` and `ml_service/feature_names.pkl`
- Check Flask installation: `pip install -r ml_service/requirements.txt`

### CORS Issues
- Ensure Flask-CORS is installed in the ML service
- Backend proxy routes handle CORS automatically

### Frontend Not Connecting
- Check `VITE_ML_API_URL` in `frontend/.env`
- Verify backend is running at `http://localhost:5000`
- Check browser console for error messages

## Files Modified/Created

- ✅ Created: `backend/routes/ml.route.js` - ML proxy routes
- ✅ Updated: `backend/server.js` - Added ML routes import and mounting
- ✅ Updated: `frontend/.env` - Updated ML API URL to backend proxy
- ✅ Existing: `frontend/src/components/AiRecommendationML.jsx` - Already integrated
- ✅ Existing: `ml_service/app.py` - Flask ML service
- ✅ Updated: `ml_service/requirements.txt` - Version constraints for compatibility

## Support

For issues or questions about the ML integration:
1. Check the logs in the terminal where services are running
2. Review browser developer console for client-side errors
3. Test individual endpoints using curl or Postman
4. Refer to ML_INTEGRATION.md and ML_QUICKSTART.md for additional details
