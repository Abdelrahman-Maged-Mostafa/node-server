export default function handler(req, res) {
  const issues = [
    {
      assignee: "user1",
      created: "2026-01-14T10:00:00Z",
      creator: "admin",
      id: "ISSUE-001",
      issuetype: "Bug",
      key: "BUG-001",
      labels: ["frontend", "urgent"],
      priority: "High",
      project: "Project Alpha",
      reporter: "qa_team",
      resolutiondate: null,
      status: "Open",
      statuscategorychangeddate: "2026-01-14T11:00:00Z",
      summary: "Login page error",
      updated: "2026-01-14T11:30:00Z",
      description: "Users cannot log in due to 500 error.",
    },
    {
      assignee: "user2",
      created: "2026-01-13T09:00:00Z",
      creator: "dev_team",
      id: "ISSUE-002",
      issuetype: "Task",
      key: "TASK-002",
      labels: ["backend"],
      priority: "Medium",
      project: "Project Beta",
      reporter: "manager",
      resolutiondate: "2026-01-14T12:00:00Z",
      status: "Resolved",
      statuscategorychangeddate: "2026-01-14T12:00:00Z",
      summary: "Database migration",
      updated: "2026-01-14T12:15:00Z",
      description: "Migrate DB schema to v2.",
    },
  ];

  res.status(200).json(issues);
}
