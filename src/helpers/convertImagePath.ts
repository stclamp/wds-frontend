const convertImagePath = (image: string) => {
  if (image.startsWith('https') || image.startsWith('http')) return image;

  const baseUrl = import.meta.env.VITE_BACKEND_LINK;
  const imageUrl = `${baseUrl}/${image}`;

  return imageUrl;
};

export default convertImagePath;
