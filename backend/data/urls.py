from django.urls import path, re_path
from django.contrib.auth.mixins import LoginRequiredMixin
from graphene_django.views import GraphQLView


class PrivateGraphQLView(LoginRequiredMixin, GraphQLView):
    pass

from . import views, printFormViews
from .importExportViews.ExportViews import exportViews
from .schema import schema
urlpatterns = [
    path('graphql/' , PrivateGraphQLView.as_view(graphiql=True, schema=schema)),
    path('excel/' , exportViews.exportData,name='excel'),
    path('sample/' , views.sample,name='sample'),
    # path('printStatus/' , views.printStatus,name='printStatus'),
    path('importCSV/' , views.importCSV,name='importCSV'),
    path('all_users/' , views.getData,name='Users List'),
    path('users_stats/' , views.userStats,name='Users Stats'),
    path('user_details/' , views.userDetails,name='User Details'),
    path('update_user/' , views.updateUser,name='Update User'),
    path('add/' , views.insertData, name="Insert into Database"),
    path('deleteUser/' , views.deleteUser, name="Delete User from Database"),
    # Form Data
    path('disclosures/' , views.DisclosuresList.as_view(), name="Insert data into Form Collection"),
    path('disclosures/<int:pk>/' , views.DisclosureAPI.as_view(), name="Insert data into Form Collection"),
    path('disclosures/product/' , views.DisclosuresProductsAPI.as_view(), name="Insert data into Form Collection"),
    path('addformdata/' , views.insertFormData, name="Insert data into Form Collection"),
    path('viewformdata/' , views.viewFormData, name="Form data details"),
    path('updateformdata/' , views.updateFormData, name="Update form data details"),
    path('deleteformdata/' , views.deleteFormData, name="Delete form data details"),
    path('forms_stats/trending_data/' , views.userTrendingData.as_view(), name="Forms Data"),
    path('forms_stats/' , views.formStats, name="Forms Data"),
    path('admin_form_list/' , views.adminFormList, name="Forms Data"),
    path('admin_form_stats/day/' , views.dayAdminStats, name="Forms Data"),
    path('admin_form_stats/custom/' , views.customAdminStats, name="Forms Data"),
    path('admin_form_stats/annual/' , views.annualAdminStats, name="Forms Data"),
    path('admin_form_stats/month/' , views.monthlyAdminStats, name="Forms Data"),
    path('admin_forms_stats/trending_data/' , views.adminTrendingData.as_view(), name="Forms Data"),
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
    # Medical
    path('add_medical_data/' , views.insertMedicalData, name="Insert data into Medical Collection"),
    path('view_medical_data/' , views.viewMedicalData, name="Medical data details"),
    path('update_medical_data/' , views.updateMedicalData, name="Medical data details"),
    # Short Term Personal
    path('add_short_term_personal_data/' , views.insertShortTermInsurancePersonalData, name="Insert data into Short Term Personal Collection"),
    path('view_short_term_personal_data/' , views.viewShortTermInsurancePersonalData, name="Short Term Personal data details"),
    path('update_short_term_personal_data/' , views.updateShortTermInsurancePersonalData, name="Short Term Personal data details"),
    # Short Term Commerical
    path('add_short_term_commerical_data/' , views.insertShortTermInsuranceCommericalData, name="Insert data into Short Term Commerical Collection"),
    path('view_short_term_commerical_data/' , views.viewShortTermInsuranceCommericalData, name="Short Term Commerical data details"),
    path('update_short_term_commerical_data/' , views.updateShortTermInsuranceCommericalData, name="Short Term Commerical data details"),
    # Risk Factors Commerical
    path('add_risk_factors_data/' , views.insertRiskFactorsData, name="Insert data into Risk Factors Collection"),
    path('view_risk_factors_data/' , views.viewRiskFactorsData, name="Risk Factors data details"),
    path('update_risk_factors_data/' , views.updateRiskFactorsData, name="Risk Factors data details"),
    path('view_high_risk_factors_data/' , views.viewHighRiskFactorsData, name="High Risk Factors data details"),
    path('change_high_risk_factors_status/' , views.approveDenyFormData, name="High Risk Factors data details"),
    # APIs for data with duplication
    path('update_linked_party_data/' , views.updateLinkedPartyData, name="Risk Factors Linked Part data details"),
    path('update_rp_ProductTaken_Data/' , views.update_rp_ProductTaken_Data, name="Risk Planning Product Taken data details"),
    path('update_ip_ProductTaken_Data/' , views.update_ip_ProductTaken_Data, name="Investment Planning Product Taken data details"),
    path('update_ar_ProductTaken_Data/' , views.update_ar_ProductTaken_Data, name="Assurance Risk Product Taken data details"),
    path('update_ai_ProductTaken_Data/' , views.update_ai_ProductTaken_Data, name="Assurance Investment Product Taken data details"),
    path('update_eb_coverData/' , views.update_eb_cover_Data, name="Employee Benefits cover data details"),
    path('update_stip_loss_Data/' , views.update_stip_loss_Data, name="STIP Loss Data"),
    # STIC Duplication
    path('update_stic_loss_Data/' , views.update_stic_loss_Data, name="STIC Loss Data"),
    path('update_stic_sec_1_Data/' , views.update_stic_sec_1_Data, name="STIC Sec 1 Fire Data"),
    path('update_stic_sec_2_Data/' , views.update_stic_sec_2_Data, name="STIC Sec 2 Fire Data"),
    path('update_stic_sec_3_Data/' , views.update_stic_sec_3_Data, name="STIC Sec 3 Fire Data"),
    path('update_stic_sec_4_Data/' , views.update_stic_sec_4_Data, name="STIC Sec 4 Fire Data"),
    path('update_stic_sec_5_Data/' , views.update_stic_sec_5_Data, name="STIC Sec 5 Fire Data"),
    path('update_stic_sec_6_Data/' , views.update_stic_sec_6_Data, name="STIC Sec 6 Fire Data"),
    path('update_stic_sec_7_Data/' , views.update_stic_sec_7_Data, name="STIC Sec 7 Fire Data"),
    path('update_stic_sec_8_Data/' , views.update_stic_sec_8_Data, name="STIC Sec 8 Fire Data"),
    path('update_stic_sec_9_Data/' , views.update_stic_sec_9_Data, name="STIC Sec 9 Fire Data"),
    path('update_stic_sec_10_Data/' , views.update_stic_sec_10_Data, name="STIC Sec 10 Fire Data"),
    path('update_stic_sec_11_Data/' , views.update_stic_sec_11_Data, name="STIC Sec 11 Fire Data"),
    path('update_stic_sec_12_Data/' , views.update_stic_sec_12_Data, name="STIC Sec 12 Fire Data"),
    path('update_stic_sec_13_Data/' , views.update_stic_sec_13_Data, name="STIC Sec 13 Fire Data"),
    path('update_stic_sec_14_Data/' , views.update_stic_sec_14_Data, name="STIC Sec 14 Fire Data"),
    path('update_stic_sec_15_Data/' , views.update_stic_sec_15_Data, name="STIC Sec 15 Fire Data"),
    path('update_stic_sec_16_Data/' , views.update_stic_sec_16_Data, name="STIC Sec 16 Fire Data"),
    path('update_stic_sec_17_Data/' , views.update_stic_sec_17_Data, name="STIC Sec 17 Fire Data"),
    path('update_stic_sec_18_Data/' , views.update_stic_sec_18_Data, name="STIC Sec 18 Fire Data"),
    path('update_stic_sec_19_Data/' , views.update_stic_sec_19_Data, name="STIC Sec 19 Fire Data"),
    path('update_stic_sec_20_Data/' , views.update_stic_sec_20_Data, name="STIC Sec 20 Fire Data"),
    path('update_stic_sec_21_Data/' , views.update_stic_sec_21_Data, name="STIC Sec 21 Fire Data"),
    # STIP Duplication
    path('update_stip_sec_hc_Data/' , views.update_stip_sec_hc_Data, name="STIP Sec HC Data"),
    path('update_stip_sec_build_Data/' , views.update_stip_sec_build_Data, name="STIP Sec Build Data"),
    path('update_stip_sec_addprop_Data/' , views.update_stip_sec_addprop_Data, name="STIP Sec Add Prop Data"),
    path('update_stip_sec_vehicle_Data/' , views.update_stip_sec_vehicle_Data, name="STIP Sec Vehicle Data"),
    path('update_stip_sec_motorc_Data/' , views.update_stip_sec_motorc_Data, name="STIP Sec Motor C Data"),
    path('update_stip_sec_waterc_Data/' , views.update_stip_sec_waterc_Data, name="STIP Sec Water C Data"),
    path('update_stip_sec_personal_Data/' , views.update_stip_sec_personal_Data, name="STIP Sec Personal LL Data"),
    path('update_stip_sec_legala_Data/' , views.update_stip_sec_legala_Data, name="STIP Sec Legal A Data"),
    # PDF Form
    path('pdf/' , printFormViews.pdfForm, name="PDF Form"),
    # Admin View
    path('viewAdminRFForm/' , views.viewAdminRFData, name="Admin View Form"),
    path('viewAdminROAForm/' , views.viewAdminROAData, name="Admin View Form"),
    path('viewAdminRPForm/' , views.viewAdminRPData, name="Admin View Form"),
    path('viewAdminIPForm/' , views.viewAdminIPData, name="Admin View Form"),
    path('viewAdminBARiskForm/' , views.viewAdminBARiskData, name="Admin View Form"),
    path('viewAdminEmpForm/' , views.viewAdminEmpData, name="Admin View Form"),
    path('viewAdminBAInvestmentForm/' , views.viewAdminBAInvestmentData, name="Admin View Form"),
    path('viewAdminFiduciaryForm/' , views.viewAdminFiduciaryData, name="Admin View Form"),
    path('viewAdminSTICForm/' , views.viewAdminSTICData, name="Admin View Form"),
    path('viewAdminSTIPForm/' , views.viewAdminSTIPData, name="Admin View Form"),
    path('viewAdminMedicalForm/' , views.viewAdminMedicalData, name="Admin View Form"),
    path('viewAdminGPForm/' , views.viewAdminGPData, name="Admin View Form"),
    # Other Values Duplication
    path('update_Risk_DC_Others_Data/' , views.update_Risk_DC_Others_Data, name="Risk_DC_Others Data"),
    path('update_Risk_DiC_Others_Data/' , views.update_Risk_DiC_Others_Data, name="Risk_DiC_Others Data"),
    path('update_Risk_DrC_Others_Data/' , views.update_Risk_DrC_Others_Data, name="Risk_DrC_Others Data"),
    path('update_AR_BnS_Others_Data/' , views.update_AR_BnS_Others_Data, name="AR_BnS_Others Data"),
    path('update_AR_KeyP_Others_Data/' , views.update_AR_KeyP_Others_Data, name="AR_KeyP_Others Data"),
    path('update_AR_SureNLia_Others_Data/' , views.update_AR_SureNLia_Others_Data, name="AR_SureNLia_Others Data"),
    path('update_AR_BusOvProt_Others_Data/' , views.update_AR_BusOvProt_Others_Data, name="AR_BusOvProt_Others Data"),
    path('update_AR_CLARedm_Others_Data/' , views.update_AR_CLARedm_Others_Data, name="AR_CLARedm_Others Data"),
    path('update_AR_DLARedm_Others_Data/' , views.update_AR_DLARedm_Others_Data, name="AR_DLARedm_Others Data"),
    path('update_AI_Others_Data/' , views.update_AI_Others_Data, name="AI_Others Data"),
]