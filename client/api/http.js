import axios from "axios";

const parseResponse = async (response) => {
  const { status } = response;
  let data;
  if (status !== 204) {
    data = response.data;
  }

  return {
    status,
    data,
  };
};

const request = async (params) => {
  const { method = "GET", url, headers = {}, body } = params;

  try {
    const response = await axios({
      method,
      url,
      headers,
      data: body,
    });

    return parseResponse(response);
  } catch (error) {
    // Handle error here
    throw error;
  }
};

const get = async (url, headers) => {
  const response = await request({
    url,
    headers,
    method: "GET",
  });

  return response.data;
};

const post = async (url, body, headers) => {
  const response = await request({
    url,
    headers,
    method: "POST",
    body,
  });
  return response.data;
};

const put = async (url, body, headers) => {
  const response = await request({
    url,
    headers,
    method: "PUT",
    body,
  });
  return response.data;
};

const patch = async (url, body, headers) => {
  const response = await request({
    url,
    headers,
    method: "PATCH",
    body,
  });
  return response.data;
};

const deleteRequest = async (url, headers) => {
  const response = await request({
    url,
    headers,
    method: "DELETE",
  });
  return response.data;
};

export default {
  get,
  post,
  put,
  patch,
  delete: deleteRequest,
};
