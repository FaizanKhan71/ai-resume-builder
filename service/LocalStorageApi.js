// Local Storage API for development without backend
const LOCAL_STORAGE_KEY = 'resumeBuilder_resumes';

const LocalStorageApi = {
  CreateNewResume: (data) => {
    return new Promise((resolve) => {
      const resumes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      const newResume = {
        id: Date.now().toString(),
        documentId: data.data.resumeId,
        ...data.data,
        createdAt: new Date().toISOString()
      };
      resumes.push(newResume);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resumes));
      resolve({ data: { data: newResume } });
    });
  },

  GetUserResumes: (userEmail) => {
    return new Promise((resolve) => {
      const resumes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      const userResumes = resumes.filter(resume => resume.userEmail === userEmail);
      resolve({ data: { data: userResumes } });
    });
  },

  UpdateResumeDetail: (id, data) => {
    return new Promise((resolve) => {
      const resumes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      const index = resumes.findIndex(resume => resume.documentId === id);
      if (index !== -1) {
        resumes[index] = { ...resumes[index], ...data.data };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resumes));
      }
      resolve({ data: { data: resumes[index] } });
    });
  },

  GetResumeById: (id) => {
    return new Promise((resolve) => {
      const resumes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      const resume = resumes.find(resume => resume.documentId === id);
      resolve({ data: { data: resume } });
    });
  },

  DeleteResumeById: (id) => {
    return new Promise((resolve) => {
      const resumes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      const filteredResumes = resumes.filter(resume => resume.documentId !== id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredResumes));
      resolve({ data: { data: {} } });
    });
  }
};

export default LocalStorageApi;