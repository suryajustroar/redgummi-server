module.exports = {
  emptyRequestBody: {code: '400', reason: 'request body or request headers are empty.'},
  emptyUserName: {code: '400', reason: 'UserName cannot be empty.'},
  emptyPhoneNumber: {code: '400', reason: 'PhoneNumber cannot be empty.'},
  emptyRole: {code: '400', reason: 'Role cannot be empty.'},
  emptyStatus: {code: '400', reason: 'Status cannot be empty.'},
  emptySearchCriteria: {code: '400', reason: 'Search Criteria cannot be empty.'},
  emptyTitle: {code: '400', reason: 'Title cannot be empty.'},
  emptyDescription: {code: '400', reason: 'Description cannot be empty.'},
  emptyText: {code: '400', reason: 'Text cannot be empty.'},
  emptyName: {code: '400', reason: 'Name cannot be empty.'},
  emptyNumber: {code: '400', reason: 'Number cannot be empty.'},
  emptySubject: {code: '400', reason: 'Subject cannot be empty.'},
  emptyEmail: {code: '400', reason: 'Email cannot be empty.'},
  resumeUrlCannotBeEmpty: {code: '400', reason: 'resume URL cannot be empty.'},
  userProfileCouldNotBeFound: {code: '400', reason: 'user profile could not be found for given credentials.'},
  userVideosCouldNotBeFound: {code: '400', reason: 'user videos could not be found for given credentials.'},
  userCouldNotBeFound: {code: '400', reason: 'user could not be found for given credentials.'},
  invalidRoleUuid: {code: '400', reason: 'invalid role uuid was provided.'},
  invalidProfileUuid: {code: '400', reason: 'invalid profile uuid was provided.'},
  noResumeFileSentForUpload: {code: '400', reason: 'A resume file was not provided for upload.'},
  noJDFileSentForUpload: {code: '400', reason: 'A JD file was not provided for upload.'},
  noJDFileTypeProvidedInBody: {code: '400', reason: 'File type (\"text\"/\"binary\") of the JD file was not provided.'},
  coverLetterNotPresent: {code: '400', reason: 'A cover letter was not provided in the request body.'},
  duplicateUser: {code: '400', reason: 'Duplicate user: User with given username already exists. Try a different username (email)'},
  jobNotFound: {code: '400', reason: 'job with given uuid was not found'},
  incorrectJobStatus: {code: '400', reason: 'incorrect job status was provided. It can be ["active"|"inactive"|"hold"|"closed"]'},
  orgNotFound: {code: '400', reason: 'organization with given uuid was not found'},
  resumeNotFound: {code: '400', reason: 'resume with given uuid was not found'},
  emptyRequestParams: {code: '400', reason: 'request params were not sent.'},
  emptyRequestQuery: {code: '400', reason: 'request query parameters were not sent.'},
  organizationCouldNotBeFound: {code: '400', reason: 'Organization could not be found for given credentials.'},
  duplicateOrganization: {code: '400', reason: 'Organization already exists.'},
  duplicateTemplate: {code: '400', reason: 'Template already exists.'},
  duplicateCoverLetter: {code: '400', reason: 'Cover Letter already exists.'},
  duplicatePaymentType: {code: '400', reason: 'Payment Type already exists.'},
  addedFavourite: {code: '400', reason: 'This profile already added to favourites.'},
  addedAlert: {code: '400', reason: 'This alert is already added.'},
  noChanges: {code: '400', reason: 'No Changes have been done.'},
  coverLetterNotFound: {code: '400', reason: 'No Cover Letter has been created with this Title.'},

  invalidCredentials: {code: '403', reason: 'invalid username or password.'},
  invalidRoleProvidedForAuthentication: {code: '403', reason: 'invalid role was provided for authentivation.'},
  invalidCredentialsRoleNotAdmin: {code: '403', reason: 'invalid privileges: user is not admin.'},
  invalidCredentialsRoleNotRecruiter: {code: '403', reason: 'invalid privileges: user is not recruiter.'},
  duplicateUserName: {code: '403', reason: 'invalid privileges: This Email Id already exists'},
  duplicatePhoneNumber: {code: '403', reason: 'invalid privileges: This phonenumber already exists'},
  unauthorisedRecruiterAccessToJob: {code: '403', reason: 'invalid privileges: This job was not posted by this Recruiter'},
  unauthorisedUserForResume : {code: '403', reason: 'invalid privileges: This resume cannot be accessed by the User'},
  exceedCount : {code: '403', reason: 'invalid privileges: Recruiter Admin Cannot create morethan two Recruiters'},
  invalidDetails: {code: '403', reason: 'invalid details provided by the user.'},

  resumeProfileCannotBeEmpty: {code: '500', reason: 'Internal error: profile for this resume cannot be empty.'},
  resumeParserIsEmpty: {code: '500', reason: 'Internal error: resume parser is empty.'},
  resumeDtoIsEmpty: {code: '500', reason: 'Internal error: resume DTO is empty.'},
  errorWhileSavingResume: {code: '500', reason: 'Internal error: error while saving resume.'},
  errorWhileSavingJob: {code: '500', reason: 'Internal error: error while saving job.'},
  errorWhileSavingVideo: {code: '500', reason: 'Internal error: error while saving video.'},
  errorWhileSavingProfile: {code: '500', reason: 'Internal error: error while saving user Profile.'},
  errorAddingCoverLetterToResume: {code: '500', reason: 'Internal error: error addind cover letter to resume.'}
};