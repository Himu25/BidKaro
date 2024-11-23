const post = async ({ request, locals }) => {
  locals.session = null;
  return {
    status: 200
  };
};
export { post };
