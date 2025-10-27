"use client";

import { ProjectData } from "@/types/projects";
import { useState } from "react";
import ProjectCardFull from "./ProjectCardFull";
import Image from "next/image";

interface Props {
  allProjects: ProjectData[];
}

export default function ProjectsFilteration({ allProjects }: Props) {
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(allProjects);
  const [activeFilter, setActiveFilter] = useState<"سكني" | "تجاري" | "الكل">("الكل");

  function handleFilterClick(filter: "سكني" | "تجاري" | "الكل") {
    setActiveFilter(filter);
    if (filter === "الكل") {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter((project) => project.type === filter);
      setFilteredProjects(filtered);
    }
  }

  const labels: ("سكني" | "تجاري" | "الكل")[] = ["الكل", "سكني", "تجاري"];

  return (
    <>
      <div className="rounded-card-radius bg-background flex -translate-y-1/2 items-center justify-center gap-2 px-3 py-6 shadow-lg">
        {labels.map((label) => {
          return (
            <button
              key={label}
              onClick={() => handleFilterClick(label)}
              className={`${label === activeFilter ? "bg-primary hover:bg-primary-light active:bg-primary-light text-background" : "border-secondary-light bg-background text-primary hover:bg-[#eeeeee]"} text-cta duration-hover-fast flex cursor-pointer items-center gap-2 rounded-xl border p-3 transition`}
            >
              <span>{label}</span>
              {label !== "الكل" && (
                <span>
                  <Image
                    src={`/icons/${label == "سكني" ? "home-1" : "home-tree"}.svg`}
                    className={label === activeFilter ? "white-svg" : ""}
                    alt="Icon"
                    width={20}
                    height={20}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {filteredProjects.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects?.map((project) => {
            return <ProjectCardFull key={project.id} data={project} />;
          })}
        </div>
      ) : (
        <h4 className="text-body-large text-primary text-center">
          لا يوجد مشاريع متاحة للعرض الآن.
        </h4>
      )}
    </>
  );
}
