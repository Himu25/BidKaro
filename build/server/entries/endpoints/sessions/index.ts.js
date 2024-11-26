const get = async (event) => {
  return {
    status: 200,
    body: event.locals.session
  };
};
export { get };
