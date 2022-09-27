export const generateErrorObject = (e, message) => {
    if (e?.name !== 'Personalized') {
      console.warn(`nameError: ${e?.name}`, `message: ${e?.message ?? message}`);
    }
    const error = {
      ok: false,
      status: e?.status ?? 0,
      message,
      type: e?.name,
    };
    return error;
  };
  