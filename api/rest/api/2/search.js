export default function handler(req, res) {
  const issuesArray = [
    {
      id: "10001",
      key: "ACP-1",
      fields: {
        summary: "Login page error",
        description: "Users cannot log in due to 500 error.",
        status: { name: "Open" },
        assignee: { name: "user1" },
        reporter: { name: "qa_team" },
        priority: { name: "High" },
        project: { key: "ACP", name: "ACP Project" },
        created: "2026-01-14T10:00:00.000+0000",
        updated: "2026-01-14T11:30:00.000+0000"
      }
    },
    {
      id: "10002",
      key: "ACP-2",
      fields: {
        summary: "Database migration",
        description: "Migrate DB schema to v2.",
        status: { name: "Resolved" },
        assignee: { name: "user2" },
        reporter: { name: "manager" },
        priority: { name: "Medium" },
        project: { key: "ACP", name: "ACP Project" },
        created: "2026-01-13T09:00:00.000+0000",
        updated: "2026-01-14T12:15:00.000+0000"
      }
    }
  ];

  res.status(200).json({
    expand: "names,schema",
    startAt: 0,
    maxResults: 20,
    total: issuesArray.length,
    issues: {
      expand: "names,schema",
      startAt: 0,
      maxResults: 20,
      total: issuesArray.length,
      issues: issuesArray   // هنا خليت الـ array تحت المفتاح issues جوه object
    }
  });
}
