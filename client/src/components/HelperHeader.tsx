import { LoaderCircle, Share2Icon, ShareIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilertSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HelperHeader() {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/compiler/save", {
        fullCode: fullCode,
      });
      // console.log(response.data);
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
    }
  };
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  return (
    <div className="__Helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1">
        <Button
          onClick={handleSaveCode}
          className="flex justify-center items-center gap-1"
          variant="success"
          disabled={saveLoading}
        >
          {saveLoading ? (<><LoaderCircle className="animate-spin" />Saving</>) : (
          <>
          <ShareIcon size={15} /> Save
          </>
          )}
          
          
        </Button>

        <Button
          className="flex justify-center items-center gap-1"
          variant="secondary"
        >
          <Share2Icon size={15} />
          Share
        </Button>
      </div>
      <div className="__tab__switcher flex justify-center items-center gap-1">
        <small>Language: </small>
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CompilertSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[180px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
