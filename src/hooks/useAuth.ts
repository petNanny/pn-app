import { useEffect } from "react";
import { useGetOnePetOwnerQuery } from "../redux/petOwnerApi";
import { useDispatch } from "react-redux";
import { updatePetOwnerInfo } from "../store/reducer/petOwnerSlice";

export const useAuth = (id: string) => {
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess } = useGetOnePetOwnerQuery(id, {
    skip: !id,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(updatePetOwnerInfo(data));
    }
  }, [isSuccess, data]);

  return {
    auth: data,
    isLoadingAuth: isLoading,
  };
};
