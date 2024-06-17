import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { updateFullCode } from "@/redux/slices/compilerSlice";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";

export default function Compiler() {
  const {urlId} = useParams();
  const dispatch = useDispatch();
  const loadCode = async () => {
    try{
      const response = await axios.post("http://localhost:4000/compiler/load", {
        urlId: urlId
      });
      dispatch(updateFullCode(response.data.fullCode));
      // console.log(response.data)
    }catch(error){
      handleError(error)
    }
  }
  useEffect(() => {
    if(urlId){
      loadCode();
    }
  },[urlId]);
  // console.log(urlid);
  // const html = useSelector((state:RootState)=>state.compilerSlice.html)
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className=""
    >
      <ResizablePanel  className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}>
          
        <HelperHeader />
        <CodeEditor />

      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}>
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
