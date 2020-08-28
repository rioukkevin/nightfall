export default ({ config }: { config: any }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      BASE_URL: "http://172.29.9.91:3000"
    }
  };
};