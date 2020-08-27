export default ({ config }: { config: any }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      BASE_URL: "http://192.168.0.28:3000"
    }
  };
};