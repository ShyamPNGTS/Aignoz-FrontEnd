import React from 'react'

const TermsAndConditions = () => {
    return (
        <>
            {/**Hero Section */}
            <section className="relative bg-[#BE34EA33] bg-cover bg-center h-[30vh] md:min-h-[40vh] w-full">
                <div className="absolute w-[90%] flex flex-col justify-center items-center h-[30vh] md:min-h-[40vh] left-1/2 transform -translate-x-1/2 text-center px-4">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4">
                        Terms & Conditions
                    </h1>
                </div>
            </section>

            {/**Main Paragraphs Section */}
            <section className="section">
  <p className="text-primary-500 my-5 italic text-[18px] font-[600]">
    Effective July 20, 2025
  </p>

  <p className="text-[16px] mt-5 font-[400]">
    Welcome to AIGNOZ HEALTHCARE SOLUTIONS (OPC) PRIVATE LIMITED. By using our
    website, mobile app, or voice assistant (“Platform”), you agree to these
    Terms & Conditions. If you do not agree, please do not use our services.
  </p>

  <h1 className="text-[22px] mt-10 font-[400] mb-5">Table of Contents</h1>
  <ul className="list-decimal text-[16px] font-[400] flex flex-col gap-2 list-inside">
    <li><span className="text-primary-500">Acceptance of Terms</span></li>
    <li><span className="text-primary-500">Nature of Services</span></li>
    <li><span className="text-primary-500">Eligibility</span></li>
    <li><span className="text-primary-500">User Responsibilities</span></li>
    <li><span className="text-primary-500">Data Collection & Privacy</span></li>
    <li><span className="text-primary-500">Consent for Health Data Use</span></li>
    <li><span className="text-primary-500">Intellectual Property</span></li>
    <li><span className="text-primary-500">Medical Disclaimer</span></li>
    <li><span className="text-primary-500">Limitation of Liability</span></li>
    <li><span className="text-primary-500">Termination</span></li>
    <li><span className="text-primary-500">Grievance Redressal</span></li>
    <li><span className="text-primary-500">Governing Law</span></li>
  </ul>

  <h1 className="text-[22px] mt-10 font-[400]">1. Acceptance of Terms</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    By using our website, mobile app, or voice assistant (“Platform”), you agree to these Terms & Conditions. If you do not agree, you may not use our services.
  </p>

  <h1 className="text-[22px] mt-10 font-[400]">2. Nature of Services</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    Aignoz Healthcare Solutions OPC Private Limited provides AI-assisted healthcare services including:
  </p>
  <ul className="list-disc list-inside ml-4 mt-2 text-[#383F45]">
    <li>Appointment booking</li>
    <li>Health risk analysis (including genomics-based scoring)</li>
    <li>Diagnostic report summarization</li>
    <li>Patient-doctor interaction support</li>
    <li>Electronic Health Record (EHR) storage</li>
  </ul>
  <p className="mt-2 text-[#383F45]">
    <strong>Note:</strong> Our AI tools do not replace medical professionals. All clinical decisions should be taken by a registered medical practitioner.
  </p>

  <h1 className="text-[22px] mt-10 font-[400]">3. Eligibility</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    You must be:
  </p>
  <ul className="list-disc list-inside ml-4 mt-2 text-[#383F45]">
    <li>At least 18 years old, or</li>
    <li>Have parental/guardian consent if using services related to minors or children</li>
  </ul>

  <h1 className="text-[22px] mt-10 font-[400]">4. User Responsibilities</h1>
  <ul className="list-disc list-inside ml-4 mt-2 text-[#383F45]">
    <li>Provide accurate and updated information</li>
    <li>Not misuse the platform for spam, fraud, or impersonation</li>
    <li>Maintain confidentiality of your login credentials</li>
    <li>Seek medical advice from a qualified doctor before acting on any AI-generated suggestions</li>
  </ul>

  <h1 className="text-[22px] mt-10 font-[400]">5. Data Collection & Privacy</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    We collect and process personal and health-related data as per our Privacy Policy. This may include:
  </p>
  <ul className="list-disc list-inside ml-4 mt-2 text-[#383F45]">
    <li>Contact details</li>
    <li>Voice/audio interactions</li>
    <li>Health reports, genomic data, symptoms</li>
    <li>Chat logs and appointment summaries</li>
  </ul>
  <p className="mt-2 text-[#383F45]">
    Your data is protected under the Digital Personal Data Protection (DPDP) Act, 2023.
  </p>

  <h1 className="text-[22px] mt-10 font-[400]">6. Consent for Health Data Use</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    By using our services, you consent to the collection, processing, and storage of your health data for the declared purposes. You may withdraw this consent anytime by contacting us at: <strong>privacy@aignoz.com</strong>
  </p>

  <h1 className="text-[22px] mt-10 font-[400]">7. Intellectual Property</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    All content, software, reports, and tools on this platform are the intellectual property of Aignoz Healthcare Solutions OPC Private Limited. You may not copy, distribute, or reverse-engineer any part of it without permission.
  </p>

  <h1 className="text-[22px] mt-10 font-[400]">8. Medical Disclaimer</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    The information generated by AI (including genomic or diagnostic analysis) is for informational and educational purposes only. It should not be considered a substitute for professional medical advice, diagnosis, or treatment.
    <br />
    Always consult a licensed doctor for health-related decisions.
  </p>

  <h1 className="text-[22px] mt-10 font-[400]">9. Limitation of Liability</h1>
  <ul className="list-disc list-inside ml-4 mt-2 text-[#383F45]">
    <li>Clinical outcomes based on AI predictions</li>
    <li>Any harm due to misinterpretation of reports</li>
    <li>Data breaches caused by external vendors beyond our control</li>
    <li>Delays in appointments or consultations</li>
  </ul>

  <h1 className="text-[22px] mt-10 font-[400]">10. Termination</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    We reserve the right to suspend or terminate your access if:
  </p>
  <ul className="list-disc list-inside ml-4 mt-2 text-[#383F45]">
    <li>You breach these terms</li>
    <li>Misuse or abuse the platform</li>
    <li>Violate patient safety or privacy</li>
  </ul>

  <h1 className="text-[22px] mt-10 font-[400]">11. Grievance Redressal</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    If you have complaints related to data, consent, or service issues, please contact:
  </p>
  <ul className="list-inside ml-4 mt-2 text-[#383F45]">
    <li><strong>Grievance Officer:</strong> Srinidhi BV</li>
    <li><strong>Email:</strong> privacy@aignoz.com</li>
    <li><strong>Response Timeline:</strong> Within 7 working days</li>
  </ul>

  <h1 className="text-[22px] mt-10 font-[400]">12. Governing Law</h1>
  <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
    These Terms shall be governed by the laws of India. Disputes shall be subject to the jurisdiction of courts in Vellore, Tamil Nadu, India.
  </p>
</section>

        </>
    )
}

export default TermsAndConditions;
