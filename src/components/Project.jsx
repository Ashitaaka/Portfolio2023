import { useEffect } from "react";
// import { Link } from "react-router-dom";

gsap.registerEffect(ScrollTrigger);

function Project({
  imageUrl,
  projectLink,
  projectName,
  projectId,
  projectType,
  projectClient,
  isBlurred,
  setIsBlurred,
  expanded,
  setExpanded,
  setSelectedId,
}) {

  const handleBgBlurred = () =>
    isBlurred ? setIsBlurred("") : setIsBlurred("blurred");
  const handleCardExpand = () =>
    expanded === "" ? setExpanded("expanded") : setExpanded("");
  const handleSelectedId = (projectId) => setSelectedId(projectId);

  useEffect(() => {
    const projectContentAll = gsap.utils.toArray(".project-content");
    const projectHrAll = gsap.utils.toArray(".animated-hr");

    projectContentAll.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          // markers: true,
          trigger: el,
          start: "top 100%",
          end: "top 99%",
          toggleActions: "start resume reverse resume",
          scrub: 2,
        },
        y: 0,
        opacity: 1,
        ease: Circ.inOut,
        duration: 2,
      });
    });

    projectHrAll.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          // markers: true,
          trigger: element,
          start: "top 98%",
          end: "top 90%",
          toggleActions: "start pause reverse pause",
          scrub: 3,
        },
        scaleX: 1,
        ease: Circ.inOut,
        duration: 1,
      });
    });
  }, []);

  return (
    // <Link
    //   to={projectLink}
    //   onClick={() => {
    //     handleCardExpand();
    //     handleBgBlurred();
    //     handleSelectedId(projectId);
    //     console.log(` test ${projectId}`);
    //   }}
    // >
      <div className="project" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="project-content">
          <div className="project-name">
            <p className="project-id">
              {projectId < 10 ? `0${projectId}` : projectId}
            </p>
            <h2 className="project-title">{projectName}</h2>
          </div>
          <div className="project-client">
            <p className="project-type">{projectType}</p>
            <p className="client-name">{projectClient}</p>
          </div>
        </div>
        <div className="test"></div>
        <div className="animated-hr"></div>
      </div>
    // </Link>
  );
}

export default Project;
