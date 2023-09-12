from django.shortcuts import render
from rest_framework.decorators import APIView, api_view
from rest_framework.response import Response
from data.models import UserAccount, user_profile, regions
from .models import ComplianceDocument, GateKeeping, DocumentComments, arc_questions, arc, arc_question_header
from .serializers import ComplianceDocument_Serializer, GateKeeping_Serializer, DocumentComments_Serializer, arc_questions_Serializer, arc_Serializer, arc_question_header_Serializer
from rest_framework import status
from django.http import Http404

# Create your views here.

class updateDocumentStatus(APIView):

    def post(self, request, format=None):
        document = ComplianceDocument.objects.filter(id=request.data['dId'])

        if document.exists():
            document.update(status=request.data['status'])
            return Response(200)
        else:
            raise Http404
        
        

class ComplainceDocumentList(APIView):

    def get(self, request, format=None):
        data = ComplianceDocument.objects.filter(user=request.user.pk)
        if data.exists():
            kpis = {
                "total" : data.count(),
                "approved" : data.filter(status=1).count(),
                "rejected" : data.filter(status=2).count(),
                "referred" : data.filter(status=3).count(),
            }
            data = data.values()
            for row in data:
                advisor = UserAccount.objects.filter(pk=row['advisor'])
                if advisor.exists():
                    advisor = advisor.values().first()
                    row['advisor'] = f"{advisor['first_name']} ({advisor['email']})"
                else:
                    raise Http404
                dId = row['id']
                if row['status'] == 0:
                    gatekeeping = GateKeeping.objects.filter(document=dId)
                    if gatekeeping.exists():
                        gatekeeping = gatekeeping.values().latest('id')
                        row['last_review_date'] = gatekeeping['created_at']
                    else:
                        row['last_review_date'] = row['created_at']
                else:
                    row['last_review_date'] = row['created_at']

            return Response({"data":data, "kpis": kpis})
        else:
            kpis = {
                "total" : 0,
                "approved" : 0,
                "rejected" : 0,
                "referred" : 0,
            }
            return Response({"data":[], "kpis": kpis})

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        serializer = ComplianceDocument_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class ComplainceDocumentDetails(APIView):

    def get_object(self, pk):
        try:
            return ComplianceDocument.objects.filter(pk=pk)
        except ComplianceDocument.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        document = self.get_object(pk)
        document = document.values().first()
        advisor = UserAccount.objects.filter(pk=document['advisor']).values().first()
        # advisor_profile = user_profile.objects.filter(user=document['advisor']).values().first()
        document['advisor_name'] = f"{advisor['first_name']} {advisor['last_name']}"
        document['advisor_email'] = advisor['email']
        # document['bac'] = advisor_profile['bac']
        # document['advisor_region'] = advisor_profile['region']
        
        return Response(document)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = ComplianceDocument_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class GateKeepingList(APIView):

    def get(self, request, format=None):
        snippets = GateKeeping.objects.filter(advisor=request.user.pk)
        serializer = GateKeeping_Serializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        if "document_id" in newData:
            newData['document'] = newData['document_id']
        gatekeepingdata = GateKeeping.objects.filter(document=newData['document'])
        if gatekeepingdata.exists():
            version = gatekeepingdata.values().first()['version']
            version += 1
            newData['version'] = version
        else:
            newData['version'] = 1
        serializer = GateKeeping_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class GateKeepingDetails(APIView):

    def get_object(self, pk):
        try:
            return GateKeeping.objects.get(pk=pk)
        except GateKeeping.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        if ComplianceDocument.objects.filter(pk=pk).exists():
            data = GateKeeping.objects.filter(document=pk)
            if data.exists():
                versions = data.values()
                data = data.values().latest('id')
                return Response({"data": data, "versions" : versions}, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = GateKeeping_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class GateKeepingVersionDetail(APIView):

    def get_object(self, pk):
        try:
            return GateKeeping.objects.get(pk=pk)
        except GateKeeping.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = GateKeeping_Serializer(snippet)
        return Response(serializer.data)

class ARCList(APIView):

    def get(self, request, format=None):
        snippets = arc.objects.filter(advisor=request.user.pk)
        serializer = arc_Serializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        if "document_id" in newData:
            newData['document'] = newData['document_id']
        arcdata = arc.objects.filter(document=newData['document'])
        if arcdata.exists():
            version = arcdata.values().first()['version']
            version += 1
            newData['version'] = version
        else:
            newData['version'] = 1
        serializer = arc_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class arcDetails(APIView):

    def get_object(self, pk):
        try:
            return arc.objects.get(pk=pk)
        except arc.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        if ComplianceDocument.objects.filter(pk=pk).exists():
            data = arc.objects.filter(document=pk)
            if data.exists():
                versions = data.values('version')
                data = data.values().latest('id')
                return Response({"data": data, "versions" : versions}, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class arcVersionDetail(APIView):

    def get_object(self, pk):
        try:
            return arc.objects.get(pk=pk)
        except arc.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_Serializer(snippet)
        return Response(serializer.data)

class ComplianceDocumentSummary(APIView):
    def get(self, request, pk, format=None):
        user = request.user
        document = ComplianceDocument.objects.filter(pk=pk)
        if document.exists():
            document = document.values().first()
            gatekeepingDocument = GateKeeping.objects.filter(document=pk)
            if gatekeepingDocument.exists():
                gk = gatekeepingDocument
                gatekeepingDocument = gatekeepingDocument.values().latest('id')
                businessType = document['businessType']
                score = 0
                missing = "Following documents are missing as per assessment in latest version:\n"
                total = 0
                if businessType == 1 or (businessType > 4 and businessType < 9) :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['risk_portfolio'] + gatekeepingDocument['mandate'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa_type","roa","fna","application","quotation","risk_portfolio","mandate","replacement","replacement_type").latest('id')
                    for key in gkDocument:
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                            if key == "fica":
                                missing += "FICA (Clear ID), \n"
                            if key == "proof_of_screening":
                                missing += "Proof of Screening, \n"
                            if key == "dra":
                                missing += "DRA, \n"
                            if key == "letter_of_intro":
                                missing += "Introduction letter, \n"
                            if key == "authorisation_letter":
                                missing += "Authorisation letter, \n"
                            if key == "roa_type":
                                missing += "ROA Type, \n"
                            if key == "roa":
                                missing += "ROA (All sections completed), \n"
                            if key == "fna":
                                missing += "FNA (Appropriate FNA filed), \n"
                            if key == "application":
                                missing += "Application, \n"
                            if key == "quotation":
                                missing += "Quotation, \n"
                            if key == "risk_portfolio":
                                missing += "Risk Portfolio, \n"
                            if key == "mandate":
                                missing += "Mandate, \n"
                            if key == "replacement":
                                missing += "Replacement?, \n"
                            if key == "replacement_type":
                                missing += "Type of Replacement, \n"
                    score = round(score/total *100)
                if businessType == 3 or businessType == 4:
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa_type","roa","fna","application","quotation","replacement","replacement_type").latest('id')
                    for key in gkDocument:
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                            if key == "fica":
                                missing += "FICA (Clear ID), \n"
                            if key == "proof_of_screening":
                                missing += "Proof of Screening, \n"
                            if key == "dra":
                                missing += "DRA, \n"
                            if key == "letter_of_intro":
                                missing += "Introduction letter, \n"
                            if key == "authorisation_letter":
                                missing += "Authorisation letter, \n"
                            if key == "roa_type":
                                missing += "ROA Type, \n"
                            if key == "roa":
                                missing += "ROA (All sections completed), \n"
                            if key == "fna":
                                missing += "FNA (Appropriate FNA filed), \n"
                            if key == "application":
                                missing += "Application, \n"
                            if key == "quotation":
                                missing += "Quotation, \n"
                            if key == "risk_portfolio":
                                missing += "Risk Portfolio, \n"
                            if key == "mandate":
                                missing += "Mandate, \n"
                            if key == "replacement":
                                missing += "Replacement?, \n"
                            if key == "replacement_type":
                                missing += "Type of Replacement, \n"
                    score = round(score/total *100)
                if businessType == 5 or businessType == 9:
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa_type","roa","fna","application","quotation").latest('id')
                    for key in gkDocument:
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                            if key == "fica":
                                missing += "FICA (Clear ID), \n"
                            if key == "proof_of_screening":
                                missing += "Proof of Screening, \n"
                            if key == "dra":
                                missing += "DRA, \n"
                            if key == "letter_of_intro":
                                missing += "Introduction letter, \n"
                            if key == "authorisation_letter":
                                missing += "Authorisation letter, \n"
                            if key == "roa_type":
                                missing += "ROA Type, \n"
                            if key == "roa":
                                missing += "ROA (All sections completed), \n"
                            if key == "fna":
                                missing += "FNA (Appropriate FNA filed), \n"
                            if key == "application":
                                missing += "Application, \n"
                            if key == "quotation":
                                missing += "Quotation, \n"
                            if key == "risk_portfolio":
                                missing += "Risk Portfolio, \n"
                            if key == "mandate":
                                missing += "Mandate, \n"
                            if key == "replacement":
                                missing += "Replacement?, \n"
                            if key == "replacement_type":
                                missing += "Type of Replacement, \n"
                    score = round(score/total *100)
                if businessType == 12:
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement'] + gatekeepingDocument['replacement_type']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa_type","roa","fna","application","quotation","replacement","replacement_type").latest('id')
                    for key in gkDocument:
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                            if key == "fica":
                                missing += "FICA (Clear ID), \n"
                            if key == "proof_of_screening":
                                missing += "Proof of Screening, \n"
                            if key == "dra":
                                missing += "DRA, \n"
                            if key == "letter_of_intro":
                                missing += "Introduction letter, \n"
                            if key == "authorisation_letter":
                                missing += "Authorisation letter, \n"
                            if key == "roa_type":
                                missing += "ROA Type, \n"
                            if key == "roa":
                                missing += "ROA (All sections completed), \n"
                            if key == "fna":
                                missing += "FNA (Appropriate FNA filed), \n"
                            if key == "application":
                                missing += "Application, \n"
                            if key == "quotation":
                                missing += "Quotation, \n"
                            if key == "risk_portfolio":
                                missing += "Risk Portfolio, \n"
                            if key == "mandate":
                                missing += "Mandate, \n"
                            if key == "replacement":
                                missing += "Replacement?, \n"
                            if key == "replacement_type":
                                missing += "Type of Replacement, \n"
                    score = round(score/total *100)
                if businessType == 10 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa_type'] + gatekeepingDocument['roa']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa_type","roa").latest('id')
                    for key in gkDocument:
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                            if key == "fica":
                                missing += "FICA (Clear ID), \n"
                            if key == "proof_of_screening":
                                missing += "Proof of Screening, \n"
                            if key == "dra":
                                missing += "DRA, \n"
                            if key == "letter_of_intro":
                                missing += "Introduction letter, \n"
                            if key == "authorisation_letter":
                                missing += "Authorisation letter, \n"
                            if key == "roa_type":
                                missing += "ROA Type, \n"
                            if key == "roa":
                                missing += "ROA (All sections completed), \n"
                            if key == "fna":
                                missing += "FNA (Appropriate FNA filed), \n"
                            if key == "application":
                                missing += "Application, \n"
                            if key == "quotation":
                                missing += "Quotation, \n"
                            if key == "risk_portfolio":
                                missing += "Risk Portfolio, \n"
                            if key == "mandate":
                                missing += "Mandate, \n"
                            if key == "replacement":
                                missing += "Replacement?, \n"
                            if key == "replacement_type":
                                missing += "Type of Replacement, \n"
                    score = round(score/total *100)
                if businessType == 11 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['application']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","application").latest('id')
                    for key in gkDocument:
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                            if key == "fica":
                                missing += "FICA (Clear ID), \n"
                            if key == "proof_of_screening":
                                missing += "Proof of Screening, \n"
                            if key == "dra":
                                missing += "DRA, \n"
                            if key == "letter_of_intro":
                                missing += "Introduction letter, \n"
                            if key == "authorisation_letter":
                                missing += "Authorisation letter, \n"
                            if key == "roa_type":
                                missing += "ROA Type, \n"
                            if key == "roa":
                                missing += "ROA (All sections completed), \n"
                            if key == "fna":
                                missing += "FNA (Appropriate FNA filed), \n"
                            if key == "application":
                                missing += "Application, \n"
                            if key == "quotation":
                                missing += "Quotation, \n"
                            if key == "risk_portfolio":
                                missing += "Risk Portfolio, \n"
                            if key == "mandate":
                                missing += "Mandate, \n"
                            if key == "replacement":
                                missing += "Replacement?, \n"
                            if key == "replacement_type":
                                missing += "Type of Replacement, \n"
                    score = round(score/total *100)
                if businessType == 13 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra']
                    gkDocument = gk.values("fica","proof_of_screening","dra").latest('id')
                    for key in gkDocument:
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                            if key == "fica":
                                missing += "FICA (Clear ID), \n"
                            if key == "proof_of_screening":
                                missing += "Proof of Screening, \n"
                            if key == "dra":
                                missing += "DRA, \n"
                            if key == "letter_of_intro":
                                missing += "Introduction letter, \n"
                            if key == "authorisation_letter":
                                missing += "Authorisation letter, \n"
                            if key == "roa_type":
                                missing += "ROA Type, \n"
                            if key == "roa":
                                missing += "ROA (All sections completed), \n"
                            if key == "fna":
                                missing += "FNA (Appropriate FNA filed), \n"
                            if key == "application":
                                missing += "Application, \n"
                            if key == "quotation":
                                missing += "Quotation, \n"
                            if key == "risk_portfolio":
                                missing += "Risk Portfolio, \n"
                            if key == "mandate":
                                missing += "Mandate, \n"
                            if key == "replacement":
                                missing += "Replacement?, \n"
                            if key == "replacement_type":
                                missing += "Type of Replacement, \n"
                    score = round(score/total *100)
                if businessType == 14 or businessType == 15 :
                    # score = gatekeepingDocument['fica'] + gatekeepingDocument['proof_of_screening'] + gatekeepingDocument['dra'] + gatekeepingDocument['letter_of_intro'] + gatekeepingDocument['authorisation_letter'] + gatekeepingDocument['roa'] + gatekeepingDocument['fna'] + gatekeepingDocument['application'] + gatekeepingDocument['quotation'] + gatekeepingDocument['replacement']
                    gkDocument = gk.values("fica","proof_of_screening","dra","letter_of_intro","authorisation_letter","roa","fna","application","quotation","replacement").latest('id')
                    for key in gkDocument:
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                            if key == "fica":
                                missing += "FICA (Clear ID), \n"
                            if key == "proof_of_screening":
                                missing += "Proof of Screening, \n"
                            if key == "dra":
                                missing += "DRA, \n"
                            if key == "letter_of_intro":
                                missing += "Introduction letter, \n"
                            if key == "authorisation_letter":
                                missing += "Authorisation letter, \n"
                            if key == "roa_type":
                                missing += "ROA Type, \n"
                            if key == "roa":
                                missing += "ROA (All sections completed), \n"
                            if key == "fna":
                                missing += "FNA (Appropriate FNA filed), \n"
                            if key == "application":
                                missing += "Application, \n"
                            if key == "quotation":
                                missing += "Quotation, \n"
                            if key == "risk_portfolio":
                                missing += "Risk Portfolio, \n"
                            if key == "mandate":
                                missing += "Mandate, \n"
                            if key == "replacement":
                                missing += "Replacement?, \n"
                            if key == "replacement_type":
                                missing += "Type of Replacement, \n"
                    score = round(score/total *100)
                if businessType == 2 :
                    # score = gatekeepingDocument['proof_of_screening']
                    gkDocument = gk.values("proof_of_screening").latest('id')
                    for key in gkDocument:
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                            if key == "proof_of_screening":
                                missing += "Proof of Screening, \n"
                        if gkDocument[key] == 100:
                            total += 100
                            score += gkDocument[key]
                        if gkDocument[key] == 0:
                            total += 100
                
            arcDocument = arc.objects.filter(document=pk)
            arcStatus = False
            if arcDocument.exists():
                arcStatus = True
                aDoc = arcDocument
                arcDocument = arcDocument.values().latest('id')
                businessType = document['businessType']
                arc_score = 0
                if businessType < 14 :
                    aDocument = aDoc.values("client_needs","appropriate_fna","fna_outcome","product_suitability","alternative_solutions","material_aspects","special_terms","replacement_terms").latest('id')
                    arc_total = 0
                    for key in aDocument:
                        if aDocument[key] == 15:
                            arc_total += 15
                            arc_score += aDocument[key]
                        if aDocument[key] == 0:
                            arc_total += 15
                    arc_score = round(arc_score/arc_total *100)
                if businessType >= 14 :
                    aDocument = aDoc.values("disclosure_a", "disclosure_b", "personal_details_a", "personal_details_b", "general_a", "general_b", "general_c", "general_d", "risk_classes_a", "risk_classes_b", "fna_a", "fna_b", "recommended_products_a", "recommended_products_b", "recommended_products_c", "replacements_a", "replacements_b", "replacements_c", "replacements_d", "client_consent_a", "client_consent_b", ).latest('id')
                    arc_total = 100
                    for key in aDocument:
                        if aDocument[key] == 15:
                            arc_score += aDocument[key]
                    arc_score = round(arc_score/arc_total *100)
                comments = DocumentComments.objects.filter(document=pk).values().order_by('-created_at')
                for comment in comments:
                    user = UserAccount.objects.filter(id=comment['user_id'])
                    if user.exists():
                        user = user.values().first()
                        comment['commenting_user'] = f"{user['first_name']} ({user['email']})"  
                return Response({
                    "score" : score,
                    "arc_score" : arc_score,
                    "arc_status" : arcStatus,
                    "comments" : comments,
                    "missing": missing
                })
            else:
                raise Http404
        else:
            raise Http404
        
    def post(self, request, pk, format=None):
        user = request.user
        document = ComplianceDocument.objects.filter(pk=pk)
        if document.exists():
            status = request.data['status']
            data = {
                "document" : pk,
                "status": status,
                "user" : user.pk
            }
            old = ComplianceDocument.objects.get(pk=pk)
            serializer = ComplianceDocument_Serializer(instance=old, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    "message": "Updated",
                    }, 200)
            else:
                return Response({
                    "error": serializer.errors,
                    }, 500)
        else:
            raise Http404


class DocumentCommentsList(APIView):

    def get(self, request, format=None):
        snippets = DocumentComments.objects.filter(advisor=request.user.pk)
        serializer = DocumentComments_Serializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        serializer = DocumentComments_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class DocumentCommentsDetails(APIView):

    def get_object(self, pk):
        try:
            return DocumentComments.objects.get(pk=pk)
        except DocumentComments.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = DocumentComments_Serializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = DocumentComments_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class arc_questionsList(APIView):

    def get(self, request, format=None):
        snippets = arc_questions.objects.filter()
        serializer = arc_questions_Serializer(snippets, many=True)        
        data = serializer.data
        for row in data :
            category = arc_question_header.objects.filter(id=row['category'])
            if category.exists():
                row['category'] = category.values().first()['title']
            else:
                row['category'] = ""
        return Response(data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        serializer = arc_questions_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class arc_questionsDetails(APIView):

    def get_object(self, pk):
        try:
            return arc_questions.objects.get(pk=pk)
        except arc_questions.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_questions_Serializer(snippet)
        data = serializer.data
        category = arc_question_header.objects.filter(id=data['category'])
        if category.exists():
            category = category.values().first()
            data['category'] = {
                'id' : category['id'],
                'name' : 'category',
                'label' : category['title'],
                'value' : str(category['title']).lower(),
            }
        else:
            data['category'] = ""
        return Response(data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_questions_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class arc_question_headerList(APIView):

    def get(self, request, format=None):
        snippets = arc_question_header.objects.filter()
        serializer = arc_question_header_Serializer(snippets, many=True)
        data = []
        for row in serializer.data:
            data.append({
                'id' : row['id'],
                'name' : 'category',
                'label' : row['title'],
                'value' : str(row['title']).lower(),
            })
        return Response({"data": serializer.data, "select_data": data})

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        serializer = arc_question_header_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class arc_question_headerDetails(APIView):

    def get_object(self, pk):
        try:
            return arc_question_header.objects.get(pk=pk)
        except arc_question_header.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_question_header_Serializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_question_header_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class arcList(APIView):

    def get(self, request, format=None):
        snippets = arc.objects.filter()
        serializer = arc_Serializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        newData = request.data
        user = request.user
        newData['user'] = user.pk
        serializer = arc_Serializer(data=newData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class arcDetails(APIView):

    def get_object(self, pk):
        try:
            return arc.objects.get(pk=pk)
        except arc.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_Serializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = arc_Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"errors":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class loadagents(APIView):

    def get(self, request):
        user = request.user
        if user.is_superuser or user.userType == 1 or user.userType == 2:
            advisors = UserAccount.objects.filter(userType = 5)
            if advisors.exists():
                advisors = advisors.values()
                data = []
                for advisor in advisors:
                    profile = user_profile.objects.filter(user=advisor['id'])
                    id_number = ""
                    if profile.exists():
                        profile = user_profile.objects.filter(user=advisor['id']).values().first()
                        id_number = profile['id_number']
                    data.append({
                        "value" : advisor['id'],
                        "label" : f"{advisor['first_name']} {advisor['last_name']} ({id_number})",
                        "name" : "advisor",
                        "id" : advisor['id'],
                    })
                return Response({
                    "advisors" : data
                })
            else:
                raise Http404
        else:
            return Response(status.HTTP_401_UNAUTHORIZED)
        

class loadagentsDetail(APIView):

    def post(self, request):
        user = request.user
        if user.is_superuser or user.userType == 1 or user.userType == 2:
            data = request.data['data']
            
            advisor = UserAccount.objects.filter(userType = 5, pk=request.data['advisorId'])
            if advisor.exists():
                advisor = advisor.values().first()
                profile = user_profile.objects.filter(user=advisor['id'])
                # advisor['email'] = advisor['email']
                data['IdNumber'] = ""
                data['advisorEmail'] = advisor['email']
                data['bac'] = ""
                data['bac_name'] = ""
                data['supervisor'] = ""
                data['supervisor_name'] = ""
                data['region'] = ""
                if profile.exists():
                    profile = user_profile.objects.filter(user=advisor['id']).values().first()
                    data['IdNumber'] = profile['id_number']
                    user_region = regions.objects.filter(pk=profile['region_id'])
                    data['region'] = ""
                    if user_region.exists():
                        user_region = user_region.values().first()
                        data['region'] = user_region['region']
                    user_bac = UserAccount.objects.filter(pk=profile['bac_id'])
                    data['bac'] = ""
                    data['bac_name'] = ""
                    if user_bac.exists():
                        user_bac = user_bac.values().first()
                        data['bac'] = f"{user_bac['id']}"
                        data['bac_name'] = f"{user_bac['first_name']} {user_bac['last_name']}"
                    user_supervision = UserAccount.objects.filter(pk=profile['supervision_id'])
                    data['supervisor'] = ""
                    data['supervisor_name'] = ""
                    if user_supervision.exists():
                        user_supervision = user_supervision.values().first()
                        data['supervisor'] = f"{user_supervision['id']}"
                        data['supervisor_name'] = f"{user_supervision['first_name']} {user_supervision['last_name']}"

                
                return Response({
                    "data" : data
                })
            else:
                raise Http404
        else:
            return Response(status.HTTP_401_UNAUTHORIZED)
        