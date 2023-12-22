import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import SidebarTechnologies from "./SidebarTechnologies"



const ProjectSidebar = () => {
    return (
        <div className='w-60 h-full mr-2'>
            <div className="space-y-4 flex items-start w-full h-full flex-col">
                <h2 className="font-semibold text-lg ml-4">Technology</h2>

                <div className="flex flex-col h-full w-full px-2">
                    <SidebarTechnologies techName={"AWS"}/>
                    <SidebarTechnologies techName={"Next JS"}/>
                    <SidebarTechnologies techName={"Data Science"}/>
                    <SidebarTechnologies techName={"Statistics"}/>
                    <SidebarTechnologies techName={"Data Visualization"}/>

                </div>
            </div>
        </div>

    )
}

export default ProjectSidebar