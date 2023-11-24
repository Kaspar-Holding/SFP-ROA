// components/ClientRisk.js
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import React, { useState } from 'react';

const ClientRisk = ({ user, FormData, onChange, nextStep, prevStep }) => {
    const [ClientOccupation, setClientOccupation] = useState(1)
    const [ClientOccupationWeight, setClientOccupationWeight] = useState(1)
    const [RF_CountryOfBirth_Score, setRF_CountryOfBirth_Score] = useState(2)
    const [RF_Country_Weight, setRF_Country_Weight] = useState(3)
    const [RF_CountryOfResidence_Score, setRF_CountryOfResidence_Score] = useState(2)
    const [RF_Nationality_Score, setRF_Nationality_Score] = useState(2)
    const [RF_CountryOfTax_Score, setRF_CountryOfTax_Score] = useState(0)
    const [RF_Industry_Score, setRF_Industry_Score] = useState(0)
    const [RF_Industry_Weight, setRF_Industry_Weight] = useState(1)
    const [RF_SourceOfFunds_Score, setRF_SourceOfFunds_Score] = useState(3)
    const [RF_SourceOfFunds_Weight, setRF_SourceOfFunds_Weight] = useState(1)
    const [RF_RelationshipToClient_Score, setRF_RelationshipToClient_Score] = useState(1)
    const [RF_RelationshipToClient_Weight, setRF_RelationshipToClient_Weight] = useState(1)
    const [ClientIndividualRiskScore, setClientIndividualRiskScore] = useState(ClientOccupation  + (RF_CountryOfBirth_Score * RF_Country_Weight) + (RF_CountryOfResidence_Score * RF_Country_Weight) + (RF_Nationality_Score * RF_Country_Weight) + (RF_CountryOfTax_Score * RF_Country_Weight) + (RF_RelationshipToClient_Score * RF_RelationshipToClient_Weight)  + (RF_Industry_Score * RF_Industry_Weight) + (RF_SourceOfFunds_Score * RF_SourceOfFunds_Weight))
    const [ClientIndividualRiskLevelScore, setClientIndividualRiskLevelScore] = useState(49)
    const [ClientIndividualRiskLevel, setClientIndividualRiskLevel] = useState(Math.round(ClientIndividualRiskScore / ClientIndividualRiskLevelScore * 100, 2))
    const [ClientIndividualRiskLevelLabel, setClientIndividualRiskLevelLabel] = useState('Medium')
    
    const handleNext = () => {
        // Validate data if needed
        nextStep();
    };
    
    const handlePrevious = () => {
        // Validate data if needed
        prevStep();
    };


    return (
        <div>
            <div className='text-center'>
                <b>A. Client Risk</b>
            </div>  
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <Tippy className='roa-tippy' content="The resulting selection of this field will determine which subsequent fields will display to complete the DRA">
                        <label className="col-form-label roa-font">Client Type</label>
                    </Tippy>
                </div>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <select className="text-start form-select roa-font" name='RF_ClientType' id='RF_ClientType' value={FormData['RF_ClientType']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected>Select Option</option>
                        <option value="1">Individual</option>
                        <option value="2">Legal</option>
                    </select>  
                </div>                            
            </div>
            {
                FormData['RF_ClientType']==="1" ? 
                <>
                    <br/>
                    <div className='row'>
                        <div className={user['is_superuser'] ? "col-3" : "col-6"}>  
                            <Tippy className='roa-tippy' content="Occupation	The provided occupations are extremely high level. More detailed occupations (e.g. Botanist, Artist) can be mapped back to these categories">
                            <label className="col-form-label roa-font ">Occupation</label>
                            </Tippy>     
                            
                        </div>

                        <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                            <select className="text-start form-select roa-font" name='RF_Occupation' id='RF_Occupation' value={FormData['RF_Occupation']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected>Select Option</option>
                                <option value="1">Minor/Scholar</option>
                                <option value="2">Retired</option>
                                <option value="3">Salaried Employee</option>
                                <option value="4">Self Employed</option>
                                <option value="5">Student</option>
                                <option value="6">Unemployed</option>
                            </select>    
                        </div>
                        
                        <div className="col-2">
                        </div>
                        <div className="col-1">
                            {
                                user['is_superuser'] ?
                                <label className="col-form-label">{ClientOccupation}</label>
                                : <></>
                            }
                        </div>
                        <div className="col-1">
                            {
                                user['is_superuser'] ?
                                <label className="col-form-label">{ClientOccupationWeight}</label>
                                : <></>
                            }
                        </div>
                        <div className="col-2">
                            {
                                user['is_superuser'] ?
                                <label className="col-form-label">{ClientOccupation*ClientOccupationWeight}</label>
                                : <></>
                            }
                        </div>
                    </div>
                </>
                :<></>
            }
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>  
                    <Tippy className='roa-tippy' content="As published by GCO. If the country is the same as the country of business jurisdiction, the resulting risk score will be lowered by 1">
                        <label className="col-form-label roa-font">Country of Birth</label>
                    </Tippy>                 
                </div>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <select className="text-start form-select roa-font" name='RF_CountryOfBirth' id='RF_CountryOfBirth' value={FormData['RF_CountryOfBirth']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected>Select Option</option>
                        <option value="1">Afghanistan</option>
                        <option value="2">Albania</option>
                        <option value="3">Algeria</option>
                        <option value="4">American Samoa</option>
                        <option value="5">Andorra</option>
                        <option value="6">Angola</option>
                        <option value="7">Anguilla</option>
                        <option value="8">Antarctica</option>
                        <option value="9">Antigua and Barbuda</option>
                        <option value="10">Argentina</option>
                        <option value="11">Armenia</option>
                        <option value="12">Aruba</option>
                        <option value="13">Aukland Islands</option>
                        <option value="14">Australia</option>
                        <option value="15">Austria</option>
                        <option value="16">Azerbaijan</option>
                        <option value="17">Bahamas</option>
                        <option value="18">Bahrain</option>
                        <option value="19">Bangladesh</option>
                        <option value="20">Barbados</option>
                        <option value="21">Belarus</option>
                        <option value="22">Belgium</option>
                        <option value="23">Belize</option>
                        <option value="24">Benin</option>
                        <option value="25">Bermuda</option>
                        <option value="26">Bhutan</option>
                        <option value="27">Bolivia</option>
                        <option value="28">Bonaire (Sint Eustatius aand Saba)</option>
                        <option value="29">Bosnia and Herzegovina</option>
                        <option value="30">Botswana</option>
                        <option value="31">Bouvet Islands</option>
                        <option value="32">Brazil</option>
                        <option value="33">British Indian Ocean Territory</option>
                        <option value="34">Brunei Darussalam</option>
                        <option value="35">Bulgaria</option>
                        <option value="36">Burkina Faso</option>
                        <option value="37">Burundi</option>
                        <option value="38">Cabo Verde</option>
                        <option value="39">Cambodia</option>
                        <option value="40">Cameroon</option>
                        <option value="41">Canada</option>
                        <option value="42">Cayman Islands</option>
                        <option value="43">Central African Republic</option>
                        <option value="44">Chad</option>
                        <option value="45">Chile</option>
                        <option value="46">China</option>
                        <option value="47">Christmas Island</option>
                        <option value="48">Cocos (Keeling) Islands</option>
                        <option value="49">Colombia</option>
                        <option value="50">Comoros</option>
                        <option value="51">Congo (Democratic Republic)</option>
                        <option value="52">Congo (Republic)</option>
                        <option value="53">Cook Islands</option>
                        <option value="54">Costa Rica</option>
                        <option value="55">Côte D'Ivoire (Ivory Coast)</option>
                        <option value="56">Croatia</option>
                        <option value="57">Cuba</option>
                        <option value="58">Curacao</option>
                        <option value="59">Cyprus</option>
                        <option value="60">Czechia (Czech Republic)</option>
                        <option value="61">Denmark</option>
                        <option value="62">Djibouti</option>
                        <option value="63">Dominica</option>
                        <option value="64">Dominican Republic</option>
                        <option value="65">Ecuador</option>
                        <option value="66">Egypt</option>
                        <option value="67">El Salvador</option>
                        <option value="68">Equatorial Guinea</option>
                        <option value="69">Eritrea</option>
                        <option value="70">Estonia</option>
                        <option value="71">eSwatini (Previously Swaziland)</option>
                        <option value="72">Ethiopia</option>
                        <option value="73">Falkland Islands</option>
                        <option value="74">Faroe Islands</option>
                        <option value="75">Fiji</option>
                        <option value="76">Finland</option>
                        <option value="77">France</option>
                        <option value="78">French Guiana</option>
                        <option value="79">French Polynesia</option>
                        <option value="80">French Southern Territories</option>
                        <option value="81">Gabon</option>
                        <option value="82">Gambia</option>
                        <option value="83">Georgia</option>
                        <option value="84">Germany</option>
                        <option value="85">Ghana</option>
                        <option value="86">Gibraltar</option>
                        <option value="87">Greece</option>
                        <option value="88">Greenland</option>
                        <option value="89">Grenada</option>
                        <option value="90">Guadeloupe</option>
                        <option value="91">Guam</option>
                        <option value="92">Guatemala</option>
                        <option value="93">Guernsey</option>
                        <option value="94">Guinea</option>
                        <option value="95">Guinea Bissau</option>
                        <option value="96">Guyana</option>
                        <option value="97">Haiti</option>
                        <option value="98">Heard Island and McDonald Islands</option>
                        <option value="99">Holy See</option>
                        <option value="100">Honduras</option>
                        <option value="101">Hong Kong</option>
                        <option value="102">Hungary</option>
                        <option value="103">Iceland</option>
                        <option value="104">India</option>
                        <option value="105">Indonesia</option>
                        <option value="106">Iran</option>
                        <option value="107">Iraq</option>
                        <option value="108">Ireland</option>
                        <option value="109">Isle of Man</option>
                        <option value="110">Israel</option>
                        <option value="111">Italy</option>
                        <option value="112">Jamaica</option>
                        <option value="113">Japan</option>
                        <option value="114">Jersey</option>
                        <option value="115">Jordan</option>
                        <option value="116">Kazakhstan</option>
                        <option value="117">Kenya</option>
                        <option value="118">Kiribati</option>
                        <option value="119">Korea ((North) Democratic People's Republic)</option>
                        <option value="120">Korea ((South) Republic)</option>
                        <option value="121">Kosovo</option>
                        <option value="122">Kuwait</option>
                        <option value="123">Kyrgyzstan</option>
                        <option value="124">Laos</option>
                        <option value="125">Latvia</option>
                        <option value="126">Lebanon</option>
                        <option value="127">Lesotho</option>
                        <option value="128">Liberia</option>
                        <option value="129">Libya</option>
                        <option value="130">Liechtenstein</option>
                        <option value="131">Lithuania</option>
                        <option value="132">Luxembourg</option>
                        <option value="133">Macao</option>
                        <option value="134">Macedonia (Former Yugoslavia)</option>
                        <option value="135">Madagascar</option>
                        <option value="136">Malawi</option>
                        <option value="137">Malaysia</option>
                        <option value="138">Maldives</option>
                        <option value="139">Mali</option>
                        <option value="140">Malta</option>
                        <option value="141">Marshall Islands</option>
                        <option value="142">Martinique</option>
                        <option value="143">Mauritania</option>
                        <option value="144">Mauritius</option>
                        <option value="145">Mayotte</option>
                        <option value="146">Mexico</option>
                        <option value="147">Micronesia (Federal States)</option>
                        <option value="148">Moldova</option>
                        <option value="149">Monaco</option>
                        <option value="150">Mongolia</option>
                        <option value="151">Montenegro</option>
                        <option value="152">Montserrat</option>
                        <option value="153">Morocco</option>
                        <option value="154">Mozambique</option>
                        <option value="155">Myanmar</option>
                        <option value="156">Namibia</option>
                        <option value="157">Nauru</option>
                        <option value="158">Nepal</option>
                        <option value="159">Netherlands</option>
                        <option value="160">New Caledonia</option>
                        <option value="161">New Zealand</option>
                        <option value="162">Nicaragua</option>
                        <option value="163">Niger</option>
                        <option value="164">Nigeria</option>
                        <option value="165">Norfolk Island</option>
                        <option value="166">Northern Mariana Islands</option>
                        <option value="167">Norway</option>
                        <option value="168">Nuie</option>
                        <option value="169">Oman</option>
                        <option value="170">Pakistan</option>
                        <option value="171">Palau</option>
                        <option value="172">Panama</option>
                        <option value="173">Papua New Guinea</option>
                        <option value="174">Paraguay</option>
                        <option value="175">Peru</option>
                        <option value="176">Philippines</option>
                        <option value="177">Pitcaim</option>
                        <option value="178">Poland</option>
                        <option value="179">Portugal</option>
                        <option value="180">Puerto Rico</option>
                        <option value="181">Qatar</option>
                        <option value="182">Reunion</option>
                        <option value="183">Romania</option>
                        <option value="184">Russia</option>
                        <option value="185">Rwanda</option>
                        <option value="186">Saint Barthelemy</option>
                        <option value="187">Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="188">Saint Kitts and Nevis</option>
                        <option value="189">Saint Lucia</option>
                        <option value="190">Saint Martin (French part)</option>
                        <option value="191">Saint Pierre and Miquelon</option>
                        <option value="192">Saint Vincent and the Grenadines</option>
                        <option value="193">Samoa</option>
                        <option value="194">San Marino</option>
                        <option value="195">Sao Tome and Principe</option>
                        <option value="196">Saudi Arabia</option>
                        <option value="197">Senegal</option>
                        <option value="198">Serbia</option>
                        <option value="199">Seychelles</option>
                        <option value="200">Sierra Leone</option>
                        <option value="201">Singapore</option>
                        <option value="202">Sint Maarten (Dutch Part)</option>
                        <option value="203">Slovakia</option>
                        <option value="204">Slovenia</option>
                        <option value="205">Solomon Islands</option>
                        <option value="206">Somalia</option>
                        <option value="207">South Africa</option>
                        <option value="208">South Georgia and the South Sandwich Islands</option>
                        <option value="209">South Sudan</option>
                        <option value="210">Spain</option>
                        <option value="211">Sri Lanka</option>
                        <option value="212">Sudan</option>
                        <option value="213">Suriname</option>
                        <option value="214">Svalbard and Jan Mayen</option>
                        <option value="215">Sweden</option>
                        <option value="216">Switzerland</option>
                        <option value="217">Syria</option>
                        <option value="218">Taiwan</option>
                        <option value="219">Tajikistan</option>
                        <option value="220">Tanzania</option>
                        <option value="221">Thailand</option>
                        <option value="222">Timor-Leste</option>
                        <option value="223">Togo</option>
                        <option value="224">Tokelau</option>
                        <option value="225">Tonga</option>
                        <option value="226">Trinidad and Tobago</option>
                        <option value="227">Tunisia</option>
                        <option value="228">Turkey</option>
                        <option value="229">Turkmenistan</option>
                        <option value="230">Turks and Caicos Islands</option>
                        <option value="231">Tuvalu</option>
                        <option value="232">Uganda</option>
                        <option value="233">Ukraine</option>
                        <option value="234">United Arab Emirates</option>
                        <option value="235">United Kingdom</option>
                        <option value="236">United States Minor Outlying Islands</option>
                        <option value="237">United States of America</option>
                        <option value="238">Uruguay</option>
                        <option value="239">Uzbekistan</option>
                        <option value="240">Vanuatu</option>
                        <option value="241">Venezuela</option>
                        <option value="242">Vietnam</option>
                        <option value="243">Virgin Islands (British)</option>
                        <option value="244">Virgin Islands (US)</option>
                        <option value="245">Wallis and Futuna</option>
                        <option value="246">West Bank and Gaza (Palestine)</option>
                        <option value="247">Western Sahara</option>
                        <option value="248">Yemen</option>
                        <option value="249">Zambia</option>
                        <option value="250">Zimbabwe</option>
                            

                    </select>    
                </div>
                <div className='col-2'></div>
                <div className='col-1'>
                    {
                        user['is_superuser'] ?
                        <label className="col-form-label roa-font">{RF_CountryOfBirth_Score}</label>
                        : <></>
                    }
                </div>
                <div className='col-1'>
                    {
                        user['is_superuser'] ?
                        <label className="col-form-label roa-font">{RF_Country_Weight}</label>
                        : <></>
                    }
                </div>
                <div className='col-2'>
                    {
                        user['is_superuser'] ?
                        <label className="col-form-label roa-font">{RF_CountryOfBirth_Score*RF_Country_Weight}</label>
                        : <></>
                    }
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}> 
                    <Tippy className='roa-tippy' content="As published by GCO. If the country is the same as the country of business jurisdiction, the resulting risk score will be lowered by 1">
                        <label className="col-form-label roa-font">Country of Residence</label>
                    </Tippy>      
                    
                </div>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <select className="text-start form-select roa-font" name='RF_CountryOfResidence' id='RF_CountryOfResidence' value={parseInt(FormData['RF_CountryOfResidence'])} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected>Select Option</option>
                        <option value="1">Afghanistan</option>
                        <option value="2">Albania</option>
                        <option value="3">Algeria</option>
                        <option value="4">American Samoa</option>
                        <option value="5">Andorra</option>
                        <option value="6">Angola</option>
                        <option value="7">Anguilla</option>
                        <option value="8">Antarctica</option>
                        <option value="9">Antigua and Barbuda</option>
                        <option value="10">Argentina</option>
                        <option value="11">Armenia</option>
                        <option value="12">Aruba</option>
                        <option value="13">Aukland Islands</option>
                        <option value="14">Australia</option>
                        <option value="15">Austria</option>
                        <option value="16">Azerbaijan</option>
                        <option value="17">Bahamas</option>
                        <option value="18">Bahrain</option>
                        <option value="19">Bangladesh</option>
                        <option value="20">Barbados</option>
                        <option value="21">Belarus</option>
                        <option value="22">Belgium</option>
                        <option value="23">Belize</option>
                        <option value="24">Benin</option>
                        <option value="25">Bermuda</option>
                        <option value="26">Bhutan</option>
                        <option value="27">Bolivia</option>
                        <option value="28">Bonaire (Sint Eustatius aand Saba)</option>
                        <option value="29">Bosnia and Herzegovina</option>
                        <option value="30">Botswana</option>
                        <option value="31">Bouvet Islands</option>
                        <option value="32">Brazil</option>
                        <option value="33">British Indian Ocean Territory</option>
                        <option value="34">Brunei Darussalam</option>
                        <option value="35">Bulgaria</option>
                        <option value="36">Burkina Faso</option>
                        <option value="37">Burundi</option>
                        <option value="38">Cabo Verde</option>
                        <option value="39">Cambodia</option>
                        <option value="40">Cameroon</option>
                        <option value="41">Canada</option>
                        <option value="42">Cayman Islands</option>
                        <option value="43">Central African Republic</option>
                        <option value="44">Chad</option>
                        <option value="45">Chile</option>
                        <option value="46">China</option>
                        <option value="47">Christmas Island</option>
                        <option value="48">Cocos (Keeling) Islands</option>
                        <option value="49">Colombia</option>
                        <option value="50">Comoros</option>
                        <option value="51">Congo (Democratic Republic)</option>
                        <option value="52">Congo (Republic)</option>
                        <option value="53">Cook Islands</option>
                        <option value="54">Costa Rica</option>
                        <option value="55">Côte D'Ivoire (Ivory Coast)</option>
                        <option value="56">Croatia</option>
                        <option value="57">Cuba</option>
                        <option value="58">Curacao</option>
                        <option value="59">Cyprus</option>
                        <option value="60">Czechia (Czech Republic)</option>
                        <option value="61">Denmark</option>
                        <option value="62">Djibouti</option>
                        <option value="63">Dominica</option>
                        <option value="64">Dominican Republic</option>
                        <option value="65">Ecuador</option>
                        <option value="66">Egypt</option>
                        <option value="67">El Salvador</option>
                        <option value="68">Equatorial Guinea</option>
                        <option value="69">Eritrea</option>
                        <option value="70">Estonia</option>
                        <option value="71">eSwatini (Previously Swaziland)</option>
                        <option value="72">Ethiopia</option>
                        <option value="73">Falkland Islands</option>
                        <option value="74">Faroe Islands</option>
                        <option value="75">Fiji</option>
                        <option value="76">Finland</option>
                        <option value="77">France</option>
                        <option value="78">French Guiana</option>
                        <option value="79">French Polynesia</option>
                        <option value="80">French Southern Territories</option>
                        <option value="81">Gabon</option>
                        <option value="82">Gambia</option>
                        <option value="83">Georgia</option>
                        <option value="84">Germany</option>
                        <option value="85">Ghana</option>
                        <option value="86">Gibraltar</option>
                        <option value="87">Greece</option>
                        <option value="88">Greenland</option>
                        <option value="89">Grenada</option>
                        <option value="90">Guadeloupe</option>
                        <option value="91">Guam</option>
                        <option value="92">Guatemala</option>
                        <option value="93">Guernsey</option>
                        <option value="94">Guinea</option>
                        <option value="95">Guinea Bissau</option>
                        <option value="96">Guyana</option>
                        <option value="97">Haiti</option>
                        <option value="98">Heard Island and McDonald Islands</option>
                        <option value="99">Holy See</option>
                        <option value="100">Honduras</option>
                        <option value="101">Hong Kong</option>
                        <option value="102">Hungary</option>
                        <option value="103">Iceland</option>
                        <option value="104">India</option>
                        <option value="105">Indonesia</option>
                        <option value="106">Iran</option>
                        <option value="107">Iraq</option>
                        <option value="108">Ireland</option>
                        <option value="109">Isle of Man</option>
                        <option value="110">Israel</option>
                        <option value="111">Italy</option>
                        <option value="112">Jamaica</option>
                        <option value="113">Japan</option>
                        <option value="114">Jersey</option>
                        <option value="115">Jordan</option>
                        <option value="116">Kazakhstan</option>
                        <option value="117">Kenya</option>
                        <option value="118">Kiribati</option>
                        <option value="119">Korea ((North) Democratic People's Republic)</option>
                        <option value="120">Korea ((South) Republic)</option>
                        <option value="121">Kosovo</option>
                        <option value="122">Kuwait</option>
                        <option value="123">Kyrgyzstan</option>
                        <option value="124">Laos</option>
                        <option value="125">Latvia</option>
                        <option value="126">Lebanon</option>
                        <option value="127">Lesotho</option>
                        <option value="128">Liberia</option>
                        <option value="129">Libya</option>
                        <option value="130">Liechtenstein</option>
                        <option value="131">Lithuania</option>
                        <option value="132">Luxembourg</option>
                        <option value="133">Macao</option>
                        <option value="134">Macedonia (Former Yugoslavia)</option>
                        <option value="135">Madagascar</option>
                        <option value="136">Malawi</option>
                        <option value="137">Malaysia</option>
                        <option value="138">Maldives</option>
                        <option value="139">Mali</option>
                        <option value="140">Malta</option>
                        <option value="141">Marshall Islands</option>
                        <option value="142">Martinique</option>
                        <option value="143">Mauritania</option>
                        <option value="144">Mauritius</option>
                        <option value="145">Mayotte</option>
                        <option value="146">Mexico</option>
                        <option value="147">Micronesia (Federal States)</option>
                        <option value="148">Moldova</option>
                        <option value="149">Monaco</option>
                        <option value="150">Mongolia</option>
                        <option value="151">Montenegro</option>
                        <option value="152">Montserrat</option>
                        <option value="153">Morocco</option>
                        <option value="154">Mozambique</option>
                        <option value="155">Myanmar</option>
                        <option value="156">Namibia</option>
                        <option value="157">Nauru</option>
                        <option value="158">Nepal</option>
                        <option value="159">Netherlands</option>
                        <option value="160">New Caledonia</option>
                        <option value="161">New Zealand</option>
                        <option value="162">Nicaragua</option>
                        <option value="163">Niger</option>
                        <option value="164">Nigeria</option>
                        <option value="165">Norfolk Island</option>
                        <option value="166">Northern Mariana Islands</option>
                        <option value="167">Norway</option>
                        <option value="168">Nuie</option>
                        <option value="169">Oman</option>
                        <option value="170">Pakistan</option>
                        <option value="171">Palau</option>
                        <option value="172">Panama</option>
                        <option value="173">Papua New Guinea</option>
                        <option value="174">Paraguay</option>
                        <option value="175">Peru</option>
                        <option value="176">Philippines</option>
                        <option value="177">Pitcaim</option>
                        <option value="178">Poland</option>
                        <option value="179">Portugal</option>
                        <option value="180">Puerto Rico</option>
                        <option value="181">Qatar</option>
                        <option value="182">Reunion</option>
                        <option value="183">Romania</option>
                        <option value="184">Russia</option>
                        <option value="185">Rwanda</option>
                        <option value="186">Saint Barthelemy</option>
                        <option value="187">Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="188">Saint Kitts and Nevis</option>
                        <option value="189">Saint Lucia</option>
                        <option value="190">Saint Martin (French part)</option>
                        <option value="191">Saint Pierre and Miquelon</option>
                        <option value="192">Saint Vincent and the Grenadines</option>
                        <option value="193">Samoa</option>
                        <option value="194">San Marino</option>
                        <option value="195">Sao Tome and Principe</option>
                        <option value="196">Saudi Arabia</option>
                        <option value="197">Senegal</option>
                        <option value="198">Serbia</option>
                        <option value="199">Seychelles</option>
                        <option value="200">Sierra Leone</option>
                        <option value="201">Singapore</option>
                        <option value="202">Sint Maarten (Dutch Part)</option>
                        <option value="203">Slovakia</option>
                        <option value="204">Slovenia</option>
                        <option value="205">Solomon Islands</option>
                        <option value="206">Somalia</option>
                        <option value="207">South Africa</option>
                        <option value="208">South Georgia and the South Sandwich Islands</option>
                        <option value="209">South Sudan</option>
                        <option value="210">Spain</option>
                        <option value="211">Sri Lanka</option>
                        <option value="212">Sudan</option>
                        <option value="213">Suriname</option>
                        <option value="214">Svalbard and Jan Mayen</option>
                        <option value="215">Sweden</option>
                        <option value="216">Switzerland</option>
                        <option value="217">Syria</option>
                        <option value="218">Taiwan</option>
                        <option value="219">Tajikistan</option>
                        <option value="220">Tanzania</option>
                        <option value="221">Thailand</option>
                        <option value="222">Timor-Leste</option>
                        <option value="223">Togo</option>
                        <option value="224">Tokelau</option>
                        <option value="225">Tonga</option>
                        <option value="226">Trinidad and Tobago</option>
                        <option value="227">Tunisia</option>
                        <option value="228">Turkey</option>
                        <option value="229">Turkmenistan</option>
                        <option value="230">Turks and Caicos Islands</option>
                        <option value="231">Tuvalu</option>
                        <option value="232">Uganda</option>
                        <option value="233">Ukraine</option>
                        <option value="234">United Arab Emirates</option>
                        <option value="235">United Kingdom</option>
                        <option value="236">United States Minor Outlying Islands</option>
                        <option value="237">United States of America</option>
                        <option value="238">Uruguay</option>
                        <option value="239">Uzbekistan</option>
                        <option value="240">Vanuatu</option>
                        <option value="241">Venezuela</option>
                        <option value="242">Vietnam</option>
                        <option value="243">Virgin Islands (British)</option>
                        <option value="244">Virgin Islands (US)</option>
                        <option value="245">Wallis and Futuna</option>
                        <option value="246">West Bank and Gaza (Palestine)</option>
                        <option value="247">Western Sahara</option>
                        <option value="248">Yemen</option>
                        <option value="249">Zambia</option>
                        <option value="250">Zimbabwe</option>    
                    </select>    
                </div>
                <div className='col-2'></div>
                <div className='col-1'>
                    {
                        user['is_superuser'] ?
                        <label className="col-form-label roa-font">{RF_CountryOfResidence_Score}</label>
                        : <></>
                    }
                </div>
                <div className='col-1'>
                    {
                        user['is_superuser'] ?
                        <label className="col-form-label roa-font">{RF_Country_Weight}</label>
                        : <></>
                    }
                </div>
                <div className='col-2'>
                    {
                        user['is_superuser'] ?
                        <label className="col-form-label roa-font">{RF_CountryOfResidence_Score*RF_Country_Weight}</label>
                        : <></>
                    }
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}> 
                    <Tippy className='roa-tippy' content="Nationality	As published by GCO. If the country is the same as the country of business jurisdiction, the resulting risk score will be lowered by 1">
                        <label className="col-form-label roa-font">Nationality</label>
                    </Tippy>
                </div>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <select className="text-start form-select roa-font" name='RF_Nationality' id='RF_Nationality' value={parseInt(FormData['RF_Nationality'])} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected>Select Option</option>
                        <option value="1">Afghanistan</option>
                        <option value="2">Albania</option>
                        <option value="3">Algeria</option>
                        <option value="4">American Samoa</option>
                        <option value="5">Andorra</option>
                        <option value="6">Angola</option>
                        <option value="7">Anguilla</option>
                        <option value="8">Antarctica</option>
                        <option value="9">Antigua and Barbuda</option>
                        <option value="10">Argentina</option>
                        <option value="11">Armenia</option>
                        <option value="12">Aruba</option>
                        <option value="13">Aukland Islands</option>
                        <option value="14">Australia</option>
                        <option value="15">Austria</option>
                        <option value="16">Azerbaijan</option>
                        <option value="17">Bahamas</option>
                        <option value="18">Bahrain</option>
                        <option value="19">Bangladesh</option>
                        <option value="20">Barbados</option>
                        <option value="21">Belarus</option>
                        <option value="22">Belgium</option>
                        <option value="23">Belize</option>
                        <option value="24">Benin</option>
                        <option value="25">Bermuda</option>
                        <option value="26">Bhutan</option>
                        <option value="27">Bolivia</option>
                        <option value="28">Bonaire (Sint Eustatius aand Saba)</option>
                        <option value="29">Bosnia and Herzegovina</option>
                        <option value="30">Botswana</option>
                        <option value="31">Bouvet Islands</option>
                        <option value="32">Brazil</option>
                        <option value="33">British Indian Ocean Territory</option>
                        <option value="34">Brunei Darussalam</option>
                        <option value="35">Bulgaria</option>
                        <option value="36">Burkina Faso</option>
                        <option value="37">Burundi</option>
                        <option value="38">Cabo Verde</option>
                        <option value="39">Cambodia</option>
                        <option value="40">Cameroon</option>
                        <option value="41">Canada</option>
                        <option value="42">Cayman Islands</option>
                        <option value="43">Central African Republic</option>
                        <option value="44">Chad</option>
                        <option value="45">Chile</option>
                        <option value="46">China</option>
                        <option value="47">Christmas Island</option>
                        <option value="48">Cocos (Keeling) Islands</option>
                        <option value="49">Colombia</option>
                        <option value="50">Comoros</option>
                        <option value="51">Congo (Democratic Republic)</option>
                        <option value="52">Congo (Republic)</option>
                        <option value="53">Cook Islands</option>
                        <option value="54">Costa Rica</option>
                        <option value="55">Côte D'Ivoire (Ivory Coast)</option>
                        <option value="56">Croatia</option>
                        <option value="57">Cuba</option>
                        <option value="58">Curacao</option>
                        <option value="59">Cyprus</option>
                        <option value="60">Czechia (Czech Republic)</option>
                        <option value="61">Denmark</option>
                        <option value="62">Djibouti</option>
                        <option value="63">Dominica</option>
                        <option value="64">Dominican Republic</option>
                        <option value="65">Ecuador</option>
                        <option value="66">Egypt</option>
                        <option value="67">El Salvador</option>
                        <option value="68">Equatorial Guinea</option>
                        <option value="69">Eritrea</option>
                        <option value="70">Estonia</option>
                        <option value="71">eSwatini (Previously Swaziland)</option>
                        <option value="72">Ethiopia</option>
                        <option value="73">Falkland Islands</option>
                        <option value="74">Faroe Islands</option>
                        <option value="75">Fiji</option>
                        <option value="76">Finland</option>
                        <option value="77">France</option>
                        <option value="78">French Guiana</option>
                        <option value="79">French Polynesia</option>
                        <option value="80">French Southern Territories</option>
                        <option value="81">Gabon</option>
                        <option value="82">Gambia</option>
                        <option value="83">Georgia</option>
                        <option value="84">Germany</option>
                        <option value="85">Ghana</option>
                        <option value="86">Gibraltar</option>
                        <option value="87">Greece</option>
                        <option value="88">Greenland</option>
                        <option value="89">Grenada</option>
                        <option value="90">Guadeloupe</option>
                        <option value="91">Guam</option>
                        <option value="92">Guatemala</option>
                        <option value="93">Guernsey</option>
                        <option value="94">Guinea</option>
                        <option value="95">Guinea Bissau</option>
                        <option value="96">Guyana</option>
                        <option value="97">Haiti</option>
                        <option value="98">Heard Island and McDonald Islands</option>
                        <option value="99">Holy See</option>
                        <option value="100">Honduras</option>
                        <option value="101">Hong Kong</option>
                        <option value="102">Hungary</option>
                        <option value="103">Iceland</option>
                        <option value="104">India</option>
                        <option value="105">Indonesia</option>
                        <option value="106">Iran</option>
                        <option value="107">Iraq</option>
                        <option value="108">Ireland</option>
                        <option value="109">Isle of Man</option>
                        <option value="110">Israel</option>
                        <option value="111">Italy</option>
                        <option value="112">Jamaica</option>
                        <option value="113">Japan</option>
                        <option value="114">Jersey</option>
                        <option value="115">Jordan</option>
                        <option value="116">Kazakhstan</option>
                        <option value="117">Kenya</option>
                        <option value="118">Kiribati</option>
                        <option value="119">Korea ((North) Democratic People's Republic)</option>
                        <option value="120">Korea ((South) Republic)</option>
                        <option value="121">Kosovo</option>
                        <option value="122">Kuwait</option>
                        <option value="123">Kyrgyzstan</option>
                        <option value="124">Laos</option>
                        <option value="125">Latvia</option>
                        <option value="126">Lebanon</option>
                        <option value="127">Lesotho</option>
                        <option value="128">Liberia</option>
                        <option value="129">Libya</option>
                        <option value="130">Liechtenstein</option>
                        <option value="131">Lithuania</option>
                        <option value="132">Luxembourg</option>
                        <option value="133">Macao</option>
                        <option value="134">Macedonia (Former Yugoslavia)</option>
                        <option value="135">Madagascar</option>
                        <option value="136">Malawi</option>
                        <option value="137">Malaysia</option>
                        <option value="138">Maldives</option>
                        <option value="139">Mali</option>
                        <option value="140">Malta</option>
                        <option value="141">Marshall Islands</option>
                        <option value="142">Martinique</option>
                        <option value="143">Mauritania</option>
                        <option value="144">Mauritius</option>
                        <option value="145">Mayotte</option>
                        <option value="146">Mexico</option>
                        <option value="147">Micronesia (Federal States)</option>
                        <option value="148">Moldova</option>
                        <option value="149">Monaco</option>
                        <option value="150">Mongolia</option>
                        <option value="151">Montenegro</option>
                        <option value="152">Montserrat</option>
                        <option value="153">Morocco</option>
                        <option value="154">Mozambique</option>
                        <option value="155">Myanmar</option>
                        <option value="156">Namibia</option>
                        <option value="157">Nauru</option>
                        <option value="158">Nepal</option>
                        <option value="159">Netherlands</option>
                        <option value="160">New Caledonia</option>
                        <option value="161">New Zealand</option>
                        <option value="162">Nicaragua</option>
                        <option value="163">Niger</option>
                        <option value="164">Nigeria</option>
                        <option value="165">Norfolk Island</option>
                        <option value="166">Northern Mariana Islands</option>
                        <option value="167">Norway</option>
                        <option value="168">Nuie</option>
                        <option value="169">Oman</option>
                        <option value="170">Pakistan</option>
                        <option value="171">Palau</option>
                        <option value="172">Panama</option>
                        <option value="173">Papua New Guinea</option>
                        <option value="174">Paraguay</option>
                        <option value="175">Peru</option>
                        <option value="176">Philippines</option>
                        <option value="177">Pitcaim</option>
                        <option value="178">Poland</option>
                        <option value="179">Portugal</option>
                        <option value="180">Puerto Rico</option>
                        <option value="181">Qatar</option>
                        <option value="182">Reunion</option>
                        <option value="183">Romania</option>
                        <option value="184">Russia</option>
                        <option value="185">Rwanda</option>
                        <option value="186">Saint Barthelemy</option>
                        <option value="187">Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="188">Saint Kitts and Nevis</option>
                        <option value="189">Saint Lucia</option>
                        <option value="190">Saint Martin (French part)</option>
                        <option value="191">Saint Pierre and Miquelon</option>
                        <option value="192">Saint Vincent and the Grenadines</option>
                        <option value="193">Samoa</option>
                        <option value="194">San Marino</option>
                        <option value="195">Sao Tome and Principe</option>
                        <option value="196">Saudi Arabia</option>
                        <option value="197">Senegal</option>
                        <option value="198">Serbia</option>
                        <option value="199">Seychelles</option>
                        <option value="200">Sierra Leone</option>
                        <option value="201">Singapore</option>
                        <option value="202">Sint Maarten (Dutch Part)</option>
                        <option value="203">Slovakia</option>
                        <option value="204">Slovenia</option>
                        <option value="205">Solomon Islands</option>
                        <option value="206">Somalia</option>
                        <option value="207">South Africa</option>
                        <option value="208">South Georgia and the South Sandwich Islands</option>
                        <option value="209">South Sudan</option>
                        <option value="210">Spain</option>
                        <option value="211">Sri Lanka</option>
                        <option value="212">Sudan</option>
                        <option value="213">Suriname</option>
                        <option value="214">Svalbard and Jan Mayen</option>
                        <option value="215">Sweden</option>
                        <option value="216">Switzerland</option>
                        <option value="217">Syria</option>
                        <option value="218">Taiwan</option>
                        <option value="219">Tajikistan</option>
                        <option value="220">Tanzania</option>
                        <option value="221">Thailand</option>
                        <option value="222">Timor-Leste</option>
                        <option value="223">Togo</option>
                        <option value="224">Tokelau</option>
                        <option value="225">Tonga</option>
                        <option value="226">Trinidad and Tobago</option>
                        <option value="227">Tunisia</option>
                        <option value="228">Turkey</option>
                        <option value="229">Turkmenistan</option>
                        <option value="230">Turks and Caicos Islands</option>
                        <option value="231">Tuvalu</option>
                        <option value="232">Uganda</option>
                        <option value="233">Ukraine</option>
                        <option value="234">United Arab Emirates</option>
                        <option value="235">United Kingdom</option>
                        <option value="236">United States Minor Outlying Islands</option>
                        <option value="237">United States of America</option>
                        <option value="238">Uruguay</option>
                        <option value="239">Uzbekistan</option>
                        <option value="240">Vanuatu</option>
                        <option value="241">Venezuela</option>
                        <option value="242">Vietnam</option>
                        <option value="243">Virgin Islands (British)</option>
                        <option value="244">Virgin Islands (US)</option>
                        <option value="245">Wallis and Futuna</option>
                        <option value="246">West Bank and Gaza (Palestine)</option>
                        <option value="247">Western Sahara</option>
                        <option value="248">Yemen</option>
                        <option value="249">Zambia</option>
                        <option value="250">Zimbabwe</option>    
                    </select>    
                </div>
                <div className='col-2'></div>
                <div className='col-1'>
                    {
                        user['is_superuser'] ?
                        <label className="col-form-label roa-font">{RF_Nationality_Score}</label>
                        : <></>
                    }
                </div>
                <div className='col-1'>
                    {
                        user['is_superuser'] ?
                        <label className="col-form-label roa-font">{RF_Country_Weight}</label>
                        : <></>
                    }
                </div>
                <div className='col-2'>
                    {
                        user['is_superuser'] ?
                        <label className="col-form-label roa-font">{RF_Nationality_Score*RF_Country_Weight}</label>
                        : <></>
                    }
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>  
                    <Tippy className='roa-tippy' conntent="Jurisdiction references the country in which the business is operating">
                        <label className="col-form-label roa-font">Is nationality different to current jurisdiction?</label>
                    </Tippy>      
                </div>

                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <select className="text-start form-select roa-font" name='RF_Different_Nationality' id='RF_Different_Nationality' value={FormData['RF_Different_Nationality']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected>Select Option</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                </div>
            </div>
            {
                FormData['RF_Different_Nationality'] == 1 ?
                <>
                    <br/>
                    <div className='row'>
                        <div className={user['is_superuser'] ? "col-3" : "col-6"}> 
                            <div className="col-2">
                                <Tippy className='roa-tippy' conntent="As published by GCO. Only applicable / displayed if nationality is different to current jurisdiction">
                                    <label className="col-form-label roa-font">Country of tax residence</label>
                                </Tippy> 
                            </div>
                        </div>
                        <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                            <select className="text-start form-select roa-font" name='RF_CountryOfTax' id='RF_CountryOfTax' value={FormData['RF_CountryOfTax']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                                <option value="0" selected>Select Option</option>
                                <option value="1">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="4">American Samoa</option>
                                <option value="5">Andorra</option>
                                <option value="6">Angola</option>
                                <option value="7">Anguilla</option>
                                <option value="8">Antarctica</option>
                                <option value="9">Antigua and Barbuda</option>
                                <option value="10">Argentina</option>
                                <option value="11">Armenia</option>
                                <option value="12">Aruba</option>
                                <option value="13">Aukland Islands</option>
                                <option value="14">Australia</option>
                                <option value="15">Austria</option>
                                <option value="16">Azerbaijan</option>
                                <option value="17">Bahamas</option>
                                <option value="18">Bahrain</option>
                                <option value="19">Bangladesh</option>
                                <option value="20">Barbados</option>
                                <option value="21">Belarus</option>
                                <option value="22">Belgium</option>
                                <option value="23">Belize</option>
                                <option value="24">Benin</option>
                                <option value="25">Bermuda</option>
                                <option value="26">Bhutan</option>
                                <option value="27">Bolivia</option>
                                <option value="28">Bonaire (Sint Eustatius aand Saba)</option>
                                <option value="29">Bosnia and Herzegovina</option>
                                <option value="30">Botswana</option>
                                <option value="31">Bouvet Islands</option>
                                <option value="32">Brazil</option>
                                <option value="33">British Indian Ocean Territory</option>
                                <option value="34">Brunei Darussalam</option>
                                <option value="35">Bulgaria</option>
                                <option value="36">Burkina Faso</option>
                                <option value="37">Burundi</option>
                                <option value="38">Cabo Verde</option>
                                <option value="39">Cambodia</option>
                                <option value="40">Cameroon</option>
                                <option value="41">Canada</option>
                                <option value="42">Cayman Islands</option>
                                <option value="43">Central African Republic</option>
                                <option value="44">Chad</option>
                                <option value="45">Chile</option>
                                <option value="46">China</option>
                                <option value="47">Christmas Island</option>
                                <option value="48">Cocos (Keeling) Islands</option>
                                <option value="49">Colombia</option>
                                <option value="50">Comoros</option>
                                <option value="51">Congo (Democratic Republic)</option>
                                <option value="52">Congo (Republic)</option>
                                <option value="53">Cook Islands</option>
                                <option value="54">Costa Rica</option>
                                <option value="55">Côte D'Ivoire (Ivory Coast)</option>
                                <option value="56">Croatia</option>
                                <option value="57">Cuba</option>
                                <option value="58">Curacao</option>
                                <option value="59">Cyprus</option>
                                <option value="60">Czechia (Czech Republic)</option>
                                <option value="61">Denmark</option>
                                <option value="62">Djibouti</option>
                                <option value="63">Dominica</option>
                                <option value="64">Dominican Republic</option>
                                <option value="65">Ecuador</option>
                                <option value="66">Egypt</option>
                                <option value="67">El Salvador</option>
                                <option value="68">Equatorial Guinea</option>
                                <option value="69">Eritrea</option>
                                <option value="70">Estonia</option>
                                <option value="71">eSwatini (Previously Swaziland)</option>
                                <option value="72">Ethiopia</option>
                                <option value="73">Falkland Islands</option>
                                <option value="74">Faroe Islands</option>
                                <option value="75">Fiji</option>
                                <option value="76">Finland</option>
                                <option value="77">France</option>
                                <option value="78">French Guiana</option>
                                <option value="79">French Polynesia</option>
                                <option value="80">French Southern Territories</option>
                                <option value="81">Gabon</option>
                                <option value="82">Gambia</option>
                                <option value="83">Georgia</option>
                                <option value="84">Germany</option>
                                <option value="85">Ghana</option>
                                <option value="86">Gibraltar</option>
                                <option value="87">Greece</option>
                                <option value="88">Greenland</option>
                                <option value="89">Grenada</option>
                                <option value="90">Guadeloupe</option>
                                <option value="91">Guam</option>
                                <option value="92">Guatemala</option>
                                <option value="93">Guernsey</option>
                                <option value="94">Guinea</option>
                                <option value="95">Guinea Bissau</option>
                                <option value="96">Guyana</option>
                                <option value="97">Haiti</option>
                                <option value="98">Heard Island and McDonald Islands</option>
                                <option value="99">Holy See</option>
                                <option value="100">Honduras</option>
                                <option value="101">Hong Kong</option>
                                <option value="102">Hungary</option>
                                <option value="103">Iceland</option>
                                <option value="104">India</option>
                                <option value="105">Indonesia</option>
                                <option value="106">Iran</option>
                                <option value="107">Iraq</option>
                                <option value="108">Ireland</option>
                                <option value="109">Isle of Man</option>
                                <option value="110">Israel</option>
                                <option value="111">Italy</option>
                                <option value="112">Jamaica</option>
                                <option value="113">Japan</option>
                                <option value="114">Jersey</option>
                                <option value="115">Jordan</option>
                                <option value="116">Kazakhstan</option>
                                <option value="117">Kenya</option>
                                <option value="118">Kiribati</option>
                                <option value="119">Korea ((North) Democratic People's Republic)</option>
                                <option value="120">Korea ((South) Republic)</option>
                                <option value="121">Kosovo</option>
                                <option value="122">Kuwait</option>
                                <option value="123">Kyrgyzstan</option>
                                <option value="124">Laos</option>
                                <option value="125">Latvia</option>
                                <option value="126">Lebanon</option>
                                <option value="127">Lesotho</option>
                                <option value="128">Liberia</option>
                                <option value="129">Libya</option>
                                <option value="130">Liechtenstein</option>
                                <option value="131">Lithuania</option>
                                <option value="132">Luxembourg</option>
                                <option value="133">Macao</option>
                                <option value="134">Macedonia (Former Yugoslavia)</option>
                                <option value="135">Madagascar</option>
                                <option value="136">Malawi</option>
                                <option value="137">Malaysia</option>
                                <option value="138">Maldives</option>
                                <option value="139">Mali</option>
                                <option value="140">Malta</option>
                                <option value="141">Marshall Islands</option>
                                <option value="142">Martinique</option>
                                <option value="143">Mauritania</option>
                                <option value="144">Mauritius</option>
                                <option value="145">Mayotte</option>
                                <option value="146">Mexico</option>
                                <option value="147">Micronesia (Federal States)</option>
                                <option value="148">Moldova</option>
                                <option value="149">Monaco</option>
                                <option value="150">Mongolia</option>
                                <option value="151">Montenegro</option>
                                <option value="152">Montserrat</option>
                                <option value="153">Morocco</option>
                                <option value="154">Mozambique</option>
                                <option value="155">Myanmar</option>
                                <option value="156">Namibia</option>
                                <option value="157">Nauru</option>
                                <option value="158">Nepal</option>
                                <option value="159">Netherlands</option>
                                <option value="160">New Caledonia</option>
                                <option value="161">New Zealand</option>
                                <option value="162">Nicaragua</option>
                                <option value="163">Niger</option>
                                <option value="164">Nigeria</option>
                                <option value="165">Norfolk Island</option>
                                <option value="166">Northern Mariana Islands</option>
                                <option value="167">Norway</option>
                                <option value="168">Nuie</option>
                                <option value="169">Oman</option>
                                <option value="170">Pakistan</option>
                                <option value="171">Palau</option>
                                <option value="172">Panama</option>
                                <option value="173">Papua New Guinea</option>
                                <option value="174">Paraguay</option>
                                <option value="175">Peru</option>
                                <option value="176">Philippines</option>
                                <option value="177">Pitcaim</option>
                                <option value="178">Poland</option>
                                <option value="179">Portugal</option>
                                <option value="180">Puerto Rico</option>
                                <option value="181">Qatar</option>
                                <option value="182">Reunion</option>
                                <option value="183">Romania</option>
                                <option value="184">Russia</option>
                                <option value="185">Rwanda</option>
                                <option value="186">Saint Barthelemy</option>
                                <option value="187">Saint Helena, Ascension and Tristan da Cunha</option>
                                <option value="188">Saint Kitts and Nevis</option>
                                <option value="189">Saint Lucia</option>
                                <option value="190">Saint Martin (French part)</option>
                                <option value="191">Saint Pierre and Miquelon</option>
                                <option value="192">Saint Vincent and the Grenadines</option>
                                <option value="193">Samoa</option>
                                <option value="194">San Marino</option>
                                <option value="195">Sao Tome and Principe</option>
                                <option value="196">Saudi Arabia</option>
                                <option value="197">Senegal</option>
                                <option value="198">Serbia</option>
                                <option value="199">Seychelles</option>
                                <option value="200">Sierra Leone</option>
                                <option value="201">Singapore</option>
                                <option value="202">Sint Maarten (Dutch Part)</option>
                                <option value="203">Slovakia</option>
                                <option value="204">Slovenia</option>
                                <option value="205">Solomon Islands</option>
                                <option value="206">Somalia</option>
                                <option value="207">South Africa</option>
                                <option value="208">South Georgia and the South Sandwich Islands</option>
                                <option value="209">South Sudan</option>
                                <option value="210">Spain</option>
                                <option value="211">Sri Lanka</option>
                                <option value="212">Sudan</option>
                                <option value="213">Suriname</option>
                                <option value="214">Svalbard and Jan Mayen</option>
                                <option value="215">Sweden</option>
                                <option value="216">Switzerland</option>
                                <option value="217">Syria</option>
                                <option value="218">Taiwan</option>
                                <option value="219">Tajikistan</option>
                                <option value="220">Tanzania</option>
                                <option value="221">Thailand</option>
                                <option value="222">Timor-Leste</option>
                                <option value="223">Togo</option>
                                <option value="224">Tokelau</option>
                                <option value="225">Tonga</option>
                                <option value="226">Trinidad and Tobago</option>
                                <option value="227">Tunisia</option>
                                <option value="228">Turkey</option>
                                <option value="229">Turkmenistan</option>
                                <option value="230">Turks and Caicos Islands</option>
                                <option value="231">Tuvalu</option>
                                <option value="232">Uganda</option>
                                <option value="233">Ukraine</option>
                                <option value="234">United Arab Emirates</option>
                                <option value="235">United Kingdom</option>
                                <option value="236">United States Minor Outlying Islands</option>
                                <option value="237">United States of America</option>
                                <option value="238">Uruguay</option>
                                <option value="239">Uzbekistan</option>
                                <option value="240">Vanuatu</option>
                                <option value="241">Venezuela</option>
                                <option value="242">Vietnam</option>
                                <option value="243">Virgin Islands (British)</option>
                                <option value="244">Virgin Islands (US)</option>
                                <option value="245">Wallis and Futuna</option>
                                <option value="246">West Bank and Gaza (Palestine)</option>
                                <option value="247">Western Sahara</option>
                                <option value="248">Yemen</option>
                                <option value="249">Zambia</option>
                                <option value="250">Zimbabwe</option>    
                            </select>    
                        </div>
                        <div className='col-2'></div>
                        <div className='col-1'>
                            {
                                user['is_superuser'] ?
                                <label className="col-form-label roa-font">{RF_CountryOfTax_Score}</label>
                                : <></>
                            }
                        </div>
                        <div className='col-1'>
                            {
                                user['is_superuser'] ?
                                <label className="col-form-label roa-font">{RF_Country_Weight}</label>
                                : <></>
                            }
                        </div>
                        <div className='col-2'>
                            {
                                user['is_superuser'] ?
                                <label className="col-form-label roa-font">{RF_CountryOfTax_Score*RF_Country_Weight}</label>
                                : <></>
                            }
                        </div>
                    </div>
                </>
                :<></>
            }
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <Tippy className='roa-tippy' conntent="The industry in which the client operates">
                        <label className="col-form-label roa-font">Industry</label>
                    </Tippy>       
                    
                </div>

                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <select className="text-start form-select roa-font" name='RF_Industry' id='RF_Industry' value={FormData['RF_Industry']} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected>Select Option</option>
                        <option value="1">Administrative and support services</option>
                        <option value="2">Adult Entertainment</option>
                        <option value="3">Agriculture,forestry and fishing</option>
                        <option value="4">Arts,Entertainment and Recreation</option>
                        <option value="5">Broadcasting and Entertainment</option>
                        <option value="6">Chemical engineering/manufacturing</option>
                        <option value="7">Community and social activities</option>
                        <option value="8">Construction and civil engineering</option>
                        <option value="9">Consumer goods:wholesale and retail</option>
                        <option value="10">Education</option>
                        <option value="11">Electricity,solar,water,gas</option>
                        <option value="12">Entrepreneurship</option>
                        <option value="13">Estate living and family trusts</option>
                        <option value="14">Extractive services,mining and quarrying</option>
                        <option value="15">Financial and insurance</option>
                        <option value="16">Gambling</option>
                        <option value="17">Government services,armed and state owned enterprise</option>
                        <option value="18">Health care and medical</option>
                        <option value="19">Information technology,communication and telecom</option>
                        <option value="20">Legal practitioner</option>
                        <option value="21">Manufacturing</option>
                        <option value="22">Motor wholesale,retail trade and repair</option>
                        <option value="23">Non profit organization</option>
                        <option value="24">Non government organization(NGO)</option>
                        <option value="25">other</option>
                        <option value="26">PFMA schedule 1</option>
                        <option value="27">PFMA schedule 2</option>
                        <option value="28">PFMA schedule 3A</option>
                        <option value="29">Professional sport</option>
                        <option value="30">Real estate and property services</option>
                        <option value="31">Shell Banking</option>
                        <option value="32">Transport storage,courier and freight</option>
                        <option value="33">Travel,tourism and accomodation</option>
                        <option value="34">Virtual currencies</option>
                    </select>
                </div>
                <div className='col-2'></div>
                <div className='col-1'>
                    {
                        user['is_superuser'] ?
                            parseInt((FormData['RF_Industry']))===1 || parseInt((FormData['RF_Industry']))===3 || parseInt((FormData['RF_Industry']))===15 || parseInt((FormData['RF_Industry']))===19 
                            ?
                                <label className="col-form-label">1</label>
                            :
                            parseInt((FormData['RF_Industry']))===2 || parseInt((FormData['RF_Industry']))===12 || parseInt((FormData['RF_Industry']))===14 || parseInt((FormData['RF_Industry']))===16 || parseInt((FormData['RF_Industry']))===17 || parseInt((FormData['RF_Industry']))===20 || parseInt((FormData['RF_Industry']))===23 || parseInt((FormData['RF_Industry']))===24
                            || parseInt((FormData['RF_Industry']))===26 || parseInt((FormData['RF_Industry']))===27 || parseInt((FormData['RF_Industry']))===28 || parseInt((FormData['RF_Industry']))===30 || parseInt((FormData['RF_Industry']))===34
                            ?
                                <label className="col-form-label">3</label>
                            :  
                            parseInt((FormData['RF_Industry']))===4 || parseInt((FormData['RF_Industry']))===5 || parseInt((FormData['RF_Industry']))===6 || parseInt((FormData['RF_Industry']))===7 || parseInt((FormData['RF_Industry']))===8 || parseInt((FormData['RF_Industry']))===9 || parseInt((FormData['RF_Industry']))===10 || parseInt((FormData['RF_Industry']))===11 || parseInt((FormData['RF_Industry']))===13
                            || parseInt((FormData['RF_Industry']))===18 || parseInt((FormData['RF_Industry']))===21 || parseInt((FormData['RF_Industry']))===22 || parseInt((FormData['RF_Industry']))===29 || parseInt((FormData['RF_Industry']))===32 || parseInt((FormData['RF_Industry']))===33
                            ?
                                <label className="col-form-label">2</label>
                            :
                            parseInt((FormData['RF_Industry']))===25
                            ?
                                <label className="col-form-label">0</label>
                            :
                            parseInt((FormData['RF_Industry']))===31
                            ?
                                <label className="col-form-label">4</label>
                            : <></>
                        :<></>
                    }
                </div>
                <div className='col-1'>
                    {
                        user['is_superuser'] ? 
                            <label className="col-form-label">1</label>
                        : <></>
                    }
                </div>
                <div className='col-2'>
                    {
                        user['is_superuser'] ?
                            parseInt((FormData['RF_Industry']))===1 || parseInt((FormData['RF_Industry']))===3 || parseInt((FormData['RF_Industry']))===15 || parseInt((FormData['RF_Industry']))===19 
                            ?
                                <label className="col-form-label">1</label>
                            :
                            parseInt((FormData['RF_Industry']))===2 || parseInt((FormData['RF_Industry']))===12 || parseInt((FormData['RF_Industry']))===14 || parseInt((FormData['RF_Industry']))===16 || parseInt((FormData['RF_Industry']))===17 || parseInt((FormData['RF_Industry']))===20 || parseInt((FormData['RF_Industry']))===23 || parseInt((FormData['RF_Industry']))===24
                            || parseInt((FormData['RF_Industry']))===26 || parseInt((FormData['RF_Industry']))===27 || parseInt((FormData['RF_Industry']))===28 || parseInt((FormData['RF_Industry']))===30 || parseInt((FormData['RF_Industry']))===34
                            ?
                                <label className="col-form-label">3</label>
                            :  
                            parseInt((FormData['RF_Industry']))===4 || parseInt((FormData['RF_Industry']))===5 || parseInt((FormData['RF_Industry']))===6 || parseInt((FormData['RF_Industry']))===7 || parseInt((FormData['RF_Industry']))===8 || parseInt((FormData['RF_Industry']))===9 || parseInt((FormData['RF_Industry']))===10 || parseInt((FormData['RF_Industry']))===11 || parseInt((FormData['RF_Industry']))===13
                            || parseInt((FormData['RF_Industry']))===18 || parseInt((FormData['RF_Industry']))===21 || parseInt((FormData['RF_Industry']))===22 || parseInt((FormData['RF_Industry']))===29 || parseInt((FormData['RF_Industry']))===32 || parseInt((FormData['RF_Industry']))===33
                            ?
                                <label className="col-form-label">2</label>
                            :
                            parseInt((FormData['RF_Industry']))===25
                            ?
                                <label className="col-form-label">0</label>
                            :
                            parseInt((FormData['RF_Industry']))===31
                            ?
                                <label className="col-form-label">4</label>
                            : <></>
                        :<></>
                    }                    
                </div>  
            </div>
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}> 
                    <Tippy className='roa-tippy' conntent="Source of funds	The client’s source of funds for conducting this transaction">
                        <label className="col-form-label roa-font">Source of Funds</label>
                    </Tippy>      
                </div>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <select className="text-start form-select roa-font" name='RF_SourceOfFunds'  id='RF_SourceOfFunds' value={parseInt(FormData['RF_SourceOfFunds'])} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected>Select Option</option>
                        <option value="1">Allowance</option>
                        <option value="2">Bonus</option>
                        <option value="3">Bursary</option>
                        <option value="4">Company profits</option>
                        <option value="5">Company sale</option>
                        <option value="6">Cryptocurrency</option>
                        <option value="7">Debt capital</option>
                        <option value="8">Disability/social grant</option>
                        <option value="9">Dividends from investment</option>
                        <option value="10">Divorce settlement</option>
                        <option value="11">Equity capital</option>
                        <option value="12">Gambling winnings</option>
                        <option value="13">Gift</option>
                        <option value="14">Income from previous employment</option>
                        <option value="15">Inherritance</option>
                        <option value="16">Loan</option>
                        <option value="17">Lottery winnings</option>
                        <option value="18">Maintainance(Formal agreement)</option>
                        <option value="19">Maintainance(Informal agreement)</option>
                        <option value="20">Maturing Investments</option>
                        <option value="21">Other</option>
                        <option value="22">Pension</option>
                        <option value="23">Provident fund</option>
                        <option value="24">Rental Propert</option>
                        <option value="25">Retirement Funds</option>
                        <option value="26">Salary</option>
                        <option value="27">Salary asset/property</option>
                        <option value="28">Sale of shares</option>
                        <option value="29">Sanlam payout</option>
                        <option value="30">Savings</option>
                        <option value="31">Settlement</option>
                        <option value="32">Transfer to/from approved funds</option>
                        <option value="33">Trust Income</option>
                    </select>
                </div>
                <div className='col-2'></div>   
                <div className='col-1'>
                    {
                        user['is_superuser']
                        ?
                            parseInt((FormData['RF_SourceOfFunds']))===1 || parseInt((FormData['RF_SourceOfFunds']))===6 || parseInt((FormData['RF_SourceOfFunds']))===12 || parseInt((FormData['RF_SourceOfFunds']))===13 || parseInt((FormData['RF_SourceOfFunds']))===16
                            ?
                                <label className="col-form-label">3</label>
                            :
                            parseInt((FormData['RF_SourceOfFunds']))===2 || parseInt((FormData['RF_SourceOfFunds']))===3 || parseInt((FormData['RF_SourceOfFunds']))===8 || parseInt((FormData['RF_SourceOfFunds']))===9 || parseInt((FormData['RF_SourceOfFunds']))===14 || parseInt((FormData['RF_SourceOfFunds']))===17 || parseInt((FormData['RF_SourceOfFunds']))===18 || parseInt((FormData['RF_SourceOfFunds']))===20 || parseInt((FormData['RF_SourceOfFunds']))===22 || parseInt((FormData['RF_SourceOfFunds']))===23 || parseInt((FormData['RF_SourceOfFunds']))===25 || parseInt((FormData['RF_SourceOfFunds']))===26 || parseInt((FormData['RF_SourceOfFunds']))===29 || parseInt((FormData['RF_SourceOfFunds']))===31 || parseInt((FormData['RF_SourceOfFunds']))===32 || parseInt((FormData['RF_SourceOfFunds']))===33 
                            ?
                                <label className="col-form-label">1</label>
                            :
                            parseInt((FormData['RF_SourceOfFunds']))===4 || parseInt((FormData['RF_SourceOfFunds']))===5 || parseInt((FormData['RF_SourceOfFunds']))===7 || parseInt((FormData['RF_SourceOfFunds']))===10 || parseInt((FormData['RF_SourceOfFunds']))===11 || parseInt((FormData['RF_SourceOfFunds']))===15 || parseInt((FormData['RF_SourceOfFunds']))===19 || parseInt((FormData['RF_SourceOfFunds']))===24
                            || parseInt((FormData['RF_SourceOfFunds']))===27 || parseInt((FormData['RF_SourceOfFunds']))===28 || parseInt((FormData['RF_SourceOfFunds']))===30
                            ?
                                <label className="col-form-label">2</label>
                            :
                            parseInt((FormData['RF_SourceOfFunds']))===21
                            ?
                                <label className="col-form-label">0</label>
                            :
                            <></>
                        :
                        <></>
                    }
                </div>   
                <div className='col-1'>
                    {
                        user['is_superuser'] ? 
                            <label className="col-form-label">1</label>
                        : <></>
                    }
                </div>   
                <div className='col-2'>
                    {
                        user['is_superuser']
                        ?
                            parseInt((FormData['RF_SourceOfFunds']))===1 || parseInt((FormData['RF_SourceOfFunds']))===6 || parseInt((FormData['RF_SourceOfFunds']))===12 || parseInt((FormData['RF_SourceOfFunds']))===13 || parseInt((FormData['RF_SourceOfFunds']))===16
                            ?
                                <label className="col-form-label">3</label>
                            :
                            parseInt((FormData['RF_SourceOfFunds']))===2 || parseInt((FormData['RF_SourceOfFunds']))===3 || parseInt((FormData['RF_SourceOfFunds']))===8 || parseInt((FormData['RF_SourceOfFunds']))===9 || parseInt((FormData['RF_SourceOfFunds']))===14 || parseInt((FormData['RF_SourceOfFunds']))===17 || parseInt((FormData['RF_SourceOfFunds']))===18 || parseInt((FormData['RF_SourceOfFunds']))===20 || parseInt((FormData['RF_SourceOfFunds']))===22 || parseInt((FormData['RF_SourceOfFunds']))===23 || parseInt((FormData['RF_SourceOfFunds']))===25 || parseInt((FormData['RF_SourceOfFunds']))===26 || parseInt((FormData['RF_SourceOfFunds']))===29 || parseInt((FormData['RF_SourceOfFunds']))===31 || parseInt((FormData['RF_SourceOfFunds']))===32 || parseInt((FormData['RF_SourceOfFunds']))===33 
                            ?
                                <label className="col-form-label">1</label>
                            :
                            parseInt((FormData['RF_SourceOfFunds']))===4 || parseInt((FormData['RF_SourceOfFunds']))===5 || parseInt((FormData['RF_SourceOfFunds']))===7 || parseInt((FormData['RF_SourceOfFunds']))===10 || parseInt((FormData['RF_SourceOfFunds']))===11 || parseInt((FormData['RF_SourceOfFunds']))===15 || parseInt((FormData['RF_SourceOfFunds']))===19 || parseInt((FormData['RF_SourceOfFunds']))===24
                            || parseInt((FormData['RF_SourceOfFunds']))===27 || parseInt((FormData['RF_SourceOfFunds']))===28 || parseInt((FormData['RF_SourceOfFunds']))===30
                            ?
                                <label className="col-form-label">2</label>
                            :
                            parseInt((FormData['RF_SourceOfFunds']))===21
                            ?
                                <label className="col-form-label">0</label>
                            :
                            <></>
                        :
                        <></>
                    }
                </div>   
            </div>
            <br/>
            <div className='row'>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}> 
                    <Tippy className='roa-tippy' conntent="This describes the relationship that the client has with SFP for this transaction">
                        <label className="col-form-label roa-font">Relationship to client</label>
                    </Tippy>    
                </div>
                <div className={user['is_superuser'] ? "col-3" : "col-6"}>
                    <select className="text-start form-select roa-font" name='RF_RelationshipToClient' id='RF_RelationshipToClient' value={parseInt(FormData['RF_RelationshipToClient'])} onChange={(e)=>{onChange(e)}}  aria-label="Default select example">
                        <option value="0" selected>Select Option</option>
                        <option value="1">Annuitant</option>
                        <option value="2">Applicant</option>
                        <option value="3">Authorised Representative</option>
                        <option value="4">Cessionary</option>
                        <option value="5">Curator</option>
                        <option value="6">Executor</option>
                        <option value="7">Fund Annuitant</option>
                        <option value="8">Gurantor</option>
                        <option value="9">Legal Guardian</option>
                        <option value="10">Legal owner</option>
                        <option value="11">Multi data client</option>
                        <option value="12">Nominee of ownership</option>
                        <option value="13">Policy owner</option>
                        <option value="14">Power of Attorney</option>
                        <option value="15">Premium Payer</option>
                        <option value="16">Surety</option>
                        
                    </select>
                </div>
                <div className='col-2'></div>   
                <div className='col-1'>
                    {
                        user['is_superuser']
                        ?
                            parseInt((FormData['RF_RelationshipToClient']))===1 || parseInt((FormData['RF_RelationshipToClient']))===2 || parseInt((FormData['RF_RelationshipToClient']))===4 || parseInt((FormData['RF_RelationshipToClient']))===6 || parseInt((FormData['RF_RelationshipToClient']))===7 || parseInt((FormData['RF_RelationshipToClient']))===9 || parseInt((FormData['RF_RelationshipToClient']))===11
                            || parseInt((FormData['RF_RelationshipToClient']))===13 || parseInt((FormData['RF_RelationshipToClient']))===15
                            ?
                                <label className="col-form-label">1</label>
                            :
                            parseInt((FormData['RF_RelationshipToClient']))===3 || parseInt((FormData['RF_RelationshipToClient']))===5 || parseInt((FormData['RF_RelationshipToClient']))===8 || parseInt((FormData['RF_RelationshipToClient']))===10 || parseInt((FormData['RF_RelationshipToClient']))===12 || parseInt((FormData['RF_RelationshipToClient']))===14 || parseInt((FormData['RF_RelationshipToClient']))===16
                            ?
                                <label className="col-form-label">2</label>
                            :
                            <></>
                        :
                        <></>
                    }
                </div>   
                <div className='col-1'>
                    {
                        user['is_superuser'] ? 
                            <label className="col-form-label">1</label>
                        : <></>
                    }
                </div>   
                <div className='col-2'>
                    {
                        user['is_superuser']
                        ?
                            parseInt((FormData['RF_RelationshipToClient']))===1 || parseInt((FormData['RF_RelationshipToClient']))===2 || parseInt((FormData['RF_RelationshipToClient']))===4 || parseInt((FormData['RF_RelationshipToClient']))===6 || parseInt((FormData['RF_RelationshipToClient']))===7 || parseInt((FormData['RF_RelationshipToClient']))===9 || parseInt((FormData['RF_RelationshipToClient']))===11
                            || parseInt((FormData['RF_RelationshipToClient']))===13 || parseInt((FormData['RF_RelationshipToClient']))===15
                            ?
                                <label className="col-form-label">1</label>
                            :
                            parseInt((FormData['RF_RelationshipToClient']))===3 || parseInt((FormData['RF_RelationshipToClient']))===5 || parseInt((FormData['RF_RelationshipToClient']))===8 || parseInt((FormData['RF_RelationshipToClient']))===10 || parseInt((FormData['RF_RelationshipToClient']))===12 || parseInt((FormData['RF_RelationshipToClient']))===14 || parseInt((FormData['RF_RelationshipToClient']))===16
                            ?
                                <label className="col-form-label">2</label>
                            :
                            <></>
                        :
                        <></>
                    }
                </div>  
            </div>
            <br/>
            <div className='row'>
                <div className='col-6'>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handlePrevious}><FontAwesomeIcon width={"20px"}  icon={faArrowLeft} /> Initial Information</button>
                </div>
                <div className='col-6'>
                    <button className='btn btn-primary btn-sfp w-100' onClick={handleNext}>B. Product/Service Risk <FontAwesomeIcon width={"20px"}  icon={faArrowRight} /></button>
                </div>
            </div> 
        </div>
    );
};

export default ClientRisk;
