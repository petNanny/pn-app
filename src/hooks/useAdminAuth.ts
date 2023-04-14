import { useEffect } from "react";
import { useGetOneAdminQuery } from "../redux/adminApi";
import { useStoreDispatch } from "../store/hook";
import { updateAdminUserInfo } from "../store/reducer/adminUserSlice";

export const useAdminAuth = (id: string) => {
  const dispatch = useStoreDispatch();

  const { data, isLoading, isSuccess } = useGetOneAdminQuery(id, {
    skip: !id,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(updateAdminUserInfo(data));
    }
  }, [isSuccess, data]);

  return {
    auth: data,
    isLoadingAuth: isLoading,
  };
};
