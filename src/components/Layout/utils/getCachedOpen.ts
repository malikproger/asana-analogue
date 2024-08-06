const IS_SIDEBAR_OPEN = 'isSidebarOpen';

export const getCachedOpen = () => {
  const isSidebarOpenJSON = localStorage.getItem(IS_SIDEBAR_OPEN);

  if (isSidebarOpenJSON) {
    const isSidebarOpenCached: boolean = JSON.parse(isSidebarOpenJSON);
    return isSidebarOpenCached;
  }

  return true;
};
