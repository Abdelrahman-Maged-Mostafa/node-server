export default function handler(req, res) {
  const issues = [
    {
      expand: "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
      id: "10113",
      self: "https://node-server-rose.vercel.app/api/rest/api/3/issue/10113",
      key: "CPG-15",
      fields: {
        summary: "new one",
        created: "2026-01-12T14:49:17.618+0200",
        project: {
          self: "https://node-server-rose.vercel.app/api/rest/api/3/project/10000",
          id: "10000",
          key: "CPG",
          name: "Cryptocurrency Payment Gateway",
          projectTypeKey: "software",
          simplified: true,
          avatarUrls: {
            "48x48": "https://node-server-rose.vercel.app/api/rest/api/3/universal_avatar/view/type/project/avatar/10411",
            "24x24": "https://node-server-rose.vercel.app/api/rest/api/3/universal_avatar/view/type/project/avatar/10411?size=small",
            "16x16": "https://node-server-rose.vercel.app/api/rest/api/3/universal_avatar/view/type/project/avatar/10411?size=xsmall",
            "32x32": "https://node-server-rose.vercel.app/api/rest/api/3/universal_avatar/view/type/project/avatar/10411?size=medium"
          }
        },
        reporter: {
          self: "https://node-server-rose.vercel.app/api/rest/api/3/user?accountId=712020%3Af0f33540-9622-40d9-a653-866ec4bbeea8",
          accountId: "712020:f0f33540-9622-40d9-a653-866ec4bbeea8",
          emailAddress: "podapoda_poda@yahoo.com",
          avatarUrls: {
            "48x48": "https://secure.gravatar.com/avatar/a6b97d11efa0190a804a9f43eb54c562?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png",
            "24x24": "https://secure.gravatar.com/avatar/a6b97d11efa0190a804a9f43eb54c562?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png",
            "16x16": "https://secure.gravatar.com/avatar/a6b97d11efa0190a804a9f43eb54c562?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png",
            "32x32": "https://secure.gravatar.com/avatar/a6b97d11efa0190a804a9f43eb54c562?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png"
          },
          displayName: "<img class=lazy data-src=test src=x />",
          active: true,
          timeZone: "Africa/Cairo",
          accountType: "atlassian"
        },
        assignee: null,
        priority: {
          self: "https://node-server-rose.vercel.app/api/rest/api/3/priority/3",
          iconUrl: "https://node-server-rose.vercel.app/api/images/icons/priorities/medium_new.svg",
          name: "Medium",
          id: "3"
        },
        updated: "2026-01-13T10:10:34.596+0200",
        status: {
          self: "https://node-server-rose.vercel.app/api/rest/api/3/status/10000",
          description: "",
          iconUrl: "https://node-server-rose.vercel.app/api/images/icons/statuses/generic.png",
          name: "To Do",
          id: "10000",
          statusCategory: {
            self: "https://node-server-rose.vercel.app/api/rest/api/3/statuscategory/2",
            id: 2,
            key: "new",
            colorName: "blue-gray",
            name: "To Do"
          }
        },
        labels: []
      }
    }
    // ممكن تزود باقي الـ issues بنفس الشكل
  ];

  res.status(200).json({ issues,isLast: true });
}


