export default function handler(req, res) {
  const errorMessages = [
    "The requested API has been removed. Please migrate to the /rest/api/3/search/jql API. A full migration guideline is available at https://developer.atlassian.com/changelog/#CHANGE-2046"
  ];
 const errors = {

  };
  res.status(200).json({ errorMessages,errors });
}




