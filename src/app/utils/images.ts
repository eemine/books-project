export const getAmazonImageUrl = (url: string): string => {
  const productId: string = url.replace(/^.*\//, '').replace(/\?.*/, '');
  return `http://images.amazon.com/images/P/${productId}.01._PE30_PI_SCLZZZZZZZ_.jpg`;
};
