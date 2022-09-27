export const generateErrorObject = (e, message) => {
    if (e?.name !== 'Personalized') {
      console.warn(`nameError: ${e?.name}`, `message: ${e?.message ?? message}`);
    }
    const error = {
      status: e?.status ?? 0,
      type: e?.name,
      error:e?.error
    };
    return error;
  };
  