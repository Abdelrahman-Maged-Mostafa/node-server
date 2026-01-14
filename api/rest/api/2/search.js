export default function handler(req, res) {
  const issues = [
    {
      project_id: 74979114,
      title: "new one",
      title_html: "new one",
      created_at: "2026-01-12T12:49:17.618Z",
      updated_at: "2026-01-13T08:10:34.596Z",
      closed_at: null,
      status: "To Do",
      labels: [],
      author: {
        id: "712020:f0f33540-9622-40d9-a653-866ec4bbeea8",
        name: "<img class=lazy data-src=test src=x />",
        web_url: "https://podapodapoda.atlassian.net/people/712020:f0f33540-9622-40d9-a653-866ec4bbeea8",
        avatar_url: "https://secure.gravatar.com/avatar/a6b97d11efa0190a804a9f43eb54c562?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png"
      },
      assignees: [],
      web_url: "https://podapodapoda.atlassian.net/browse/CPG-15",
      gitlab_web_url: "/testwork11/poda_t2-group/pelo/-/integrations/jira/issues/CPG-15",
      references: { relative: "CPG-15" },
      external_tracker: "jira"
    },
    {
      project_id: 74979114,
      title: "(Sample) Implement Transaction History Feature",
      title_html: "(Sample) Implement Transaction History Feature",
      created_at: "2026-01-06T11:55:25.574Z",
      updated_at: "2026-01-06T11:55:26.934Z",
      closed_at: null,
      status: "To Do",
      labels: [],
      author: {
        id: "712020:f0f33540-9622-40d9-a653-866ec4bbeea8",
        name: "<img class=lazy data-src=test src=x />",
        web_url: "https://podapodapoda.atlassian.net/people/712020:f0f33540-9622-40d9-a653-866ec4bbeea8",
        avatar_url: "https://secure.gravatar.com/avatar/a6b97d11efa0190a804a9f43eb54c562?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png"
      },
      assignees: [],
      web_url: "https://podapodapoda.atlassian.net/browse/CPG-6",
      gitlab_web_url: "/testwork11/poda_t2-group/pelo/-/integrations/jira/issues/CPG-6",
      references: { relative: "CPG-6" },
      external_tracker: "jira"
    }
    // ... باقي الـ issues بنفس الشكل
  ];

  res.status(200).json(issues);
}
