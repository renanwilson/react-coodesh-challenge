import { useListContext } from "contexts/ListContext";
import { useSearchContext } from "contexts/SearchContext";
import { useCallback } from "react";
import { RequestApi } from "services/api";
import { useNavigate } from "react-router-dom";
import { usePaginationContext } from "contexts/PaginationContext";

export const useRequestsApi = () => {
  const navigate = useNavigate();
  const { setList } = useListContext();
  const { search } = useSearchContext();
  const { pagination } = usePaginationContext();
  const handleInput: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        navigate("/search_list");
        RequestApi(search, setList, pagination);
      }
    },
    [search, setList, navigate, pagination]
  );
  const requestOnButton = () => {
    RequestApi(search, setList, pagination);
  };
  return {
    handleInput,
    requestOnButton,
  };
};
