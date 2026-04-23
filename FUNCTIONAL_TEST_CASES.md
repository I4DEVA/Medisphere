# MediSphere - Functional Test Cases

## Project Overview
MediSphere is a comprehensive healthcare management system with features for patient/doctor management, appointments, electronic health records (EHR), prescriptions, lab tests, and AI-based disease prediction.

---

## 1. **PATIENT AUTHENTICATION & REGISTRATION**

### TC-1.1: Patient Registration - Valid Data
**Objective**: Verify patient can register with valid credentials
- **Preconditions**: User on registration page
- **Steps**:
  1. Enter first name: "John"
  2. Enter last name: "Doe"
  3. Enter phone: "9876543210"
  4. Enter DOB: "1995-05-15"
  5. Enter email: "john.doe@example.com"
  6. Enter password: "SecurePass@123"
  7. Click "Register"
- **Expected Result**: ✅ Patient registered successfully, medID generated (MED2026-XXXX)
- **Actual Result**: 

### TC-1.2: Patient Registration - Duplicate Email
**Objective**: Verify system rejects duplicate email registration
- **Steps**:
  1. Register patient with email: "test@example.com"
  2. Attempt to register another patient with same email
- **Expected Result**: ❌ Error message: "Email already exists"
- **Actual Result**: 

### TC-1.3: Patient Registration - Missing Fields
**Objective**: Verify validation for all required fields
- **Steps**:
  1. Leave first name empty
  2. Fill other fields
  3. Click "Register"
- **Expected Result**: ❌ Error: "All fields are required"
- **Actual Result**: 

### TC-1.4: Patient Login - Valid Credentials
**Objective**: Verify patient can login with correct credentials
- **Steps**:
  1. Go to login page
  2. Select role: "Patient"
  3. Enter email: "john.doe@example.com"
  4. Enter password: "SecurePass@123"
  5. Click "Login"
- **Expected Result**: ✅ Patient logged in, redirected to dashboard
- **Actual Result**: 

### TC-1.5: Patient Login - Invalid Password
**Objective**: Verify system rejects incorrect password
- **Steps**:
  1. Enter valid email
  2. Enter wrong password
  3. Click "Login"
- **Expected Result**: ❌ Error message: "Invalid credentials"
- **Actual Result**: 

---

## 2. **DOCTOR AUTHENTICATION & REGISTRATION**

### TC-2.1: Doctor Login - Valid Credentials
**Objective**: Verify doctor can login with credentials
- **Steps**:
  1. Go to login page
  2. Select role: "Doctor"
  3. Enter email: "jonathan.reed@medisphere.com"
  4. Enter password from seed data
  5. Click "Login"
- **Expected Result**: ✅ Doctor logged in, doctor dashboard shown
- **Actual Result**: 

### TC-2.2: Doctor Registration - Valid Data
**Objective**: Verify doctor can register with valid credentials
- **Steps**:
  1. Enter first name: "Sarah"
  2. Enter last name: "Smith"
  3. Enter specialization: "Cardiologist"
  4. Enter email: "sarah.smith@medisphere.com"
  5. Enter password: "DocPass@123"
  6. Enter experience: "10 years"
  7. Click "Register"
- **Expected Result**: ✅ Doctor registered successfully
- **Actual Result**: 

---

## 3. **APPOINTMENTS**

### TC-3.1: Create Appointment - Valid Data
**Objective**: Verify patient can book appointment with valid data
- **Steps**:
  1. Login as patient
  2. Go to "Appointments" section
  3. Select doctor: "Dr. Jonathan Reed"
  4. Select date: "2026-04-20"
  5. Select time: "10:00 AM"
  6. Enter reason: "Consultation for digestive issues"
  7. Click "Book Appointment"
- **Expected Result**: ✅ Appointment created, confirmation message shown
- **Actual Result**: 

### TC-3.2: Create Appointment - Missing Fields
**Objective**: Verify validation for appointment fields
- **Steps**:
  1. Leave doctor selection empty
  2. Fill other fields
  3. Click "Book Appointment"
- **Expected Result**: ❌ Error: "All fields are required"
- **Actual Result**: 

### TC-3.3: View Appointments - Patient
**Objective**: Verify patient can view their appointments
- **Steps**:
  1. Login as patient
  2. Go to "Appointments"
- **Expected Result**: ✅ List of booked appointments displayed with dates, doctors, status
- **Actual Result**: 

### TC-3.4: View Appointments - Doctor
**Objective**: Verify doctor can view scheduled appointments
- **Steps**:
  1. Login as doctor
  2. Go to "Doctor Dashboard" → "Appointments"
- **Expected Result**: ✅ List of upcoming appointments with patient details
- **Actual Result**: 

### TC-3.5: Cancel Appointment
**Objective**: Verify appointment can be cancelled
- **Steps**:
  1. Login as patient
  2. Select active appointment
  3. Click "Cancel"
- **Expected Result**: ✅ Appointment cancelled, status updated
- **Actual Result**: 

### TC-3.6: Reschedule Appointment
**Objective**: Verify appointment can be rescheduled
- **Steps**:
  1. Select existing appointment
  2. Click "Reschedule"
  3. Select new date & time
  4. Click "Confirm"
- **Expected Result**: ✅ Appointment date/time updated
- **Actual Result**: 

---

## 4. **ELECTRONIC HEALTH RECORDS (EHR)**

### TC-4.1: Create EHR - Valid Data
**Objective**: Verify EHR record can be created with complete health history
- **Preconditions**: Patient medID available
- **Steps**:
  1. Login as patient
  2. Go to "Health Records"
  3. Enter past diagnoses: "Diabetes, Hypertension"
  4. Enter surgical history: "Appendectomy (2015)"
  5. Enter vaccinations: "COVID-19 (2 doses), Influenza"
  6. Click "Save"
- **Expected Result**: ✅ EHR created successfully
- **Actual Result**: 

### TC-4.2: Get EHR by Patient MedID
**Objective**: Verify EHR can be retrieved by patient ID
- **Steps**:
  1. Login as doctor
  2. Enter patient's medID: "MED2026-1234"
  3. Click "View Patient Records"
- **Expected Result**: ✅ Patient's full EHR displayed (diagnoses, surgeries, vaccinations)
- **Actual Result**: 

### TC-4.3: Update EHR
**Objective**: Verify EHR records can be updated
- **Steps**:
  1. Access existing EHR
  2. Add new diagnosis: "Migraine"
  3. Click "Update"
- **Expected Result**: ✅ EHR updated with new information
- **Actual Result**: 

### TC-4.4: Get EHR - Patient Not Found
**Objective**: Verify error when EHR for invalid medID
- **Steps**:
  1. Enter invalid medID: "INVALID123"
  2. Click "View"
- **Expected Result**: ❌ Error: "EHR not found for the given medID"
- **Actual Result**: 

---

## 5. **PRESCRIPTIONS**

### TC-5.1: Create Prescription - Valid Data
**Objective**: Verify doctor can create prescription
- **Steps**:
  1. Login as doctor
  2. Select patient appointment
  3. Click "Add Prescription"
  4. Enter medication: "Aspirin"
  5. Enter dosage: "500mg"
  6. Enter frequency: "Twice daily"
  7. Enter duration: "10 days"
  8. Click "Save"
- **Expected Result**: ✅ Prescription created successfully
- **Actual Result**: 

### TC-5.2: View Prescriptions - Patient
**Objective**: Verify patient can view their prescriptions
- **Steps**:
  1. Login as patient
  2. Go to "Prescriptions"
- **Expected Result**: ✅ List of prescriptions with medication details, dosage, duration
- **Actual Result**: 

### TC-5.3: View Prescriptions - Doctor
**Objective**: Verify doctor can view prescribed medications
- **Steps**:
  1. Login as doctor
  2. Go to "Prescriptions"
- **Expected Result**: ✅ List of prescriptions issued by doctor
- **Actual Result**: 

### TC-5.4: Download Prescription
**Objective**: Verify prescription can be downloaded as PDF
- **Steps**:
  1. Select prescription
  2. Click "Download PDF"
- **Expected Result**: ✅ PDF file downloaded with prescription details
- **Actual Result**: 

---

## 6. **LAB TESTS**

### TC-6.1: Request Lab Test - Valid Data
**Objective**: Verify lab test can be requested
- **Steps**:
  1. Login as patient
  2. Go to "Lab Tests"
  3. Select test type: "Blood Test - Complete Blood Count"
  4. Select collection date: "2026-04-16"
  5. Click "Request"
- **Expected Result**: ✅ Lab test request created, confirmation shown
- **Actual Result**: 

### TC-6.2: View Lab Test History
**Objective**: Verify patient can view lab test history
- **Steps**:
  1. Login as patient
  2. Go to "Lab Tests"
- **Expected Result**: ✅ List of previous and pending lab tests displayed
- **Actual Result**: 

### TC-6.3: Upload Lab Test Results
**Objective**: Verify lab staff can upload test results
- **Steps**:
  1. Login as lab owner
  2. Select pending test request
  3. Upload result file (PDF/Image)
  4. Enter result values: "Hemoglobin: 14.5 g/dL"
  5. Click "Submit"
- **Expected Result**: ✅ Lab results uploaded, patient notified
- **Actual Result**: 

### TC-6.4: View Lab Results - Patient
**Objective**: Verify patient can view lab results
- **Steps**:
  1. Login as patient
  2. Go to "Lab Tests"
  3. Select completed test
- **Expected Result**: ✅ Lab results displayed with values and reference ranges
- **Actual Result**: 

---

## 7. **EMERGENCY SERVICES**

### TC-7.1: Emergency Alert - Valid Data
**Objective**: Verify emergency alert can be sent
- **Steps**:
  1. Login as patient
  2. Click "Emergency" button
  3. Select emergency type: "Medical Emergency"
  4. Enter location: "Current Location"
  5. Enter description: "Severe chest pain"
  6. Click "Send Alert"
- **Expected Result**: ✅ Emergency alert sent, nearest hospitals notified
- **Actual Result**: 

### TC-7.2: Emergency Response - Emergency Services View
**Objective**: Verify emergency services receive alert
- **Steps**:
  1. Emergency alert received by system
  2. Emergency services access alert dashboard
- **Expected Result**: ✅ Emergency details displayed with patient location, symptoms
- **Actual Result**: 

### TC-7.3: Update Emergency Status
**Objective**: Verify emergency status can be updated
- **Steps**:
  1. Access emergency alert
  2. Click "Update Status" → "En Route"
- **Expected Result**: ✅ Status updated, patient notified
- **Actual Result**: 

---

## 8. **AI-BASED DISEASE PREDICTION (ML Service)**

### TC-8.1: Get Available Symptoms
**Objective**: Verify ML service returns available symptoms
- **Steps**:
  1. Navigate to "AI Recommendation"
  2. System calls `/api/ml/symptoms`
- **Expected Result**: ✅ List of symptoms displayed for selection
- **Actual Result**: 

### TC-8.2: Disease Prediction - Valid Symptoms
**Objective**: Verify disease prediction with selected symptoms
- **Steps**:
  1. Go to "AI Recommendation"
  2. Select symptoms: "Fever", "Cough", "Fatigue"
  3. Click "Get Prediction"
- **Expected Result**: ✅ Predicted disease shown with confidence (e.g., "COVID-19 - 87.5%")
- **Actual Result**: 

### TC-8.3: Doctor Recommendation
**Objective**: Verify appropriate doctor specialist recommended
- **Steps**:
  1. Get disease prediction for "Pneumonia"
- **Expected Result**: ✅ Recommended specialist: "Pulmonologist"
- **Actual Result**: 

### TC-8.4: Urgency Indicator
**Objective**: Verify urgency level shown correctly
- **Steps**:
  1. Predict disease: "COVID-19"
  2. Check urgency indicator
- **Expected Result**: ✅ Urgency shown as "High" (red indicator)
- **Actual Result**: 

### TC-8.5: All Disease Predictions
**Objective**: Verify all disease predictions shown for comparison
- **Steps**:
  1. Symptoms selected and predicted
  2. View all predictions
- **Expected Result**: ✅ All diseases with confidence percentages displayed
- **Actual Result**: 

### TC-8.6: ML Service Health Check
**Objective**: Verify ML service and model are running
- **Steps**:
  1. Open AI Recommendation page
  2. System calls `/api/ml/health`
- **Expected Result**: ✅ ML service status: "Running", Model: "Loaded"
- **Actual Result**: 

---

## 9. **DOCTOR FEATURES**

### TC-9.1: Doctor Dashboard - View Statistics
**Objective**: Verify doctor can see dashboard statistics
- **Steps**:
  1. Login as doctor
  2. Access dashboard
- **Expected Result**: ✅ Dashboard shows: total appointments, patients, prescriptions issued
- **Actual Result**: 

### TC-9.2: Doctor EHR Management
**Objective**: Verify doctor can view and update patient EHR
- **Steps**:
  1. Login as doctor
  2. Go to "EHR Management"
  3. Search patient by medID
  4. View and update EHR
- **Expected Result**: ✅ EHR accessible, updates saved
- **Actual Result**: 

### TC-9.3: Billing Management
**Objective**: Verify bills can be generated
- **Steps**:
  1. Login as doctor
  2. Go to "Billing"
  3. Select patient and appointment
  4. Generate bill
- **Expected Result**: ✅ Bill generated with appointment fees, consultations
- **Actual Result**: 

### TC-9.4: Communication Center
**Objective**: Verify doctor can communicate with patients
- **Steps**:
  1. Go to "Communication"
  2. Select patient
  3. Send message: "Your test results are ready"
- **Expected Result**: ✅ Message sent, patient receives notification
- **Actual Result**: 

---

## 10. **LAB OWNER FEATURES**

### TC-10.1: Lab Dashboard - View Requests
**Objective**: Verify lab owner can view test requests
- **Steps**:
  1. Login as lab owner
  2. Access dashboard
- **Expected Result**: ✅ List of pending lab test requests displayed
- **Actual Result**: 

### TC-10.2: Create Lab Test Request
**Objective**: Verify lab owner can create new test requests
- **Steps**:
  1. Click "Create Test"
  2. Select test type, patient, collection date
  3. Click "Save"
- **Expected Result**: ✅ Test request created in system
- **Actual Result**: 

### TC-10.3: Update Lab Test Status
**Objective**: Verify lab owner can update status
- **Steps**:
  1. Select test request
  2. Click "Mark as Complete"
  3. Upload results
- **Expected Result**: ✅ Status changed to "Completed", results stored
- **Actual Result**: 

---

## 11. **NOTIFICATIONS & COMMUNICATIONS**

### TC-11.1: Appointment Notification
**Objective**: Verify patient receives appointment confirmation
- **Steps**:
  1. Book appointment
- **Expected Result**: ✅ Notification received: "Appointment confirmed with Dr. [Name] on [Date]"
- **Actual Result**: 

### TC-11.2: Prescription Notification
**Objective**: Verify patient notified when prescription issued
- **Steps**:
  1. Doctor creates prescription
- **Expected Result**: ✅ Patient receives: "New prescription available from Dr. [Name]"
- **Actual Result**: 

### TC-11.3: Lab Result Notification
**Objective**: Verify patient notified when results available
- **Steps**:
  1. Lab uploads test results
- **Expected Result**: ✅ Patient receives: "Your lab results are ready"
- **Actual Result**: 

### TC-11.4: Emergency Notification
**Objective**: Verify emergency contacts notified
- **Steps**:
  1. Send emergency alert
- **Expected Result**: ✅ Nearby hospitals and emergency services notified
- **Actual Result**: 

---

## 12. **ROLE-BASED ACCESS CONTROL**

### TC-12.1: Patient Restricted Access
**Objective**: Verify patient cannot access doctor features
- **Steps**:
  1. Login as patient
  2. Attempt to access `/doctor` route
- **Expected Result**: ❌ Redirected to patient dashboard, access denied
- **Actual Result**: 

### TC-12.2: Doctor Restricted Access
**Objective**: Verify doctor cannot access lab owner features
- **Steps**:
  1. Login as doctor
  2. Attempt to access lab owner dashboard
- **Expected Result**: ❌ Access denied, unauthorized message shown
- **Actual Result**: 

### TC-12.3: Guest Access to Home Page
**Objective**: Verify unauthenticated users can access home page
- **Steps**:
  1. Don't login
  2. Access home URL
- **Expected Result**: ✅ Home page displayed with services, doctors list, testimonials
- **Actual Result**: 

---

## 13. **DATA VALIDATION & ERROR HANDLING**

### TC-13.1: Invalid Email Format
**Objective**: Verify email validation
- **Steps**:
  1. Try to register with invalid email: "notanemail"
- **Expected Result**: ❌ Error: "Invalid email format"
- **Actual Result**: 

### TC-13.2: Password Strength Validation
**Objective**: Verify password strength requirements
- **Steps**:
  1. Try password: "123"
- **Expected Result**: ❌ Error: "Password must be at least 8 characters"
- **Actual Result**: 

### TC-13.3: Phone Number Validation
**Objective**: Verify phone number format
- **Steps**:
  1. Enter phone: "12345"
- **Expected Result**: ❌ Error: "Invalid phone number"
- **Actual Result**: 

### TC-13.4: Date of Birth Validation
**Objective**: Verify DOB validation
- **Steps**:
  1. Enter future date as DOB
- **Expected Result**: ❌ Error: "DOB cannot be in future"
- **Actual Result**: 

---

## 14. **API ENDPOINTS - BACKEND**

### TC-14.1: Patient Sign-up Endpoint
**Objective**: Test POST /patient/signup
```bash
curl -X POST http://localhost:5000/patient/signup \
  -H "Content-Type: application/json" \
  -d '{
    "fname": "John",
    "lname": "Doe",
    "email": "john@example.com",
    "phNo": "9876543210",
    "DOB": "1995-05-15",
    "password": "SecurePass@123"
  }'
```
- **Expected Result**: ✅ Status 201, patient created with medID
- **Actual Result**: 

### TC-14.2: Create Appointment Endpoint
**Objective**: Test POST /appointment/create
```bash
curl -X POST http://localhost:5000/appointment/create \
  -H "Content-Type: application/json" \
  -d '{
    "doctorID": "doc001",
    "email": "john@example.com",
    "date": "2026-04-20",
    "time": "10:00 AM",
    "patientName": "John Doe",
    "phoneNO": "9876543210",
    "reasonVisit": "Consultation"
  }'
```
- **Expected Result**: ✅ Status 201, appointment created
- **Actual Result**: 

### TC-14.3: Get Appointments by Doctor
**Objective**: Test GET /appointment/bydoctor
```bash
curl -X POST http://localhost:5000/appointment/bydoctor \
  -H "Content-Type: application/json" \
  -d '{"doctorID": "doc001"}'
```
- **Expected Result**: ✅ Status 200, list of appointments returned
- **Actual Result**: 

### TC-14.4: Create EHR Endpoint
**Objective**: Test POST /ehr/create
```bash
curl -X POST http://localhost:5000/ehr/create \
  -H "Content-Type: application/json" \
  -d '{
    "medID": "MED2026-1234",
    "numberOfPastDiagnoses": 2,
    "pastDiagnoses": ["Diabetes", "Hypertension"],
    "numberOfSurgicalHistory": 1,
    "surgicalHistory": ["Appendectomy"],
    "numberOfVaccinations": 2,
    "vaccinations": ["COVID-19", "Influenza"]
  }'
```
- **Expected Result**: ✅ Status 201, EHR created
- **Actual Result**: 

### TC-14.5: ML Prediction Endpoint
**Objective**: Test POST /api/ml/predict
```bash
curl -X POST http://localhost:5000/api/ml/predict \
  -H "Content-Type: application/json" \
  -d '{
    "symptoms": {
      "fever": 1,
      "cough": 1,
      "fatigue": 1
    }
  }'
```
- **Expected Result**: ✅ Status 200, disease prediction with confidence
- **Actual Result**: 

---

## 15. **PERFORMANCE & LOAD TESTING**

### TC-15.1: Page Load Time
**Objective**: Verify critical pages load within acceptable time
- **Pages**: Home, Dashboard, Appointments
- **Expected Result**: ✅ Load time < 3 seconds
- **Actual Result**: 

### TC-15.2: ML Prediction Response Time
**Objective**: Verify ML service responds quickly
- **Steps**: Send prediction request, measure response time
- **Expected Result**: ✅ Response time < 2 seconds
- **Actual Result**: 

### TC-15.3: Concurrent Appointment Bookings
**Objective**: Test system with multiple simultaneous bookings
- **Steps**: 10 concurrent appointment booking requests
- **Expected Result**: ✅ All requests processed without conflicts
- **Actual Result**: 

---

## 16. **INTEGRATION TESTING**

### TC-16.1: Patient Registration → Login → Dashboard
**Objective**: Verify complete registration and login flow
- **Steps**:
  1. Register patient
  2. Login with credentials
  3. Access dashboard
- **Expected Result**: ✅ Complete flow successful
- **Actual Result**: 

### TC-16.2: Appointment Booking → Prescription → Lab Test
**Objective**: Verify complete appointment workflow
- **Steps**:
  1. Book appointment
  2. Doctor creates prescription after appointment
  3. Patient requests lab test from prescription
- **Expected Result**: ✅ All steps linked properly
- **Actual Result**: 

### TC-16.3: Symptom Check → ML Prediction → Doctor Booking
**Objective**: Verify AI recommendation to doctor booking flow
- **Steps**:
  1. Use AI symptom checker
  2. Get disease prediction
  3. Book appointment with recommended doctor
- **Expected Result**: ✅ Workflow smooth with recommended doctor pre-selected
- **Actual Result**: 

---

## 17. **DATABASE OPERATIONS**

### TC-17.1: Create Patient in Local DB
**Objective**: Verify patient data persistence in local JSON
- **Expected Result**: ✅ Patient data saved in `/backend/data/users.json`
- **Actual Result**: 

### TC-17.2: Update Patient Record
**Objective**: Verify patient data can be updated
- **Steps**: Modify patient email, verify in JSON file
- **Expected Result**: ✅ Changes persisted
- **Actual Result**: 

### TC-17.3: Seed Doctor Data
**Objective**: Verify seed doctors loaded on startup
- **Expected Result**: ✅ 7+ doctors available from `doctors-seed.json`
- **Actual Result**: 

---

## 18. **SECURITY TESTING**

### TC-18.1: SQL Injection Prevention
**Objective**: Verify system resistant to SQL injection
- **Steps**: Try email: `" OR "1"="1`
- **Expected Result**: ✅ Input validated, no injection executed
- **Actual Result**: 

### TC-18.2: XSS Prevention
**Objective**: Verify system prevents XSS attacks
- **Steps**: Enter script tag in name field: `<script>alert('XSS')</script>`
- **Expected Result**: ✅ Script not executed, sanitized
- **Actual Result**: 

### TC-18.3: Unauthorized Access
**Objective**: Verify unauthorized users cannot access private routes
- **Steps**: Access `/doctor` route without login
- **Expected Result**: ❌ Redirected to login
- **Actual Result**: 

---

## 19. **BROWSER COMPATIBILITY**

### TC-19.1: Chrome Compatibility
**Objective**: Verify application works in Chrome
- **Steps**: Access application in Chrome browser
- **Expected Result**: ✅ All features working, no console errors
- **Actual Result**: 

### TC-19.2: Firefox Compatibility
**Objective**: Verify application works in Firefox
- **Expected Result**: ✅ All features working properly
- **Actual Result**: 

### TC-19.3: Mobile Responsiveness
**Objective**: Verify UI adapts to mobile screen
- **Steps**: Access on mobile (or DevTools mobile view)
- **Expected Result**: ✅ UI responsive, readable, navigable on mobile
- **Actual Result**: 

---

## 20. **EDGE CASES & CORNER CASES**

### TC-20.1: Empty Database Scenarios
**Objective**: Verify system handles empty state
- **Steps**: Delete all appointments, check dashboard
- **Expected Result**: ✅ "No appointments found" message shown gracefully
- **Actual Result**: 

### TC-20.2: Very Long Input
**Objective**: Verify system handles very long inputs
- **Steps**: Enter 500+ character reason for visit
- **Expected Result**: ✅ Text accepted, no system crash
- **Actual Result**: 

### TC-20.3: Special Characters in Input
**Objective**: Verify system handles special characters
- **Steps**: Enter name with special chars: "O'Brien-Smith"
- **Expected Result**: ✅ Special chars accepted, stored correctly
- **Actual Result**: 

### TC-20.4: Rapid Successive Clicks
**Objective**: Verify system handles multiple rapid submissions
- **Steps**: Click "Book Appointment" button 10 times rapidly
- **Expected Result**: ✅ Only one appointment created, extra clicks ignored
- **Actual Result**: 

---

## Test Execution Summary

| Module | Total Tests | Passed | Failed | Pass % |
|--------|------------|--------|--------|--------|
| Patient Auth | 5 | | | |
| Doctor Auth | 2 | | | |
| Appointments | 6 | | | |
| EHR | 4 | | | |
| Prescriptions | 4 | | | |
| Lab Tests | 4 | | | |
| Emergency | 3 | | | |
| ML Service | 6 | | | |
| Doctor Features | 4 | | | |
| Lab Owner | 3 | | | |
| Notifications | 4 | | | |
| RBAC | 3 | | | |
| Validation | 4 | | | |
| API Endpoints | 5 | | | |
| Performance | 3 | | | |
| Integration | 3 | | | |
| Database | 3 | | | |
| Security | 3 | | | |
| Compatibility | 3 | | | |
| Edge Cases | 4 | | | |
| **TOTAL** | **86 Tests** | | | |

---

## Notes for Testers

✅ **Green checkmark** = Expected positive result
❌ **Red checkmark** = Expected negative/error result

**Backend Running On**: http://localhost:5000
**Frontend Running On**: http://localhost:5173
**ML Service Running On**: http://localhost:5001

**Important URLs**:
- Patient Dashboard: http://localhost:5173/patient/dashboard
- Doctor Dashboard: http://localhost:5173/doctor/dashboard
- Lab Owner: http://localhost:5173/lab
- AI Recommendation: http://localhost:5173/user/ai-recommendation

**Data Files Location**: `backend/data/` (JSON files for local development)

---

## Test Execution Guidelines

1. **Before Starting**: Ensure all 3 services are running (Backend, Frontend, ML Service)
2. **Test Data**: Use test data provided or create new test users
3. **Document Results**: Fill in "Actual Result" column after testing
4. **Report Issues**: Log any failures with screenshots and console errors
5. **Regression Testing**: Perform after each code change
6. **Coverage**: Aim for minimum 80% test coverage

---

*Last Updated: April 14, 2026*
*Test Suite Version: 1.0*
