const post = async ({ request, locals }) => {
  try {
    locals.session = null;
    return {
      status: 200
    };
  } catch (error) {
    return {
      status: 500
    };
  }
};
export { post };
