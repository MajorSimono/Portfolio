const profilePath = (path) => `${import.meta.env.BASE_URL}profile/${path}.json`;

const endpoints = {
  navbar: profilePath('navbar'),
  routes: profilePath('routes'),
  home: profilePath('home'),
  social: profilePath('social'),
  about: profilePath('about'),
  skills: profilePath('skills'),
  education: profilePath('education'),
  experiences: profilePath('experiences'),
  projects: profilePath('projects'),
};

export const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export default endpoints;
