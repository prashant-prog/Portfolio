import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Prashant Sharma',
    title: 'Backend Software Engineer',
    tagline:
      'Backend Software Engineer passionate about building scalable APIs, backend systems, and solving engineering problems.',
    bioSummary:
      'I am a backend developer who enjoys designing clean APIs, building scalable backend applications, and turning ideas into reliable software. I primarily work with Python, FastAPI, SQL, and MongoDB, and I continuously strengthen my understanding of Data Structures & Algorithms, System Design, Linux, DBMS, Operating Systems, and Computer Networks to become a better software engineer.',
    location: 'Jaipur, India',
    email: 'pstxshh@gmail.com',
    phone: '+91 9828523301',
    github: 'https://github.com/prashant-prog',
    linkedin: 'https://linkedin.com/in/pstxsh',
    resumeUrl: '/resume.pdf',
    availability: 'Open to Backend Engineering roles & internships',
  },

  skills: [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'SQL'],
    },
    {
      title: 'Backend',
      skills: [
        'FastAPI',
        'Django (Basic)',
        'REST APIs',
        'JWT Authentication',
        'CRUD Operations',
        'API Design',
      ],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'Operating Systems',
      skills: ['Fedora Linux', 'Arch Linux', 'Bash', 'Shell Scripting'],
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code'],
    },
    {
      title: 'Core CS',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
        'System Design Fundamentals',
      ],
    },
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Full Stack Engineer Intern',
      company: 'Jaipur Engineers',
      period: 'Apr 2026 – Jul 2026',
      points: [
        'Developed backend functionality and REST APIs using Python and FastAPI for core web services.',
        'Implemented robust CRUD operations and integrated MongoDB and SQL relational databases.',
        'Enforced strict input validation using Pydantic schemas and comprehensive error handling pipelines.',
        'Structured automated Git workflow, code reviews, and performance debugging for endpoint optimizations.',
      ],
      skillsUsed: ['FastAPI', 'Python', 'MongoDB', 'SQL', 'Git', 'REST APIs'],
    },
    {
      id: 'exp-2',
      role: 'Full Stack Web Development Intern',
      company: 'Future Interns',
      period: 'Jun 2025 – Jul 2025',
      points: [
        'Completed project-based internship focused on end-to-end web application development.',
        'Designed HTML, CSS, and JavaScript frontends connected with custom RESTful backend endpoints.',
        'Executed database integration, backend error handling, debugging, and production workflow deployment.',
      ],
      skillsUsed: ['JavaScript', 'HTML/CSS', 'REST APIs', 'Backend Integration', 'Debugging'],
    },
  ],

  projects: [
    {
      slug: 'fastapi-backend-api',
      title: 'FastAPI Backend API',
      subtitle: 'High-performance, modular RESTful backend system built with Python, FastAPI & MongoDB.',
      tagline: 'Asynchronous RESTful API framework with JWT Auth, Pydantic validation & OpenAPI specifications.',
      techStack: ['Python', 'FastAPI', 'MongoDB', 'Pydantic', 'Uvicorn', 'JWT', 'Docker'],
      features: [
        'REST APIs with comprehensive CRUD routing',
        'Pydantic Validation for type-safe payload parsing',
        'Modular Clean Architecture with service and repository abstraction layer',
        'Structured JSON Responses & Global Exception Handling',
        'JWT Authentication & Role-based endpoint authorization',
        'Interactive Swagger / OpenAPI live documentation auto-generation',
      ],
      githubUrl: '#',
      liveDemoUrl: '#',
      overview:
        'A production-ready asynchronous backend web service engineered with Python and FastAPI. Designed following clean architecture principles, featuring strict request validation via Pydantic, database abstraction over MongoDB, JWT-based security layers, and automated endpoint documentation.',
      challenges: [
        'Designing a non-blocking asynchronous database abstraction layer for MongoDB using Motor drivers.',
        'Handling centralized exception handlers to standardize error responses across all API endpoints with consistent JSON payloads.',
        'Optimizing connection pool management and query performance under simulated high concurrent loads.',
      ],
      learnings: [
        'Deep understanding of Python async/await paradigms and ASGI event loop mechanics.',
        'Best practices in designing RESTful URL schemas, payload validation contracts, and status code discipline.',
        'Containerizing Python FastAPI applications with Docker for portable cloud deployments.',
      ],
      architectureNodes: [
        { title: 'Client / HTTP Consumer', role: 'Frontend App / cURL / Postman', tech: 'HTTPS' },
        { title: 'API Gateway / Uvicorn', role: 'ASGI Server & Router', tech: 'FastAPI Router' },
        { title: 'Middleware Layer', role: 'JWT Auth & Pydantic Validator', tech: 'PyJWT & Pydantic' },
        { title: 'Service & Controller Layer', role: 'Business Logic Execution', tech: 'Python 3.11' },
        { title: 'Database Layer', role: 'Document Storage & Caching', tech: 'MongoDB & Motor Async' },
      ],
      architectureDataFlow: [
        '1. Client sends HTTP request with JSON payload and Authorization Bearer header.',
        '2. ASGI Uvicorn server routes request to dedicated FastAPI endpoint controller.',
        '3. JWT Middleware validates token claims and injects authenticated user state into context.',
        '4. Pydantic Model validates payload fields against schema strict definitions.',
        '5. Service layer executes business logic and performs async non-blocking MongoDB queries via Motor driver.',
        '6. Structured JSON response is returned with uniform HTTP metadata.',
      ],
      apiEndpoints: [
        {
          method: 'POST',
          path: '/api/v1/auth/login',
          description: 'Authenticate user credentials and return JWT bearer access token.',
          requestCurl: `curl -X POST "https://api.example.com/api/v1/auth/login" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "securepassword123"}'`,
          responseJson: `{
  "status": "success",
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "token_type": "bearer",
    "expires_in": 3600
  }
}`,
        },
        {
          method: 'GET',
          path: '/api/v1/resources',
          description: 'Retrieve paginated list of items with optional search & filter query params.',
          requestCurl: `curl -X GET "https://api.example.com/api/v1/resources?page=1&limit=10&status=active" \\
  -H "Authorization: Bearer <TOKEN>"`,
          responseJson: `{
  "status": "success",
  "pagination": {
    "page": 1,
    "limit": 10,
    "total_count": 42
  },
  "items": [
    {
      "id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "name": "Backend Node Service",
      "status": "active",
      "created_at": "2026-07-24T12:00:00Z"
    }
  ]
}`,
        },
        {
          method: 'POST',
          path: '/api/v1/resources',
          description: 'Create a new resource record with schema validation.',
          requestCurl: `curl -X POST "https://api.example.com/api/v1/resources" \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "New Cluster Node", "status": "active"}'`,
          responseJson: `{
  "status": "created",
  "data": {
    "id": "64f1a2b3c4d5e6f7a8b9c0d2",
    "name": "New Cluster Node",
    "status": "active",
    "created_at": "2026-07-24T17:00:00Z"
  }
}`,
        },
      ],
      metrics: [
        { label: 'Avg Latency', value: '< 18ms' },
        { label: 'Test Coverage', value: '94%' },
        { label: 'API Endpoints', value: '14 Routes' },
      ],
    },
    {
      slug: 'full-stack-text-editor',
      title: 'Full Stack Text Editor',
      subtitle: 'Document management platform featuring RESTful microservices & real-time document persistence.',
      tagline: 'Node.js, Express.js, React, and MongoDB full-stack application for managing structured documents.',
      techStack: ['Node.js', 'Express.js', 'React', 'MongoDB', 'JavaScript', 'REST APIs'],
      features: [
        'REST APIs for seamless client-server data synchronization',
        'Full CRUD operations for multi-document creation, editing, and deletion',
        'Document Management with tag filtering and search indexes',
        'MongoDB Integration with Mongoose ODM schemas',
        'Strict Client & Server Validation for data sanity',
        'Responsive user interface built with React',
      ],
      githubUrl: '#',
      liveDemoUrl: '#',
      overview:
        'A full-stack text editor application allowing users to compose, manage, tag, and persist text documents in real-time. Built with a decoupled Node.js/Express REST backend server and a responsive React client.',
      challenges: [
        'Handling asynchronous auto-save debouncing from client React UI to prevent flooding the backend REST API.',
        'Structuring Mongoose indexes to ensure rapid text queries across large volumes of document content.',
        'Implementing clean CORS policy and environment-aware API baseline configuration.',
      ],
      learnings: [
        'Mastered building Express middleware pipelines for request logging, auth verification, and central error handling.',
        'Gained hands-on experience in Mongoose schema design, indexes, and aggregation pipelines.',
        'Understanding full-stack data contracts and state management synchronization.',
      ],
      architectureNodes: [
        { title: 'React Client UI', role: 'Document Editor Frontend', tech: 'React & Axios' },
        { title: 'Express REST Server', role: 'API Controller & Middleware', tech: 'Node.js & Express' },
        { title: 'Data Validator Layer', role: 'Input Sanitization', tech: 'Joi / Express Validator' },
        { title: 'Database ODM', role: 'Object Data Modeling', tech: 'Mongoose ODM' },
        { title: 'MongoDB Instance', role: 'Document Store Database', tech: 'MongoDB Atlas' },
      ],
      architectureDataFlow: [
        '1. User types in React text editor frontend with auto-save debounce timer.',
        '2. React client sends HTTP PUT payload to Express endpoint /api/documents/:id.',
        '3. Express validation middleware checks document format and character caps.',
        '4. Controller calls Mongoose model method findByIdAndUpdate with atomic operator.',
        '5. Updated document object is persisted in MongoDB and updated timestamp is returned to client.',
      ],
      apiEndpoints: [
        {
          method: 'GET',
          path: '/api/v1/documents',
          description: 'Fetch all user documents with metadata and tags.',
          requestCurl: `curl -X GET "https://api.example.com/api/v1/documents" \\
  -H "Accept: application/json"`,
          responseJson: `{
  "success": true,
  "count": 2,
  "documents": [
    {
      "_id": "60d5ec49f1b2c548b0a1d9e2",
      "title": "System Architecture Notes",
      "tags": ["backend", "fastapi"],
      "updatedAt": "2026-07-24T14:20:00Z"
    }
  ]
}`,
        },
        {
          method: 'POST',
          path: '/api/v1/documents',
          description: 'Create a new text document.',
          requestCurl: `curl -X POST "https://api.example.com/api/v1/documents" \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Draft Document", "content": "Initial text content...", "tags": ["draft"]}'`,
          responseJson: `{
  "success": true,
  "data": {
    "_id": "60d5ec49f1b2c548b0a1d9e3",
    "title": "Draft Document",
    "content": "Initial text content...",
    "tags": ["draft"],
    "createdAt": "2026-07-24T17:05:00Z"
  }
}`,
        },
      ],
      metrics: [
        { label: 'Auto-Save Sync', value: '< 100ms' },
        { label: 'Database', value: 'MongoDB Atlas' },
        { label: 'Architecture', value: 'Decoupled REST' },
      ],
    },
  ],

  education: {
    degree: 'Bachelor of Computer Applications',
    institution: 'Poornima University',
    status: 'Expected Graduation',
    expectedGraduation: '2027',
  },

  certifications: [
    {
      title: 'Python Complete Course and Flask Framework',
      issuer: 'Udemy',
    },
    {
      title: 'Networking Fundamentals on Google Cloud',
      issuer: 'Google Cloud Platform',
    },
    {
      title: 'Get Started with Cloud Storage',
      issuer: 'Google Cloud Platform',
    },
  ],

  achievement: {
    title: 'Digital Campus 2.0 Google Cloud HackSprint',
    organizer: 'Poornima Institute of Engineering & Technology in collaboration with Google Cloud',
    description:
      'Secured 4th Rank in Digital Campus 2.0 Google Cloud HackSprint for building scalable cloud-native backend services and real-time database architecture.',
    rank: '4th Rank',
    highlights: [
      'Engineered serverless backend API integrations on Google Cloud Platform',
      'Demonstrated high system reliability under competitive speed trials',
      'Recognized by Google Cloud mentors and senior engineering evaluators',
    ],
  },
};
