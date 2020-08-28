export default ({ config }: { config: any }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      BASE_URL: "http://192.168.42.232:3000"
    }
  };
};