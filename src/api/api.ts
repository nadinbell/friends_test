export const apiCall = (link: string) =>
  fetch(link).then(
    (response) => response.json()
  );

export const getUserImage = (id: number) => 
  `https://robohash.org/${id}?200x200`;