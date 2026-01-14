export default function handler(req, res) {
  const issues = {
  "expand": "names,schema",
  "startAt": 0,
  "maxResults": 20,
  "total": 2,
  "issues": [
    {
      "expand": "",
      "id": "10001",
      "self": "https://your-server.com/rest/api/2/issue/10001",
      "key": "ACP-1",
      "fields": {
        "assignee": {
          "name": "user1",
          "displayName": "User One"
        },
        "created": "2026-01-14T10:00:00.000+0000",
        "creator": {
          "name": "admin",
          "displayName": "Admin User"
        },
        "issuetype": {
          "name": "Bug",
          "description": "A problem which impairs or prevents the functions of the product."
        },
        "labels": ["frontend", "urgent"],
        "priority": {
          "name": "High"
        },
        "project": {
          "id": "20001",
          "key": "ACP",
          "name": "ACP Project"
        },
        "reporter": {
          "name": "qa_team",
          "displayName": "QA Team"
        },
        "resolutiondate": null,
        "status": {
          "name": "Open",
          "description": "Issue is open and ready for work"
        },
        "statuscategorychangeddate": "2026-01-14T11:00:00.000+0000",
        "summary": "Login page error",
        "updated": "2026-01-14T11:30:00.000+0000",
        "description": "Users cannot log in due to 500 error."
      }
    },
    {
      "expand": "",
      "id": "10002",
      "self": "https://your-server.com/rest/api/2/issue/10002",
      "key": "ACP-2",
      "fields": {
        "assignee": {
          "name": "user2",
          "displayName": "User Two"
        },
        "created": "2026-01-13T09:00:00.000+0000",
        "creator": {
          "name": "dev_team",
          "displayName": "Dev Team"
        },
        "issuetype": {
          "name": "Task",
          "description": "A task that needs to be done."
        },
        "labels": ["backend"],
        "priority": {
          "name": "Medium"
        },
        "project": {
          "id": "20001",
          "key": "ACP",
          "name": "ACP Project"
        },
        "reporter": {
          "name": "manager",
          "displayName": "Project Manager"
        },
        "resolutiondate": "2026-01-14T12:00:00.000+0000",
        "status": {
          "name": "Resolved",
          "description": "Issue has been resolved"
        },
        "statuscategorychangeddate": "2026-01-14T12:00:00.000+0000",
        "summary": "Database migration",
        "updated": "2026-01-14T12:15:00.000+0000",
        "description": "Migrate DB schema to v2."
      }
    }
  ]
};

  res.status(200).json({
    expand: "names,schema",
    startAt: 0,
    maxResults: issues.length,
    total: issues.length,
    issues
  });
}
