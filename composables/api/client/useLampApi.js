export default function useLampApi() {
  const fetchRecommendList = () => {
    return useFetch("/api/lamp/recommend", {
      method: "GET",
    });
  };

  return {
    fetchRecommendList,
  };
}
