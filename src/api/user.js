import request from "@/utils/axios";

export const login = () => {
  return request({
    method: "get",
  });
};
export default login
