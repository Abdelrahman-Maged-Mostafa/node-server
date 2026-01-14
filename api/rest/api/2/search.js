export default function handler(req, res) {
  const issues = [
    {
      id: "ISSUE-001",
      key: "BUG-001",
      fields: {
        assignee: { name: "user1" },
        created: "2026-01-14T10:00:00Z",
        creator: { name: "admin" },
        issuetype: { name: "Bug" },
        labels: ["frontend", "urgent"],
        priority: { name: "High" },
        project: { key: "PROJ-ALPHA", name: "Project Alpha" },
        reporter: { name: "qa_team" },
        resolutiondate: null,
        status: { name: "Open" },
        statuscategorychangeddate: "2026-01-14T11:00:00Z",
        summary: "Login page error",
        updated: "2026-01-14T11:30:00Z",
        description: "Users cannot log in due to 500 error."
      }
    },
    {
      id: "ISSUE-002",
      key: "TASK-002",
      fields: {
        assignee: { name: "user2" },
        created: "2026-01-13T09:00:00Z",
        creator: { name: "dev_team" },
        issuetype: { name: "Task" },
        labels: ["backend"],
        priority: { name: "Medium" },
        project: { key: "PROJ-BETA", name: "Project Beta" },
        reporter: { name: "manager" },
        resolutiondate: "2026-01-14T12:00:00Z",
        status: { name: "Resolved" },
        statuscategorychangeddate: "2026-01-14T12:00:00Z",
        summary: "Database migration",
        updated: "2026-01-14T12:15:00Z",
        description: "Migrate DB schema to v2."
      }
    }
  ];

  res.status(200).json({
    expand: "names,schema",
    startAt: 0,
    maxResults: issues.length,
    total: issues.length,
    issues
  });
}
