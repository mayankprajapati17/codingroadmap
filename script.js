const roadmaps = {
    "C": "Use: System software, OS (Unix), embedded systems.<br>Roadmap: Learn basic syntax, memory management (pointers, structs), and system-level programming.",
    "Pascal": "Use: Teaching programming, early software development.<br>Roadmap: Learn structured programming, data types, and algorithms.",
    "BASIC": "Use: Personal computers, early programming education.<br>Roadmap: Learn simple syntax and control structures, then move to more advanced versions (Visual Basic).",
    "Fortran": "Use: Scientific computing, simulations, engineering.<br>Roadmap: Learn numerical methods, arrays, and functions for math-heavy applications.",
    "COBOL": "Use: Business applications, banking, finance.<br>Roadmap: Focus on file handling, report generation, and business logic.",
    "Lisp": "Use: AI, advanced computing.<br>Roadmap: Learn recursive functions, symbolic processing, and data manipulation.",
    "C++": "Use: Software development, games, GUIs.<br>Roadmap: Master object-oriented programming (OOP), memory management, and data structures.",
    "Java": "Use: Web apps, enterprise systems.<br>Roadmap: Learn OOP principles, Java libraries, and the basics of multithreading and databases.",
    "Python": "Use: Scripting, web development, automation.<br>Roadmap: Start with syntax, then explore libraries for web, data analysis, and automation."
};

function loadRoadmap(language) {
    const contentDiv = document.getElementById("roadmap-content");
    contentDiv.innerHTML = `<h2>${language} Roadmap</h2><p>${roadmaps[language]}</p>`;
}
