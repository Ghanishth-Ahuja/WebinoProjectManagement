import {useState} from "react";
import ProjectContext from "./ProjectContext.js";

export function ProjectContextProvider({ children }) {
  const [project, setProject] = useState([]);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  )
}

