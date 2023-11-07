



export const fetchUser = async (token, { id }) => {
    try {
      const result = await request(
        `/api/users/${id}`, 
        'GET', 
        null,
        token
      );
      return {
        isError: false,
        data: result,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  };