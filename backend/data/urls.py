from django.urls import path
from . import views

urlpatterns = [
    path('all_users/' , views.getData,name='Users List'),
    path('users_stats/' , views.userStats,name='Users Stats'),
    path('user_details/' , views.userDetails,name='User Details'),
    path('update_user/' , views.updateUser,name='Update User'),
    path('add/' , views.insertData, name="Insert into Database"),
    # Form Data
    path('addformdata/' , views.insertFormData, name="Insert data into Form Collection"),
    path('viewformdata/' , views.viewFormData, name="Form data details"),
    path('updateformdata/' , views.updateFormData, name="Update form data details"),
    path('deleteformdata/' , views.deleteFormData, name="Delete form data details"),
    path('forms_stats/' , views.formStats, name="Forms Data"),
    path('update_form_status/' , views.changeFormStatus, name="Completed Form"),
    # Fiduciary Form Data
    path('addfiduciarydata/' , views.insertFiduciaryData, name="Insert data into Fiduciary Collection"),
    path('viewfiduciarydata/' , views.viewFormData, name="Fiduciary data details"),
    path('updatefiduciarydata/' , views.updateFiduciaryData, name="Update fiduciary data details"),
    path('deletefiduciarydata/' , views.deleteFormData, name="Delete fiduciary data details"),
    path('filedownload/' , views.sampleFile, name="Download file"),
    # Investment Planning
    path('add_investment_planning_data/' , views.insertInvestmentPlanningData, name="Insert data into Investment Planning Collection"),
    path('view_investment_planning_data/' , views.viewInvestmentPlanningData, name="Investment Planning data details"),
    path('update_investment_planning_data/' , views.updateInvestmentPlanningData, name="Investment Planning data details"),
    # Risk Planning
    path('add_risk_planning_data/' , views.insertRiskPlanningData, name="Insert data into Risk Planning Collection"),
    path('view_risk_planning_data/' , views.viewRiskPlanningData, name="Risk Planning data details"),
    path('update_risk_planning_data/' , views.updateRiskPlanningData, name="Risk Planning data details"),
    # Assurance Investment
    path('add_assurance_investment_data/' , views.insertAssuranceInvestmentData, name="Insert data into Assurance Investment Collection"),
    path('view_assurance_investment_data/' , views.viewAssuranceInvestmentData, name="Assurance Investment data details"),
    path('update_assurance_investment_data/' , views.updateAssuranceInvestmentData, name="Assurance Investment data details"),
    # Assurance Risk
    path('add_assurance_risk_data/' , views.insertAssuranceRiskData, name="Insert data into Assurance Risk Collection"),
    path('view_assurance_risk_data/' , views.viewAssuranceRiskData, name="Assurance Risk data details"),
    path('update_assurance_risk_data/' , views.updateAssuranceRiskData, name="Assurance Risk data details"),
    # Assurance Risk
    path('add_employee_benefits_data/' , views.insertEmployeeBenefitsData, name="Insert data into Assurance Risk Collection"),
    path('view_employee_benefits_data/' , views.viewEmployeeBenefitsData, name="Assurance Risk data details"),
    path('update_employee_benefits_data/' , views.updateEmployeeBenefitsData, name="Assurance Risk data details"),
    # Gap Cover
    path('add_gap_cover_data/' , views.insertGapCoverData, name="Insert data into Gap Cover Collection"),
    path('view_gap_cover_data/' , views.viewGapCoverData, name="Gap Cover data details"),
    path('update_gap_cover_data/' , views.updateGapCoverData, name="Gap Cover data details"),
    # Short Term Personal
    path('add_short_term_personal_data/' , views.insertShortTermInsurancePersonalData, name="Insert data into Short Term Personal Collection"),
    path('view_short_term_personal_data/' , views.viewShortTermInsurancePersonalData, name="Short Term Personal data details"),
    path('update_short_term_personal_data/' , views.updateShortTermInsurancePersonalData, name="Short Term Personal data details"),
    # Short Term Commerical
    path('add_short_term_commerical_data/' , views.insertShortTermInsuranceCommericalData, name="Insert data into Short Term Commerical Collection"),
    path('view_short_term_commerical_data/' , views.viewShortTermInsuranceCommericalData, name="Short Term Commerical data details"),
    path('update_short_term_commerical_data/' , views.updateShortTermInsuranceCommericalData, name="Short Term Commerical data details"),
]