import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useParams } from "react-router-dom";
// import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";

export default function Compiler() {
  const {urlid} = useParams()
  console.log(urlid);
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
