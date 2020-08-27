export default ({ config }: { config: any }) => {
  return {
    ...config,
    extra: {
        ...config.extra,
        BASE_URL: "http://localhost:3000"
    }
  };
};