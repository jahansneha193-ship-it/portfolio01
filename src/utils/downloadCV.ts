export function triggerCVDownload() {
  const cvContent = `===============================================================
                       YEAMIN JAHAN
  BBA Student | AI Learner | Creative & Marketing Enthusiast
===============================================================

Contact Information:
--------------------
• Email: yeaminjahansneha@gmail.com
• Phone: 01614997197
• Facebook: https://www.facebook.com/share/1JAgDxbDFh/
• Instagram: @yeamin.jahan

About Me:
---------
A passionate BBA student with a dedicated focus on Artificial Intelligence,
Digital Marketing, Content Creation, and Presentation Design. Skilled in
leveraging generative AI tooling alongside analytical business strategy
to craft meaningful marketing campaigns and creative solutions.

Education & Credentials:
------------------------
1. Bachelor of Business Administration (BBA) - Enrolled
   - Major: Marketing
   - Focus: Consumer behavior, brand management, digital promotion

2. Higher Secondary Certificate (HSC) - 2023
   - Institution: Sirajganj Government College
   - Result: GPA 5.00 / 5.00

3. Secondary School Certificate (SSC) - 2021
   - Institution: Sobuj Kanon School
   - Result: GPA 5.00 / 5.00

4. AI (Artificial Intelligence) Practical Training
   - Cohort: AI 01 Batch
   - Practical workflows in prompt engineering, generative tooling, and web integration.

Verified Certifications:
------------------------
• Excel Essentials for Workplace Productivity
  Issuing Organization: Passport to Earning Bangladesh (UNICEF & Generation Unlimited)
  Issued: September 15, 2026

Core Skill Sets:
----------------
• AI & Technology:
  - Generative AI Tools (ChatGPT, Gemini, Claude)
  - Prompt Engineering & Context Structuring
  - Basic HTML, CSS & Responsive Web Design

• Marketing & Content:
  - Digital Marketing Strategy & Consumer Research
  - Social Media Campaign Design & Management
  - Creative Copywriting & Visual Content Creation

• Design & Presentation:
  - Canva Pro Graphic & Promotional Design
  - High-Impact PowerPoint & Keynote Deck Architecture
  - Microsoft Word & Document Layout

• Creative & Media:
  - Photography & Composition
  - Video Editing & Storyboarding
  - Culinary & Creative Arts

Selected Projects:
------------------
1. AI Presentation – AI in Workplace: Corporate slide deck analyzing AI productivity.
2. AI Course Banner: High-conversion promotional visual kits for technology workshops.
3. HTML App – Pet Care & Selection: Interactive web application with tailored pet routines.
4. Marketing Project: End-to-end promotional strategy for local consumer products.
5. Creative Artwork: Digital art, typography posters, and harmonious color theory studies.
6. Canva Design – Social Media: Branded Instagram feeds and promotional templates.

===============================================================
                © 2026 Yeamin Jahan. All Rights Reserved.
===============================================================
`;

  const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Yeamin-Jahan-CV.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
