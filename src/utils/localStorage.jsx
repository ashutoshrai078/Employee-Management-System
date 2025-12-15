const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Compile and analyze sales data for the monthly performance report.",
        date: "2025-01-05",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update client database",
        description: "Clean up outdated records and update client contact information.",
        date: "2024-12-20",
        category: "Data Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team meeting preparation",
        description: "Prepare slides and agenda for the weekly team meeting.",
        date: "2024-12-18",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve authentication issue reported by multiple users.",
        date: "2025-01-03",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull requests and provide feedback to team members.",
        date: "2025-01-02",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Add unit tests for the authentication module.",
        date: "2024-12-22",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy to staging",
        description: "Deploy latest build to staging environment.",
        date: "2024-12-21",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design landing page",
        description: "Create a responsive landing page design for the new product.",
        date: "2025-01-04",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Create wireframes",
        description: "Build wireframes for the onboarding flow.",
        date: "2024-12-23",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update design system",
        description: "Add new components and update existing styles.",
        date: "2024-12-30",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client feedback review",
        description: "Analyze feedback received from the client and propose improvements.",
        date: "2024-12-19",
        category: "Client Relations",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Export assets",
        description: "Export optimized design assets for development team.",
        date: "2024-12-24",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Server maintenance",
        description: "Perform routine server maintenance and updates.",
        date: "2025-01-01",
        category: "IT Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Backup database",
        description: "Run full database backup and verify data integrity.",
        date: "2024-12-28",
        category: "IT Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Monitor performance",
        description: "Monitor server load and application performance metrics.",
        date: "2025-01-02",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer support tickets",
        description: "Respond to open customer support tickets.",
        date: "2025-01-04",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Resolve refund requests",
        description: "Process and resolve pending refund requests.",
        date: "2024-12-26",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update FAQ",
        description: "Update FAQ section based on recent customer queries.",
        date: "2024-12-22",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Weekly summary email",
        description: "Send weekly performance summary to management.",
        date: "2024-12-27",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () =>{
  localStorage.setItem('employees', JSON.stringify(employees)) 
  localStorage.setItem('admin', JSON.stringify(admin)) 
};

export const getLocalStorage = () =>{
  const employeeData = JSON.parse(localStorage.getItem('employees'));
  const adminData = JSON.parse(localStorage.getItem('admin'));
  console.log(employeeData,adminData);
  
  return (employeeData,adminData)
  
};