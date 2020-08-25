export default ({ config }) => {
  return {
    ...config,
    extra: {
        ...config.extra,
        BASE_URL: "localhost:3000"
    }
  };
};