// LaTeX Resume Templates
export const latexTemplates = [
  {
    id: 1,
    name: "Tech Developer",
    description: "Optimized for software developers with projects and skills",
    code: `%-------------------------
% Resume in Latex
% Author
% License : MIT
%------------------------

%---- Required Packages and Functions ----

\\documentclass[a4paper,11pt]{article}
\\usepackage{latexsym}
\\usepackage{xcolor}
\\usepackage{float}
\\usepackage{ragged2e}
\\usepackage[empty]{fullpage}
\\usepackage{wrapfig}
\\usepackage{lipsum}
\\usepackage{tabularx}
\\usepackage{titlesec}
\\usepackage{geometry}
\\usepackage{marvosym}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage{fontawesome5}
\\usepackage{multicol}
\\usepackage{graphicx}
\\usepackage{cfr-lm}
\\usepackage[T1]{fontenc}
\\setlength{\\multicolsep}{0pt} 
\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}
\\geometry{left=1.4cm, top=0.8cm, right=1.2cm, bottom=1cm}
\\usepackage[most]{tcolorbox}
\\tcbset{
	frame code={}
	center title,
	left=0pt,
	right=0pt,
	top=0pt,
	bottom=0pt,
	colback=gray!20,
	colframe=white,
	width=\\dimexpr\\textwidth\\relax,
	enlarge left by=-2mm,
	boxsep=4pt,
	arc=0pt,outer arc=0pt,
}

\\urlstyle{same}

\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-7pt}]

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[2]{
  \\item{
    \\textbf{#1}{\\hspace{0.5mm}#2 \\vspace{-0.5mm}}
  }
}

\\newcommand{\\resumePOR}[3]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1}\\hspace{0.3mm}#2 & \\textit{\\small{#3}} 
    \\end{tabular*}
    \\vspace{-2mm}
}

\\newcommand{\\resumeSubheading}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & \\textit{\\footnotesize{#4}} \\\\
        \\textit{\\footnotesize{#3}} &  \\footnotesize{#2}\\\\
    \\end{tabular*}
    \\vspace{-2.4mm}
}

\\newcommand{\\resumeProject}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & \\textit{\\footnotesize{#3}} \\\\
        \\footnotesize{\\textit{#2}} & \\footnotesize{#4}
    \\end{tabular*}
    \\vspace{-2.4mm}
}

\\newcommand{\\resumeSubItem}[2]{\\resumeItem{#1}{#2}\\vspace{-4pt}}
\\renewcommand{\\labelitemi}{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=*,labelsep=0mm]}
\\newcommand{\\resumeHeadingSkillStart}{\\begin{itemize}[leftmargin=*,itemsep=1.7mm, rightmargin=2ex]}
\\newcommand{\\resumeItemListStart}{\\begin{justify}\\begin{itemize}[leftmargin=3ex, rightmargin=2ex, noitemsep,labelsep=1.2mm,itemsep=0mm]\\small}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}\\vspace{2mm}}
\\newcommand{\\resumeHeadingSkillEnd}{\\end{itemize}\\vspace{-2mm}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\end{justify}\\vspace{-2mm}}
\\newcommand{\\cvsection}[1]{%
\\vspace{2mm}
\\begin{tcolorbox}
    \\textbf{\\large #1}
\\end{tcolorbox}
    \\vspace{-4mm}
}
\\newcolumntype{L}{>{\\raggedright\\arraybackslash}X}%
\\newcolumntype{R}{>{\\raggedleft\\arraybackslash}X}%
\\newcolumntype{C}{>{\\centering\\arraybackslash}X}%
%---- End of Packages and Functions ------

%-------------------------------------------
%%%%%%  CV STARTS HERE  %%%%%%%%%%%
%%%%%% DEFINE ELEMENTS HERE %%%%%%%
\\newcommand{\\name}{Prashant Singh} % Your Name
\\newcommand{\\course}{Computer Science and Engineering} % Your Program
\\newcommand{\\roll}{xxxxxxx} % Your Roll No.
\\newcommand{\\phone}{xxxxxxxx} % Your Phone Number
\\newcommand{\\emaila}{prashantxxxxx@gmail.com} %Email 1

\\begin{document}
\\fontfamily{cmr}\\selectfont
%----------HEADING-----------------

{
\\begin{tabularx}{\\linewidth}{L r} \\\\
  \\textbf{\\Large \\name} & {\\raisebox{0.0\\height}{\\footnotesize \\faPhone}\\ +91-\\phone}\\\\
  {Roll No.: \\roll } & \\href{mailto:\\emaila}{\\raisebox{0.0\\height}{\\footnotesize \\faEnvelope}\\ {\\emaila}} \\\\
  Bachelor of Technology & \\href{https://github.com/xxxxx}{\\raisebox{0.0\\height}{\\footnotesize \\faGithub}\\ {GitHub Profile}} \\\\  
  {Shri Ramdeobaba College of Engineering and Management, Nagpur} & \\href{www.linkedin.com/in/xxxx/}{\\raisebox{0.0\\height}{\\footnotesize \\faLinkedin}\\ {LinkedIn Profile}}
\\end{tabularx}
}


%-----------EDUCATION-----------
\\section{\\textbf{Education}}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Bachelor of Technology in Computer Science and Engineering(Cyber Security)}{CGPA: xx}
      {Shri Ramdeobaba College of Engineering and Management, Nagpur}{2020-24}
  \\resumeSubHeadingListEnd
\\vspace{-5.5mm}
%
%-----------PROJECTS-----------------
\\section{\\textbf{Personal Projects}}
\\resumeSubHeadingListStart
    \\resumeProject
      {Web Based Facial Authentication(Liveness Detection)} %Project Name
      {A website based facial authentication system, implemented using a Chrome Extension.} %Project Name, Location Name
      {} %Event Dates

      \\resumeItemListStart
        \\item {Facilitating users' logins to websites without having to remember their credentials}
        \\item {Used Live detection techniques to create high order security.}
        \\item {Technology Used: Python, Reactjs, Bootstrap.}
    \\resumeItemListEnd
    \\vspace{-2mm}
    
    \\resumeProject
      {Realtime Chat App} %Project Name
      {A react based web application which allow users to chat in real time. } %Project Name, Location Name
      {} %Event Dates

      \\resumeItemListStart
        \\item {Used Firebase Authentication(SDK) to facilitate authentication & Cloud Firestore to store data.}
        \\item {Technology Used: Reactjs, Firebase, Bootstrap, HTML.}
    \\resumeItemListEnd
    \\vspace{-2mm}

    \\resumeProject
      {Covid-19 Tracker} %Project Name
      {Daily and weekly updated statistics tracking the number of COVID-19 cases, recovered, and deaths.} %Project Name, Location Name
      {} %Event Dates

      \\resumeItemListStart
        \\item {Tracking world-wide cases using google maps and live API stats and datasets.}
        \\item {Technology Used : JavaScript , CSS, HTML, API.
}
    \\resumeItemListEnd
      
  \\resumeSubHeadingListEnd
\\vspace{-8.5mm}


%-----------EXPERIENCE-----------------
\\section{\\textbf{Experience}}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {AWS Cloud Virtual Internship}{Online}
      {AICTE-Eduskills}{May - July 2023}
      \\vspace{-2.0mm}
      \\resumeItemListStart
    \\item {In-depth understanding of AWS cloud computing services, including EC2, S3, RDS, Lambda, IAM, VPC, and more.}
    \\item {Proficient in designing, deploying, and managing fault-tolerant, highly available, and scalable AWS solutions.}
    \\item {Strong knowledge of architectural best practices, such as AWS Well-Architected Framework, security, performance, and cost optimization.}
    \\item {Hands-on experience in cloud infrastructure provisioning, monitoring, and automation using AWS Management Console and AWS CLI.}
    \\resumeItemListEnd
    
    \\vspace{-3.0mm}
    
    \\resumeSubheading
      {Palo Alto Cybersecurity Virtual Internship}{Online}
      {AICTE-Eduskills}{Dec 2022 - Feb 2023}
      \\vspace{-2.0mm}
      \\resumeItemListStart
    \\item {Learned the fundamentals of Security Operations Center (SOC).}
    \\item {Learned basics of Network & Cloud Security.}
    \\resumeItemListEnd
    
    \\vspace{-3.0mm}
      
  \\resumeSubHeadingListEnd
\\vspace{-5.5mm}

%-----------Technical skills-----------------
\\section{\\textbf{Technical Skills and Interests}}
 \\begin{itemize}[leftmargin=0.05in, label={}]
    \\small{\\item{
     \\textbf{Languages}{: C/C++, Python, Javascript, HTML+CSS } \\\\
     \\textbf{Libraries }{: C++ STL, Python Libraries, ReactJs }\\\\ 
     \\textbf{Web Dev Tools}{: Nodejs, VScode, Git, Github } \\\\ 
     \\textbf{Frameworks}{: ReactJs } \\\\
     \\textbf{Cloud/Databases}{:MongoDb, Firebase, Relational Database(mySql) } \\\\  
     
     \\textbf{Relevent Coursework}{: Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Management System, Software Engineering. } \\\\ 
     \\textbf{Areas of Interest}{: Web Design and Development, Cloud Security.} \\\\
     \\textbf{Soft Skills}{: Problem Solving, Self-learning, Presentation, Adaptability} \\\\
    }}
 \\end{itemize}
 \\vspace{-16pt}

%-----------Positions of Responsibility-----------------
\\section{\\textbf{Positions of Responsibility}}
\\vspace{-0.4mm}
\\resumeSubHeadingListStart
\\resumePOR{On Desk Registrations Volunteer } % Position
    {Aarhant Cyber Week Event - RCOEM, Nagpur} %Club,Event
    {Oct - Dec 2022} %Tenure Period \\\\
    \\resumeItemListStart
    \\item {Helped to attract close to 300 attendees to the event.}
    \\item {Collected over Rs. 20,000 in entry fees for different activities.}
    \\resumeItemListEnd

\\resumeSubHeadingListEnd
\\vspace{-5mm}

%-------------------------------------------
\\end{document}`
  },
  {
    id: 2,
    name: "Professional Modern",
    description: "Clean and modern design for professionals",
    code: `%------------------------------------------------------------------------------
%------------------------------------------------------------------------------
%------------------------------------------------------------------------------
% Resume in Latex
% Author : Shubham Mazumder
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------------------------------------------------------------
%------------------------------------------------------------------------------
%------------------------------------------------------------------------------

\\documentclass[letterpaper,10pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{amsmath}
\\usepackage{soul}
\\input{glyphtounicode}
\\usepackage[margin=0.5in]{geometry}

%----------FONT OPTIONS----------
\\usepackage[default]{sourcesanspro}

% -------------------------------------
%----------PAGE SETUP------------------
% -------------------------------------

\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% URL style
\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-5pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-4pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

% ----------- Definitions -----------------------
\\def\\spaceforrole{ }
\\definecolor{lightyellow}{cmyk}{0.00, 0.05, 0.20, 0.00} % Highlights
\\sethlcolor{lightyellow} % Highlights

%--------------- Custom commands -----------------------

\\newcommand{\\sectionspace}{
\\vspace{-20pt}
}

\\newcommand{\\subheadingtitlevspace}{
\\vspace{-3pt}
}

% Resume Item
\\newcommand{\\resumeItem}[1]{
  \\item{
    {#1 \\vspace{-4pt}}
  }
}

% Titles
\\newcommand{\\titleItem}[1]{
  \\textbf{#1}
}

% Highlighting
\\newcommand{\\highlight}[1]{
  \\textsl{\\textbf{#1}}
}

% Resume Subheading
\\newcommand{\\resumeSubheading}[4]{
  \\item
     \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}l@{}l}     
      {#1} & \\titleItem{#3} | {#2} & \\textit{#4}\\\\
    \\end{tabular*}\\vspace{-10pt}
}

% Resume Sub-sub heading
\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{#1} & \\textit{#2} \\\\
    \\end{tabular*}\\vspace{-2pt}
}

% Resume Project Heading
\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      #1 & \\textit{ #2} \\\\
    \\end{tabular*}\\vspace{-9pt}
}

%Resume Subheading List
\\newcommand{\\resumeSubHeadingListStart}{\\subheadingtitlevspace\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}

%Resume Item List
\\newcommand{\\resumeItemListStart}{
\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{
\\end{itemize}\\vspace{-8pt}}

%-------------------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
%-------------------------------------------------------

\\begin{document}

% -------------------------------------
%----------HEADING---------------------
% -------------------------------------

\\begin{flushleft}
    \\textbf{\\large John Smith} \\\\    
    \\textit{Salt Lake City, Utah} $|$ 
    \\textit{111-111-1111} $|$  
    \\href{https://website}{{\\textit{@website}}} $|$
    \\href{mailto:email@email.com}{{\\textit{@mail}}} $|$ 
    \\href{https://linkedin.com/in/username}{{\\textit{@linkedin}}} $|$
    \\href{https://github.com/sansquoi}{{\\textit{@github}}}
    \\vspace{-8pt}
\\end{flushleft}

% -------------------------------------
%---------- PROFESSIONAL SUMMARY ------
% -------------------------------------

\\section{Professional Summary}
\\vspace{-3pt}
\\begin{itemize}[leftmargin=0.15in, label={}]
    {\\item{
     {Versatile developer with a Master's in Computer Science, distinguished for collaborative skills and a track record of independently delivering impactful results. Ample experience in full-stack development, delivering well-documented, tested, and operable code. Efficient in collaborating and communicating new ideas and opinions.} \\\\      
    }}
 \\end{itemize}
 \\sectionspace

% -------------------------------------
%----------HEADING---------------------
% -------------------------------------

\\section{Awards and Certifications}
    \\resumeSubHeadingListStart
      \\resumeProjectHeading
          {\\titleItem{Star Award} \\emph{ $|$ Company 1}}{September 2018}
      \\resumeProjectHeading
          {\\titleItem{Kudos Award} \\emph{ $|$ Company 2}}{May 2017}
      \\resumeProjectHeading
          {\\titleItem{IBM Full Stack Software Developer} \\emph{$|$ IBM}}{November 2023}
          \\resumeProjectHeading
          {\\titleItem{CompTia Sec+} \\emph{$|$ CompTia}}{December 2023}
    \\resumeSubHeadingListEnd
% -------------------------------------
%----------TECHNICAL SKILLS------------
% -------------------------------------

\\section{Technical Skills}
\\subheadingtitlevspace
 \\begin{itemize}[leftmargin=0.15in, label={}]
    {\\item{
     \\titleItem{Languages}{: C\\#, Python, C/C++, SQL (Postgres, MS-SQL, MySQL), JavaScript, TypeScript, HTML, XML, JSON, CSS, Sass} \\\\
     \\titleItem{Frameworks}{: ASP.NET (.NET Core, MVC, VB.NET), jQuery, React Native, Blazor, Node.js, Flask, Django, ExpressJS, Bootstrap} \\\\
     \\titleItem{DevOps and API Tools}{: IIS, Git, Docker, OpenShift, Kubernetes, Azure DevOps, TFS, Octopus Deploy, Swagger, Postman} \\\\
     \\titleItem{Cloud and Security Tools}{: IBM Cloud, AWS, Azure Cloud, SQL Server, SSIS, SSRS, Linux (Configuring and Managing)} \\\\
     \\titleItem{Others}{: Data Modeling, Agile (Scrum/Kanban), SOLID, Design Patterns,  Debugging, Root Cause Analysis}
    }}
 \\end{itemize}
\\sectionspace

% -------------------------------------
%----------EXPERIENCE------------------
% -------------------------------------

\\section{Experience}
  \\resumeSubHeadingListStart
      \\resumeProjectHeading
           {\\titleItem{{Software Developer 3}} $|$ \\emph{Company 3}}{August 2021 --Present}
      \\resumeItemListStart
        \\resumeItem{Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.}
        \\resumeItem{In cursus turpis massa tincidunt dui. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Suspendisse potenti nullam ac tortor. Ut consequat semper viverra nam libero justo laoreet sit amet. Feugiat nisl pretium fusce id velit ut tortor pretium.}
        \\resumeItem{Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.}
      \\resumeItemListEnd

    \\resumeProjectHeading
           {\\titleItem{{Software Developer 2}} $|$ \\emph{Company 2}}{July 2016 -- March 2020}
      \\resumeItemListStart
        \\resumeItem{Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.}
        \\resumeItem{In cursus turpis massa tincidunt dui. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Suspendisse potenti nullam ac tortor. }
        \\resumeItem{Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.}
        \\resumeItem{In cursus turpis massa tincidunt dui. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Suspendisse potenti nullam ac tortor. Ut consequat semper viverra nam libero justo laoreet sit amet. Feugiat nisl pretium fusce id velit ut tortor pretium. }
        \\resumeItemListEnd
        
    \\resumeProjectHeading
           {\\titleItem{{Software Developer}} $|$ \\emph{Company 1}}{July 2016 -- March 2020}
      \\resumeItemListStart    
    \\resumeItem{Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, generating\\highlight{$>$\\$100,000k in cost savings.}}
        \\resumeItem{Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, to save up to\\highlight{\\$30,000 in development hours.}} 
    \\resumeItemListEnd
  \\resumeSubHeadingListEnd

\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {University of Utah}{GPA : 3.86}
      {MS in Computer Science}{January 2021 -- December 2023} 
    \\resumeSubheading
      {University of Utah}{GPA : 3.75}
      {BS in Computer Science and Engineering}{August 2012 -- May 2016}
  \\resumeSubHeadingListEnd
\\vspace{-8pt}

% -------------------------------------
%----------PROJECTS--------------------
% -------------------------------------

 \\section{Projects}    
     \\resumeSubHeadingListStart
        \\resumeProjectHeading
           {\\titleItem{Project 1} $|$ \\emph{Django, IBM Cloud, SQLite, Function-as-a-Service, Kubernetes, OpenShift}}{Nov 2023}
            \\resumeItemListStart
            \\resumeItem{In cursus turpis massa tincidunt dui. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Suspendisse potenti nullam ac tortor. }
            \\resumeItem{Ut consequat semper viverra nam libero justo laoreet sit amet. Feugiat nisl pretium fusce id velit ut tortor pretium.}
           \\resumeItemListEnd
       \\resumeProjectHeading
           {\\titleItem{Project 2} $|$ \\emph{Python, numpy. D3.js}}{Spring 2022}
            \\resumeItemListStart
            \\resumeItem{Ut consequat semper viverra nam libero justo laoreet sit amet. Feugiat nisl pretium fusce id velit ut tortor pretium.} 
            \\resumeItem{In cursus turpis massa tincidunt dui. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Suspendisse potenti nullam ac tortor. }
           \\resumeItemListEnd
       \\resumeProjectHeading
           {\\titleItem{Project 3} $|$ \\emph{\\LaTeX}}{November 2021}
            \\resumeItemListStart
            \\resumeItem{In cursus turpis massa tincidunt dui. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Suspendisse potenti nullam ac tortor. }
           \\resumeItemListEnd
     \\resumeSubHeadingListEnd

%-------------------------------------------
\\end{document}`
  },
  {
    id: 3,
    name: "AI/ML Engineer",
    description: "Specialized for AI/ML professionals with technical skills focus",
    code: `\\documentclass[letterpaper,10pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}

% Font options
\\usepackage[sfdefault]{roboto}  % Sans-serif font

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Section formatting
\\titleformat{\\section}{\\Large\\bfseries\\scshape\\raggedright}{}{0em}{}[\\titlerule]

% Ensure PDF is machine readable
\\pdfgentounicode=1

% Custom commands
\\newcommand{\\resumeItem}[1]{\\item\\small{#1}}
\\newcommand{\\resumeSubheading}[4]{
\\vspace{-1pt}\\item
  \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & #2 \\\\
    \\textit{#3} & \\textit{#4} \\\\
  \\end{tabular*}\\vspace{-7pt}
}
\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
\\newcommand{\\resumeSubHeadingList}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}

\\begin{document}

\\begin{center}
  \\textbf{\\Huge Alex Webb} \\\\
  \\small 555-123-4567 $|$ \\href{mailto:alex@email.com}{alex@email.com} $|$ 
  \\href{https://linkedin.com/in/burhan-webb}{linkedin.com/in/alexwebbx} $|$
  \\href{https://github.com/zwayth}{github.com/alexwebbx}
\\end{center}

\\section*{Summary}
Passionate AI/ML engineer with a strong background in deep learning, computer vision, and natural language processing. Skilled in Python, TensorFlow, PyTorch, and various ML libraries. Excellent problem-solving, research, and collaboration abilities. Seeking a challenging role to develop cutting-edge AI solutions.

\\section{Technical Skills}
\\resumeSubHeadingList
  \\resumeItem{\\textbf{Programming Languages}: Python, C++, SQL, MATLAB}
  \\resumeItem{\\textbf{Deep Learning Frameworks}: TensorFlow, PyTorch, Keras, Caffe}
  \\resumeItem{\\textbf{Libraries & Tools}: NumPy, Pandas, Scikit-learn, OpenCV, NLTK, Git, Docker}
\\resumeSubHeadingListEnd

\\section{Projects}
\\resumeSubHeadingList
  \\resumeSubheading
      {Image Captioning System}{Jan 2023 -- Present}
      {Deep Learning Project}{Python, TensorFlow, OpenCV}
      \\resumeSubHeadingList
          \\resumeItem{\\textbullet\\ Developed an end-to-end system for generating descriptive captions for images}
          \\resumeItem{\\textbullet\\ Utilized CNN and LSTM models for image feature extraction and caption generation}
          \\resumeItem{\\textbullet\\ Achieved state-of-the-art performance on the COCO dataset}
      \\resumeSubHeadingListEnd
  \\resumeSubheading
      {Sentiment Analysis API}{Aug 2022 -- Dec 2022} 
      {Natural Language Processing}{Python, Flask, NLTK, Hugging Face}
      \\resumeSubHeadingList
          \\resumeItem{\\textbullet\\ Built a RESTful API for sentiment analysis of text data}
          \\resumeItem{\\textbullet\\ Implemented pre-trained transformer models using Hugging Face}
          \\resumeItem{\\textbullet\\ Deployed the API on a cloud platform for easy integration}
      \\resumeSubHeadingListEnd
\\resumeSubHeadingListEnd

\\section{Experience}
\\resumeSubHeadingList
  \\resumeSubheading
      {AI Research Intern}{June 2022 -- Aug 2022}
      {DeepMind}{London, UK}
      \\resumeSubHeadingList
          \\resumeItem{\\textbullet\\ Conducted research on reinforcement learning algorithms for robotics}
          \\resumeItem{\\textbullet\\ Implemented and evaluated deep RL models using PyTorch and RLlib}
          \\resumeItem{\\textbullet\\ Presented findings at weekly research meetings}
      \\resumeSubHeadingListEnd
  \\resumeSubheading
      {Machine Learning Engineer}{Jan 2021 -- May 2022}
      {Acme AI Solutions}{San Francisco, CA}
      \\resumeSubHeadingList
          \\resumeItem{\\textbullet\\ Developed and deployed machine learning models for various industries}
          \\resumeItem{\\textbullet\\ Optimized model performance and ensured data quality}
          \\resumeItem{\\textbullet\\ Collaborated with cross-functional teams to deliver AI solutions}
      \\resumeSubHeadingListEnd
\\resumeSubHeadingListEnd

\\section{Education}
\\resumeSubHeadingList
  \\resumeSubheading
      {Stanford University}{Stanford, CA}
      {M.S. in Computer Science, Artificial Intelligence}{Aug 2019 -- May 2021}
  \\resumeSubheading
      {University of California, Berkeley}{Berkeley, CA}
      {B.S. in Electrical Engineering and Computer Science}{Aug 2015 -- May 2019}
\\resumeSubHeadingListEnd

\\section{Certifications}
\\resumeSubHeadingList
  \\resumeItem{\\textbullet\\ AWS Certified Machine Learning - Specialty}
  \\resumeItem{\\textbullet\\ TensorFlow Developer Certificate}
\\resumeSubHeadingListEnd

\\end{document}`
  },
  {
    id: 4,
    name: "Digital Marketing",
    description: "Perfect for marketing professionals with campaign focus",
    code: `\\documentclass[11pt,a4paper,sans]{moderncv}
\\moderncvstyle{banking}
\\moderncvcolor{black}
\\nopagenumbers{}
\\usepackage[utf8]{inputenc}
\\usepackage{ragged2e}
\\usepackage[scale=0.915]{geometry}
\\usepackage{import}
\\usepackage{multicol}
\\usepackage{import}
\\usepackage{enumitem}
\\usepackage[utf8]{inputenc}
\\usepackage{amssymb}
\\name{John}{Doe}
\\newcommand*{\\customcventry}[7][.13em]{
\\begin{tabular}{@{}l}
{\\bfseries #4} \\\\
{\\itshape #3}
\\end{tabular}
\\hfill
\\begin{tabular}{l@{}}
{\\bfseries #5} \\\\
{\\itshape #2}
\\end{tabular}
\\ifx&#7&%
\\else{\\\\
\\begin{minipage}{\\maincolumnwidth}%
\\small#7%
\\end{minipage}}\\fi%
\\par\\addvspace{#1}}
\\begin{document}
\\makecvtitle
\\vspace*{-16mm}
\\begin{center}\\textbf{ Digital Marketer and Business Analyser}\\end{center}
\\begin{center}
\\begin{tabular}{ c c c }
\\faMobile\\enspace +44 1234567890 & \\enspace something@gmail.com & \\faHome\\enspace London, UK \\\\
\\faLinkedin\\enspace \\color{blue} \\href{https://www.linkedin.com/in/????/}{in/something} &
\\faGithub\\enspace \\color{blue} \\href{https://github.com/????}{github.com/something} & \\enspace {$\\mathbb{X}$}\\enspace \\color{blue} \\href{https://x.com/????}{x.com/something}
\\end{tabular}
\\end{center}

\\section{Profile}
{Innovative Digital Marketing Manager with 5+ years of experience managing online marketing campaigns and leading cross-functional teams. Skilled in developing integrated marketing strategies that drive brand awareness, engagement, and conversions. Regularly exceed performance targets and possess advanced analytical and problem solving skills. Adept at leveraging cutting-edge digital tools and platforms to achieve marketing objectives.}

\\section{Areas of Expertise}
{Content Marketing - WordPress - Content Strategy - Search Engine Ranking - Data Analysis - Visualizing with Advanced Charts - Social Media - Email Marketing - User Experience - Digital Strategy - Campaign Management - Lead Generation}

\\section{Professional Experience}
\\customcventry{06/2023 ‐ present}{{\\color{blue}\\href{https://google.com/}{(Stellar Systems)}}}{Digital Marketing Strategist,}{Las Vegas, NV}{}{{
{\\begin{itemize}[leftmargin=0.6cm, label={\\textbullet}]
\\item Developed strategic plans for campaigns across email, social media, SEO/SEM, and display advertising techniques.
\\item Developed and implemented digital marketing strategies that generated over \\$850,000 in revenue in 2023
\\item Oversee the execution of SEO, SEM, email, social media, and display advertising campaigns, achieving a 12\\% decrease in cost per acquisition
\\end{itemize}}}}

\\customcventry{01/2023 ‐ 05/2023}{{\\color{blue}\\href{https://www.google.com/}{(Synapse Solutions)}}}{Digital Account Manager,}{Las Vegas, NV}{}{{
{\\begin{itemize}[leftmargin=0.6cm, label={\\textbullet}]
\\item Implemented promotional activities such as re-targeting campaigns for e-commerce businesses.
\\item Monitored the performance of PPC campaigns through Google Adwords. 
\\item Managed and optimized PPC campaigns, resulting in a 5\\% increase in click-through rates
\\end{itemize}}}}

\\customcventry{03/2023 ‐ 12/2023}{{\\color{blue}\\href{https://www.google.com/}{(CeeCee Marketing)}}}{Marketing Coordinator,}{New YOrk, NY}{}{{
{\\begin{itemize}[leftmargin=0.6cm, label={\\textbullet}]
\\item Identified and executed improvements for processes, content, and lead generation.
\\item Collaborated with Content Team to promote blog posts and guest posts.
\\item Implemented new competitive analysis and consumer trend reports to increase quarterly sales by 15\\%.
\\end{itemize}}}}

\\section{Online Courses & Certifications}
{{\\begin{itemize}[label=\\textbullet]
      \\item Introduction to Digital Marketing (Jan. 2023) - \\underline{\\color{blue}\\href{https://google.com/}{SEMRUSH}}
      \\item Career Essentials in Digital Marketing by LinkedIn (Aug. 2022) - \\underline{\\color{blue}\\href{https://google.com/}{LinkedIn}}
      \\item Visualization with Tableau (Feb. 2022) - \\underline{\\color{blue}\\href{https://google.com/}{Coursera}}
      \\item Foundations of Google Analytics  (Jun. 2021) - \\underline{\\color{blue}\\href{https://google.com/}{Google, Coursera}}
     \\item Google Analytics for Power Users (Jun. 2021) - \\underline{\\color{blue}\\href{https://google.com/}{Google}}
       \\item The Fundamentals of Digital Marketing, (Jul. 2019) - \\underline{\\color{blue}\\href{https://google.com/}{Google}} 
  \\end{itemize}}} 

\\section{Education}
\\customcventry{2020-2024}{\\color{blue}\\href{https://www.google.com/}{University of Las Vegas}}{BSc Computer Science}{Las Vegas, USA}{}{}{Relevant Courses: Software and Hardware, Data Visualization, Business Intelligence, Digital Marketing, Time Series Analysis & Forecasting.}

\\section{Skills}
{{\\begin{itemize}[label=\\textbullet]
\\item {\\textbf{Data Visualization:} Microsoft Power BI, Excel}
\\item {\\textbf{Digital Marketing:} Project Management, Social Media Optimization, Content Writing, Campaign Analysis & Reporting, PPC & SEM Strategies, Conversion rate optimization (CRO), PPC advertising}
\\item {\\textbf{Software:} Project (MSP), Adobe PhotoShop, Audition, Canva}
\\item {\\textbf{SEO:} Google Search Console, Analytics, Looker Studio, Trends, Screaming Frog, SEMrush, Ahrefs, WordPress}
\\item {\\textbf{Soft Skills:} Presentation, Planning, Organized, Creative Problem-Solving, Teamwork, Active Listening, Adaptability, Analytical Thinking}
\\end{itemize}}}

\\section{Languages}
\\begin{multicols}{2}
    \\begin{itemize}[label=\\textbullet]
    \\item \\textbf{English} [Native]
    \\item {\\textbf{French} [Basic] - Learning}
    \\item {\\textbf{Spanish} [Native]}
    \\item {\\textbf{German} [Basic] - A1}
    \\end{itemize}
\\end{multicols}
\\end{document}`
  },
  {
    id: 5,
    name: "ATS-Friendly Arabic",
    description: "Clean ATS-optimized template with Arabic RTL support",
    code: `% Description: This LaTeX document is a template for creating an ATS-friendly resume. 
% It includes sections for contact information, work experience, skills, certifications, 
% achievements, and education. The template is designed to be simple, clean, and easy to 
% parse by Applicant Tracking Systems (ATS).
% Author: Samr Alhawsawi
% Date: 2024

\\documentclass[a4paper,10pt]{article} % Document class and font size
\\usepackage[a4paper,margin=0.5in]{geometry} % Page layout
\\usepackage{enumitem} % Enhanced list environments
\\usepackage{graphicx} % Graphics support
\\usepackage{multicol} % Multiple columns
\\usepackage{fontspec} % Font selection
\\usepackage{hyperref} % Hyperlinks
\\usepackage{setspace} % Line spacing
\\usepackage{fontawesome} % Icons
\\usepackage{bidi} % Bidirectional text support

\\setmainfont{Times New Roman} % Main font setting

% Adjust spacing
\\setlength{\\parskip}{-2em} % Space between paragraphs
\\setlength{\\itemsep}{0em} % Space between items in a list
\\setlength{\\parsep}{0em} % Space between paragraphs within an item
\\setlength{\\partopsep}{0em} % Extra space added to \\topsep when environment starts a new paragraph
\\setlength{\\topsep}{0em} % Space between first list item and preceding paragraph
\\setlength{\\baselineskip}{0em} % Space between lines

% Suppress page numbers
\\pagenumbering{gobble} % Remove page numbers

\\begin{document}

\\begin{RTL} % Right-to-left text environment

% Header section
\\begin{multicols}{2} % Two columns
\\begin{flushleft} % Left column content
    \\vspace{0.2cm}
    \\faPhone\\ +1234567890 \\\\
    \\faEnvelope\\ \\href{mailto:ali.fakeeh@example.com}{m@example.com} \\\\
    \\faLinkedin\\ \\href{https://www.linkedin.com/in/alifakeeh}{https://www.linkedin.com/in/m} \\\\
    \\faBehance\\ \\href{https://www.behance.net/alifakeeh}{https://www.behance.net/m} \\\\
\\end{flushleft}
\\begin{flushright} % Right column content
    {\\LARGE \\textbf{محمد عبدالله}}\\\\
    \\vspace{0.2cm}
    بكالوريوس في علوم الحاسب الآلي ونظم المعلومات \\\\
    الرياض - المملكة العربية السعودية \\\\
\\end{flushright}
\\end{multicols}

% Line separator
\\vspace{0.3cm}
\\noindent\\rule{\\textwidth}{1pt} % Horizontal line
\\vspace{0.3cm}

% Work Experience section
\\section*{الخبرات العملية}
\\vspace{0.5cm} % Add space between section title and content
\\begin{tabbing}
    \\hspace{8cm} \\= \\hspace{5cm} \\= \\kill
    \\textbf{شركة البرمجيات المبتكرة} > الرياض، المملكة العربية السعودية - فبراير 2021 - يناير 2022 \\\\
    \\ \\textbf{مطور تطبيقات} \\\\
    \\textbf{المهام}: تطوير وصيانة تطبيقات الموبايل باستخدام Flutter وإنشاء واجهات مستخدم تفاعلية > \\\\ \\\\
    \\textbf{شركة الحلول الرقمية} > جدة، المملكة العربية السعودية - مارس 2020 - يناير 2021 \\\\
    \\ \\textbf{مطور ويب - متدرب} \\\\
    \\textbf{المهام}: تصميم وتطوير مواقع الويب باستخدام HTML, CSS, JavaScript وإدارة قواعد البيانات > \\\\
\\end{tabbing}

% Line separator
\\vspace{0.3cm}
\\noindent\\rule{\\textwidth}{1pt} % Horizontal line
\\vspace{0.3cm}

% Skills section
\\section*{المهارات}
\\vspace{0.5cm} % Add space between section title and content
\\begin{tabbing}
    \\hspace{3cm} \\= \\kill
    \\textbf{اللغات:} > الإنجليزية، العربية \\\\
    \\textbf{المهارات الشخصية:} > التفكير الإبداعي، العمل الجماعي، إدارة المشاريع، التواصل الفعّال \\\\
    \\textbf{المهارات التقنية:} \\+ \\\\
    \\textbf{البرمجة:}  Python, Java, JavaScript, Dart \\\\
    \\textbf{إطارات العمل:}  Flutter, React, Django \\\\
    \\textbf{أدوات التطوير:}  Docker, Git, Jenkins \\\\
    \\textbf{قواعد البيانات:}  MySQL, PostgreSQL, Firebase \\\\
    \\textbf{أخرى:}   AWS, Azure, TensorFlow, Keras \\- \\\\
\\end{tabbing}

% Line separator
\\vspace{0.3cm}
\\noindent\\rule{\\textwidth}{1pt} % Horizontal line
\\vspace{0.3cm}

% Certifications section
\\section*{الشهادات}
\\vspace{0.5cm} % Add space between section title and content
\\begin{tabbing}
    \\hspace{8cm} \\= \\kill
    \\textbf{AWS Certified Solutions Architect:} > AWS Training، 30 ساعة \\\\
    \\textbf{Google Certified Associate Android Developer:} > Google، 25 ساعة \\\\
    \\textbf{Microsoft Certified: Azure Fundamentals:} > Microsoft، 20 ساعة \\\\
    \\textbf{Certified ScrumMaster (CSM):} > Scrum Alliance، 20 ساعة \\\\
    \\textbf{دورة تصميم تجربة المستخدم (UX Design):} > Coursera، 15 ساعة \\\\
\\end{tabbing}

% Line separator
\\vspace{0.3cm}
\\noindent\\rule{\\textwidth}{1pt} % Horizontal line
\\vspace{0.3cm}

% Achievements section
\\section*{الإنجازات}
\\vspace{0.5cm} % Add space between section title and content
\\begin{tabbing}
    \\hspace{12cm} \\= \\kill
    \\textbf{قبول ورقة بحثية:} بعنوان "تحليل البيانات الضخمة باستخدام تقنيات التعلم الآلي"\\\\ في مؤتمر BigData 2023، أبريل 2023 \\\\
    \\textbf{تطوير تطبيق "الصحة للجميع":} تطبيق لمتابعة اللياقة البدنية باستخدام Flutter، مايو 2022 \\\\
    \\textbf{حصول على جائزة أفضل مشروع تخرج:} مشروع بعنوان "نظام إدارة التعلم الإلكتروني باستخدام الذكاء الاصطناعي"\\\\ من جامعة الملك سعود، يونيو 2021 \\\\
\\end{tabbing}

% Line separator
\\vspace{0.3cm}
\\noindent\\rule{\\textwidth}{1pt} % Horizontal line
\\vspace{0.3cm}

% Education section
\\section*{التعليم}
\\vspace{0.5cm} % Add space between section title and content
\\begin{tabbing}
    \\hspace{8cm} \\= \\hspace{5cm} \\= \\kill
    \\textbf{بكالوريوس في علوم الحاسوب} > جامعة الملك سعود > 2017 - 2021 \\\\
\\end{tabbing}

\\end{RTL}

\\end{document}`
  },
  {
    id: 6,
    name: "Minimalist Clean",
    description: "Simple and clean design with elegant typography",
    code: `%%%%
% MTecknology's Resume
%%%%
% Author: Michael Lustfield
% License: CC-BY-4
% - https://creativecommons.org/licenses/by/4.0/legalcode.txt
%%%%

\\documentclass[letterpaper,10pt]{article}
%%%%%%%%%%%%%%%%%%%%%%%
%% BEGIN_FILE: mteck.sty
%% NOTE: Everything between here and END_FILE can
%% be relocated to "mteck.sty" and then included with:
%\\usepackage{mteck}

% Dependencies
% NOTE: Some packages (lastpage, hyperref) require second build!
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage{fontawesome5}
\\usepackage{multicol}
\\usepackage{bookmark}
\\usepackage{lastpage}

% Sans-Serif
%\\usepackage[sfdefault]{FiraSans}
%\\usepackage[sfdefault]{roboto}
%\\usepackage[sfdefault]{noto-sans}
%\\usepackage[default]{sourcesanspro}

% Serif
\\usepackage{CormorantGaramond}
\\usepackage{charter}

% Colors
% Use with \\color{Name}
% Can wrap entire heading with {\\color{accent} [...] }
\\usepackage{xcolor}
\\definecolor{accentTitle}{HTML}{0e6e55}
\\definecolor{accentText}{HTML}{0e6e55}
\\definecolor{accentLine}{HTML}{a16f0b}

% Misc. Options
\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}
\\urlstyle{same}

% Adjust Margins
\\addtolength{\\oddsidemargin}{-0.7in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.19in}
\\addtolength{\\topmargin}{-0.7in}
\\addtolength{\\textheight}{1.4in}

\\setlength{\\multicolsep}{-3.0pt}
\\setlength{\\columnsep}{-1pt}
\\setlength{\\tabcolsep}{0pt}
\\setlength{\\footskip}{3.7pt}
\\raggedbottom
\\raggedright

% ATS Readability
\\input{glyphtounicode}
\\pdfgentounicode=1

%-----------------%
% Custom Commands %
%-----------------%

% Centered title along with subtitle between HR
% Usage: \\documentTitle{Name}{Details}
\\newcommand{\\documentTitle}[2]{
  \\begin{center}
    {\\Huge\\color{accentTitle} #1}
    \\vspace{10pt}
    {\\color{accentLine} \\hrule}
    \\vspace{2pt}
    %{\\footnotesize\\color{accentTitle} #2}
    \\footnotesize{#2}
    \\vspace{2pt}
    {\\color{accentLine} \\hrule}
  \\end{center}
}

% Create a footer with correct padding
% Usage: \\documentFooter{\\thepage of X}
\\newcommand{\\documentFooter}[1]{
  \\setlength{\\footskip}{10.25pt}
  \\fancyfoot[C]{\\footnotesize #1}
}

% Simple wrapper to set up page numbering
% Usage: \\numberedPages
% WARNING: Must run pdflatex twice!
\\newcommand{\\numberedPages}{
  \\documentFooter{\\thepage/\\pageref{LastPage}}
}

% Section heading with horizontal rule
% Usage: \\section{Title}
\\titleformat{\\section}{
  \\vspace{-5pt}
  \\color{accentText}
  \\raggedright\\large\\bfseries
}{}{0em}{}[\\color{accentLine}\\titlerule]

% Section heading with separator and content on same line
% Usage: \\tinysection{Title}
\\newcommand{\\tinysection}[1]{
  \\phantomsection
  \\addcontentsline{toc}{section}{#1}
  {\\large{\\bfseries\\color{accentText}#1} {\\color{accentLine} |}}
}

% Indented line with arguments left/right aligned in document
% Usage: \\heading{Left}{Right}
\\newcommand{\\heading}[2]{
  \\hspace{10pt}#1\\hfill#2\\\\
}

% Adds \\textbf to \\heading
\\newcommand{\\headingBf}[2]{
  \\heading{\\textbf{#1}}{\\textbf{#2}}
}

% Adds \\textit to \\heading
\\newcommand{\\headingIt}[2]{
  \\heading{\\textit{#1}}{\\textit{#2}}
}

% Template for itemized lists
% Usage: \\begin{resume_list} [items] \\end{resume_list}
\\newenvironment{resume_list}{
  \\vspace{-7pt}
  \\begin{itemize}[itemsep=-2px, parsep=1pt, leftmargin=30pt]
}{
  \\end{itemize}
  %\\vspace{-2pt}
}

% Formats an item to use as an itemized title
% Usage: \\itemTitle{Title}
\\newcommand{\\itemTitle}[1]{
  \\item[] \\underline{#1}\\vspace{4pt}
}

% Bullets used in itemized lists
\\renewcommand\\labelitemi{--}

%% END_FILE: mteck.sty
%%%%%%%%%%%%%%%%%%%%%%


%===================%
% John Doe's Resume %
%===================%

%\\numberedPages % NOTE: lastpage requires a second build
%\\documentFooter{\\thepage of 2} % Does similar without using lastpage
\\begin{document}

  %---------%
  % Heading %
  %---------%

  \\documentTitle{John Doe}{
    % Web Version
    %\\raisebox{-0.05\\height} \\faPhone\\ [redacted - web copy] ~
    %\\raisebox{-0.15\\height} \\faEnvelope\\ [redacted - web copy] ~
    %%
    \\href{tel:1234567890}{
      \\raisebox{-0.05\\height} \\faPhone\\ 123-456-7890} ~ | ~
    \\href{mailto:user@domain.tld}{
      \\raisebox{-0.15\\height} \\faEnvelope\\ USER@domain.tld} ~ | ~
    \\href{https://linkedin.com/in/USER/}{
      \\raisebox{-0.15\\height} \\faLinkedin\\ linkedin.com/in/USER} ~ | ~
    \\href{https://github.com/USER}{
      \\raisebox{-0.15\\height} \\faGithub\\ github.com/USER}
  }

  %---------%
  % Summary %
  %---------%

  \\tinysection{Summary}
  Simplified version of a monstrosity that I built back in college using current best practices.

  %--------%
  % Skills %
  %--------%

  \\section{Skills}

  \\begin{multicols}{2}
    \\begin{itemize}[itemsep=-2px, parsep=1pt, leftmargin=75pt]
      \\item[\\textbf{Automation}] SaltStack, Ansible, Chef, Puppet
      \\item[\\textbf{Cloud}] Salt-Cloud, Linode, GCP, AWS
      \\item[\\textbf{Languages}] Python, Bash, PHP, Perl, VB/C\\#.Net
      \\item[\\textbf{OS}] Debian, Ubuntu, CentOS, BSD, AIX
      \\item[\\textbf{Policies}] CIS, SOC2, PCI-DSS, GDPR, ITIL
      \\item[\\textbf{Testing}] Pytest, Docker, CircleCI, Jenkins, Inspec
    \\end{itemize}
  \\end{multicols}

  %------------%
  % Experience %
  %------------%

  \\section{Experience}

  \\headingBf{Consulting Corp}{Jul 2015 -- Jun 2025}
  \\headingIt{Senior DevOps Engineer (FTE Consultant)}{}
  \\begin{resume_list}
    \\itemTitle{Client: Notable Placement}
    \\item Analyzed network traffic patterns to identify bottlenecks and optimize performance
    \\item Implemented firewall rules to enhance network security and prevent unauthorized access
    \\item Conducted regular vulnerability assessments and applied patches to secure systems
    \\item Collaborated with cross-functional teams to streamline IT processes and improve efficiency
    \\vspace{3pt}
    \\itemTitle{Client: Challenges Unlimited}
    \\item Configured monitoring tools to track system performance and troubleshoot issues proactively
    \\item Automated routine tasks using scripts to reduce manual effort and increase productivity
    \\item Documented system configurations and procedures for knowledge sharing within the team
    \\item Participated in disaster recovery planning and drills to ensure business continuity in case of emergencies
    \\vspace{3pt}
    \\itemTitle{Client: Broken Galleries}
    \\item Implemented cloud migration strategies to move applications to a hybrid environment
    \\item Optimized database performance through indexing and query tuning techniques
    \\item Conducted capacity planning and scalability assessments to support future growth
    \\item Provided on-call support for critical issues and worked on root cause analysis for incident resolution
  \\end{resume_list}

  \\headingBf{HealthCo Industries}{Feb 2011 -- Mar 2016}
  \\headingIt{Senior Systems Administrator (SRE)}{}
  \\begin{resume_list}
    \\item Managed virtualized server environment spanning multiple data centers
    \\item Oversaw migration of critical business applications to cloud-based platforms
    \\item Configured and monitored network security measures, including firewalls and intrusion detection systems
    \\item Implemented multi-factor authentication for remote access to company systems
    \\item Streamlined patch management process, reducing vulnerabilities and downtime
    \\item Conducted regular vulnerability assessments and penetration testing
    \\item Automated server provisioning and configuration management tasks
    \\item Maintained documentation for IT policies and procedures
    \\item Coordinated responses to cybersecurity incidents with internal teams and external vendors
  \\end{resume_list}

  %-----------%
  % Education %
  %-----------%

  \\section{Education}

  \\headingBf{State University}{} % Note: Adding year(s) exposes an implied age
  \\headingIt{Bachelor of Science in Computer Information Systems}{}
  \\headingIt{Minors: Networking ; Network Security}{}

  \\vspace{5pt}
  \\headingBf{Certifications}{}
  \\begin{resume_list}
    \\item Salt \\hspace{2pt}- SaltStack Certified Engineer
    \\item GCP - Professional Cloud Architect
  \\end{resume_list}

  %----------------------------%
  % Extracurricular Activities %
  %----------------------------%

  \\section{Projects}

  \\headingBf{Hospital / Health Science IRB}{Mar 2015 -- Present}
  \\begin{resume_list}
    \\item Served as non-scientific/unaffiliated patient-representative
    \\item Reviewed patient consent forms for completeness, accuracy, and clarity
    \\item Became familiar with industry standards and regulations (OHRP, HIPAA)
  \\end{resume_list}

  \\headingBf{Debian Linux}{Jan 2001 -- Present}
  \\begin{resume_list}
    \\item Maintained packages in Debian repositories
    \\item Reviewed and sponsored packages on behalf of prospective Developers
    \\item Resolved bugs reported in bug tracking system
  \\end{resume_list}

\\end{document}`
  },
  {
    id: 7,
    name: "Academic Research",
    description: "Perfect for researchers and academics with publications focus",
    code: `\\documentclass{cernatsnote}
\\usepackage[colorinlistoftodos]{todonotes}
\\usepackage{placeins}

\\title{CERN ATS Note title}
\\author{
	Author Name \\; \\\\		
	CERN, CH-1211 Geneva, Switzerland
}
\\email{author.email@cern.ch}
\\date{\\today}

\\begin{document}
\\maketitle

\\begin{abstract}
This document shows how to calculate the path-length of rectangular bending magnets in a beam line. The path-length depends on the pole-face angles, i.e. how the magnet is positioned in the line. The majority of bending magnets are installed with identical pole-face angles at the start and the end, but in certain cases the pole-face angles are different e.g. in the CERN PS BOOSTER BTP and BTY extraction lines, the BHZ10 magnet have a special positioning in order not to perturb the optics of any of the lines unfavorably.
 The path-length correspond to the s-parameter in MADX, and must be calculated precisely, in order to get a correct survey, which need to be correct to the 10 micron level.
\\end{abstract}
\\\\ \\\\ \\\\ 

\\begingroup
\\color{black}
\\tableofcontents
\\endgroup

\\pagebreak

\\section{Introduction}
This note will describe how to calculate the path length of a bending magnet. Throughout this note the bending magnet is defined according to the MADX sector magnet definition SBEND (See ref. \\cite{MADX}). The reason is that a sector magnet definition can also model a rectangular magnet, so it is easier just to use the sector bending magnet definition. The sector magnet definition is characterized by it's arc length "$L$", it's bending angle "$\\phi$" and it's pole-face angles "$e1$ and $e2$", (see Figure \\ref{fig:StandardMagnetLayout}). \\\\
\\begin{figure}[ht]
\\centering
\\includegraphics[width=0.8\\textwidth]{images/StandardMagnetLayout.png}
\\caption{\\label{fig:StandardMagnetLayout} Standard magnet layout for a sector bending magnet}
\\end{figure}

Looking at the definition of a sector magnet in MADX:
\\begin{align*} 
label: &SBEND, L=real, ANGLE=real, TILT=real, \\\\
&K0=real, K1=real, K2=real, K1S=real, \\\\
&E1=real, E2=real,\\\\
&FINT=real, FINTX=real, HGAP=real, H1=real, H2=real, THICK=logical;
\\end{align*}

In the above formula "L" is the arc length, "ANGLE" is the bending angle "$\\phi$" and "E1" \\& "E2" are the pole face angles.

\\pagebreak

\\noindent
\\textit{NB! Please note that for Fig.\\ref{fig:StandardMagnetLayout}, the definition of a positive bending angle as well as the pole face angles depends on the charge of the particle that moves through the bending magnet. If a positively charged particle is bent to the right, then the bending angle is positive. If a negatively charged particle is bent to the right, then the bending is negative.} \\\\ \\\\

The arc length $L$ is extremely important for survey calculations and is equal to the increase in the s variable from the entry to the exit of the magnet. The entry and exit points of the magnet is called ENTRE and SORTIE, which are the names defined in the survey database (See ref. \\cite{GEODE})

For survey calculations, we use four different types of magnet length. These four different magnet lengths are used by other groups (see Figure \\ref{fig:3Length}):

\\begin{figure}[ht]
\\centering
\\includegraphics[width=0.9\\textwidth]{images/3Length.png}
\\caption{\\label{fig:3Length} Definition of three different length for a bending magnet. \\color{blue}The rectangular blue box is the bending magnet itself  \\color{red}The Red circular line from point E to point S is the arc length. \\color{brown} The straight brown line from point E to point S is the magnetic length. arc length. \\color{green} The two angled green straight lines from point E to point S is the length via the deflection point.}
\\end{figure}

\\begin{enumerate}
\\item \\textbf{The physical length}. This is length given in layout drawings. It is only used for survey calculations but never for optics calculations. But, as the survey group also accepts the magnetic length as a basis for survey calculations, then in the magnetic length is always used for all types of calculation and the physical length is basically never used.
\\item \\textbf{The magnetic length}. This is used by the MADX program for optics calculations, but can also be accepted as a basis for survey calculations. The magnetic length, as a concept, is equivalent to the physical length. The magnetic length is calculated from magnet measurements, and the formula for the magnetic length is: $L_{Mag}=\\frac {\\int_{ }^{ } B dl}{B_{Max}}$, where $B_{Max}$ is the maximum B field in the center of the magnet.
\\item \\textbf{The arc length}. This is used by the MADX program. It is the length of the beam trajectory and is the length given in the SBEND command. It is also called the path length.
\\item \\textbf{The straight line length between the ENTRY and SORTIE points}. This was in the past used by the GEODE survey program. However, recently GEODE has converted to use the arc length, but there are still instances where the ENTRY/SORTIE length is still used. The survey program could in certain instances base this length on either the physical length or the magnetic length.
\\end{enumerate}

\\noindent \\textit{NB! Please be very careful to check whether a physical length or a magnetic length is used. Check e.g. with the NORMA magnet database. See ref.\\cite{NORMA} } 

\\section{How to position a straight vacuum chamber to maximize aperture for the beam}
Looking at Figure \\ref{fig:3Length}, we see a beam going from point E to point S, following the red circular line, and we imagine that it passes inside a straight vacuum pipe (this could be represented by the blue square rectangle). In order to maximize the aperture, then the middle of the vacuum chamber should be exactly between the maximum extended circular arc and the ES line. Seen from the center of circle with $ \\rho$ as the bending radius, the middle of the vacuum chamber should then be the average between $ \\rho $ and the ES line (= $ \\rho *Cos(\\frac {\\alpha}{2} )$ ), i.e. equal to:
$ \\frac{\\rho}{2} * (1 - Cos[\\frac{\\alpha}{2}])$ above the E-S line. \\\\

This formula is independent of the how the layout of bending magnet is done (see the next section with the three layouts of a rectangular magnet). 

\\pagebreak

\\section{Three layouts for a rectangular magnet}

\\subsection{The standard magnet layout}

\\begin{figure}[ht]
\\centering
\\includegraphics[width=0.9\\textwidth]{images/StandarMagnet_DeflectionPoint.png}
\\caption{\\label{fig:StandarMagnet_DeflectionPoint} 
         Calculation of path length for standard magnet layout.}
\\end{figure}

\\FloatBarrier

\\begin{align*} 
\\begin{split}
 L_{arc} & =\\rho \\cdot \\phi \\\\
 L_{Dfl} & =\\frac{L}{Cos(\\frac{\\phi}{2})} = 2\\cdot \\rho \\cdot Tan(\\frac{\\phi}{2}) = 2 \\cdot L_{arc} \\cdot \\cfrac{Tan(\\frac{\\phi}{2})}{\\phi} \\\\
  L_{ES} & =L = \\rho \\cdot 2 \\cdot Sin(\\frac{\\phi}{2})  \\\\ \\\\
 where \\\\
 L_{arc} & = path\\ length\\ i.e\\ the\\ length\\ of \\ the \\ beam\\ trajectory \\\\
 L_{Dfl} & = Length\\ via\\ deflection\\ point\\ \\\\
 \\rho & = \\frac{L}{2\\cdot Sin(\\frac{\\phi}{2})} \\\\
  & = bending\\ radius\\ of\\ the\\ rectangular\\ bending\\ magnet \\\\
  \\phi & = bending\\ angle\\ of\\ the\\ rectangular\\ bending\\ magnet \\\\
 L & = magnetic\\  length\\ of\\ the\\ rectangular\\ bending\\ magnet \\\\
\\end{split}
\\end{align*}

\\pagebreak

\\subsection{Rectangular bending magnet with zero pole phase angle at ENTRE}

\\begin{figure}[ht]
\\centering
\\includegraphics[width=0.7\\textwidth]{images/BendingMagnet_Aligned_Entre.png}
\\caption{\\label{fig:BendingMagnet_Aligned_Entre} 
         Calculation of path length for magnet aligned with ENTRE.}
\\end{figure}
\\FloatBarrier

\\begin{align*} 
\\begin{split}
 L_{arc} & =\\rho \\cdot \\phi \\\\
 L_{Dfl} & = 2\\cdot \\rho \\cdot Tan(\\frac{\\phi}{2}) = \\frac{L}{\\ {Cos(\\frac{\\phi}{2})}^2}  \\\\
  L_{ES} & = \\rho \\cdot 2 \\cdot Sin(\\frac{\\phi}{2})  \\\\ \\\\
 where \\\\
 L_{arc} & = path\\ length\\ i.e\\ the\\ length\\ of \\ the \\ beam\\ trajectory \\\\
 L_{Dfl} & = Length\\ via\\ deflection\\ point\\ \\\\
 \\rho & = \\frac{L}{Sin(\\phi)} \\\\
  & = bending\\ radius\\ of\\ the\\ rectangular\\ bending\\ magnet \\\\
  \\phi & = bending\\ angle\\ of\\ the\\ rectangular\\ bending\\ magnet \\\\
 L & = magnetic\\  length\\ of\\ the\\ rectangular\\ bending\\ magnet \\\\
\\end{split}
\\end{align*}

\\pagebreak

\\subsection{Rectangular bending magnet arbitrary pole phase angles}

\\begin{figure}[ht]
\\centering
\\includegraphics[width=0.7\\textwidth]{images/BendingMagnet_Arbitrary_Angles.png}
\\caption{\\label{fig:BendingMagnet_Arbitrary_Angles} 
Calculation of path length for magnet with arbitrary polephase angles. In the above Figure \\ref{fig:BendingMagnet_Arbitrary_Angles} the poleface angle at the ENTRY equal -$\\phi1$ ($E1=-\\phi1$), while the poleface angle at SORTIE equals $\\phi2$ ($E2=\\phi2$). From geometric considerations it can be seen that the sum of the poleface angles $E1+E2=\\phi$  }
\\end{figure}
\\FloatBarrier

\\begin{align*} 
\\begin{split}
 L_{arc} & =\\rho \\cdot \\phi \\\\
 L_{Dfl} & = 2\\cdot \\rho \\cdot Tan(\\frac{\\phi}{2})   \\\\
  L_{ES} & = \\rho \\cdot 2 \\cdot Sin(\\frac{\\phi}{2})  \\\\ \\\\
 where \\\\
 L_{arc} & = path\\ length\\ i.e\\ the\\ length\\ of \\ the \\ beam\\ trajectory \\\\
 L_{Dfl} & = Length\\ via\\ deflection\\ point\\ \\\\
 \\rho & = \\frac{L}{Sin(E1)+Sin(E2)} \\\\
  & = bending\\ radius\\ of\\ the\\ rectangular\\ bending\\ magnet \\\\
  \\phi & = bending\\ angle\\ of\\ the\\ rectangular\\ bending\\ magnet \\\\
 L & = magnetic\\  length\\ of\\ the\\ rectangular\\ bending\\ magnet \\\\
\\end{split}
\\end{align*}

\\subsection{Some concluding comments about survey}
Because it is very costly to do drawings, it has been decided to base all surveys on drawings. However, since the drawings calculate the length of a bending magnet as the length of the deflection point, while MADX calculates the length via the arc length, one will have to modify all positions of the elements downstream a bending magnet - basically subtracting the difference between the length via the deflection point and the arc length from all these elements. One will therefore not find identical values of the positions in the drawings and the MADX file, even though the the two sources describe the exact same information.

\\bibliography{references}
\\bibliographystyle{plain}

\\end{document}`
  },
  {
    id: 8,
    name: "Corporate Business",
    description: "Professional template for business roles and corporate positions",
    code: `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% ------------------------------- DOCSTRING ---------------------------------------
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Author(s): Patrick Krkotic and Martin Bammer, CERN

% Description: LaTex Version of ATS EDMS Word Template
% Version 1.0
% Date: 22/10/2023

% Version 2.0
% Date: 25/07/2024

% Permission is hereby granted, free of charge, to any person obtaining a copy
% of this template and associated documentation files, to deal
% without restriction, including without limitation the rights
% to use, copy, modify, merge, publish and distribute
% copies of the template, and to permit persons to whom the template is
% furnished to do so.
% The above copyright notice and this permission notice shall be included in all
% copies or substantial portions of the template.


% How to use this Template:
% ---------------------------------------------------------------------------------
%Here in the main.tex file are no inputs to be done by the user.
%The main file has to stay on the top level of the document-tree to ensure that all inputs and packages are processed in correct order 

% The files to be modified by the user are:
% - glossary.tex
% - abstract.tex
% - input.tex
% - textbody.tex
% - appendix.tex
% - bilio.bib

% Predefined Project Logos are: "LHC", "HL-LHC" and "FCC"
% Should you want to add a project logo of your own to this file: the code to modify can be found in the "logo_logic.tex" file (You can add your projet logo by uploading it to the template_style folder and by expanding the if-clause in the "logo_logic.tex" file accordingly. You will also have to define the project name as "keyword" in this file)


% The authors of the file did their best to comment each piece of code in a concise and compact manner, as long as the original authors are at CERN, please feel free to write an email in case you have questions.


% ---------------------------- END OF DOCSTRING -----------------------------------



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% ------------------------------- PREAMBLE ----------------------------------------
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\\documentclass[10pt]{article} %Define the class of document and default font size



\\input{Template/style} % This file contains all the setup code for the document and all the package imports are in here as well, this file contains nothing to modify by the user
%----------------------------------------------------------------------------------




\\input{input} % This file contains all the inputs for the titlepage and the page-headers of the document

%if your project-logo is not already in this template you can add it to the logic for your project here: 
\\input{Template/logo_logic}
% (you also have to upload the images you want in the template style logos folder)



% ----------------------------- END OF PREAMBLE ------------------------------------



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% -------------------------------- DOCUMENT ----------------------------------------
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%this line begins the document
\\begin{document} %
%-----------------------------------------------------------------------------------

%this is the link to the file "glossary.tex" of terms
\\input{glossary} %If this file is not needed, feel free to comment this line out
%-----------------------------------------------------------------------------------

%this is the link to the front matter of the document ("front_matter.tex")
%In the front matter you can find the titlepage, the table of contents, the list of figures & tables (the link for the glossary is also in front_matter.tex)
%No inputs have to be made in the front_matter.txt
\\input{Template/front_matter} %
%-----------------------------------------------------------------------------------

%This is the abstract for the EDMS Document. The abstract will be displayed on the titlepage
%The text in the EDMSabstract environment can be changed and formatted as the user wishes
\\begin{EDMSabstract}
\\input{abstract} % Place the text for the absract in this file
\\end{EDMSabstract}


%this is the link to the textbody of the document.
%all text (chapters, sections, paragraphs) should be located solely in the
%"textbody.tex" file, as it is good LaTeX-coding-practice to keep the main and setup files clean and functional
\\input{textbody} %
%-----------------------------------------------------------------------------------


%bibliography
\\printbibliography %this piece of code inserts the bibliography at this place of the document
%-----------------------------------------------------------------------------------

%appendix
\\appendix %this line marks the beginning of the appendix of the document

% this is the link to the appendix-textbody of the document
\\input{appendix.tex} % place the text, tables, images, etc. in "appendix.tex" only
%-----------------------------------------------------------------------------------



\\end{document} % This line is the end of the document no further code should be beyont this command`
  }
];