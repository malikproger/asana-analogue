const IS_SIDEBAR_OPEN = 'isSidebarOpen';

export const setCachedOpen = (isSidebarOpen: boolean) => {
  localStorage.setItem(IS_SIDEBAR_OPEN, JSON.stringify(isSidebarOpen));
};
