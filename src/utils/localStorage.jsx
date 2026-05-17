export const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login UI",
        taskDesc: "Create responsive login page using React and Tailwind CSS.",
        taskDate: "2026-05-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDesc: "Resolve mobile navbar overlapping issue.",
        taskDate: "2026-05-10",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDesc: "Create dashboard wireframe and UI components.",
        taskDate: "2026-05-20",
        category: "Design"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDesc: "Connect frontend with authentication API.",
        taskDate: "2026-05-19",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Landing Page Design",
        taskDesc: "Create modern landing page design.",
        taskDate: "2026-05-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "SEO Optimization",
        taskDesc: "Improve website SEO score and metadata.",
        taskDate: "2026-05-08",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDesc: "Add unit tests for login functionality.",
        taskDate: "2026-05-21",
        category: "Testing"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Product Banner",
        taskDesc: "Design banner for new product launch.",
        taskDate: "2026-05-17",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDesc: "Configure MongoDB database schema.",
        taskDate: "2026-05-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Campaign",
        taskDesc: "Send promotional email campaign.",
        taskDate: "2026-05-09",
        category: "Marketing"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Performance Testing",
        taskDesc: "Check app performance under heavy load.",
        taskDate: "2026-05-23",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Profile Page UI",
        taskDesc: "Develop user profile page design.",
        taskDate: "2026-05-11",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bug Fixing",
        taskDesc: "Fix checkout process validation errors.",
        taskDate: "2026-05-14",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Ads",
        taskDesc: "Prepare ad content for Instagram campaign.",
        taskDate: "2026-05-24",
        category: "Marketing"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Admin Panel",
        taskDesc: "Build admin dashboard with analytics cards.",
        taskDate: "2026-05-25",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Design",
        taskDesc: "Design new logo concepts for branding.",
        taskDate: "2026-05-13",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDesc: "Write blog content for company website.",
        taskDate: "2026-05-18",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Form Validation",
        taskDesc: "Fix validation issue in signup form.",
        taskDate: "2026-05-07",
        category: "Testing"
      }
    ]
  }
]

export const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]

export const setLocalStorage =() =>{
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
    

}

export const getLocalStorage =() =>{
    const employees = localStorage.getItem("employees")
    const admin = localStorage.getItem("admin")

    return {
        employees: JSON.parse(employees),
        admin: JSON.parse(admin)
    }

}