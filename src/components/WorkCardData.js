import pro1 from "../assets/main/cfdsim.png";
import pro2 from "../assets/main/seniordesign.png";
import ai3 from "../assets/vfr/vfr_assistant_feature.svg";
import thesisImg from "../assets/thesis/page_16_img_1.png";

const ProjectCardData = [
    {
        category: "aerospace",
        imgsrc: thesisImg,
        title: "MS Aerospace Thesis",
        text: "Development and testing of a mock circulatory loop to simulate the cardiac cycle and perform Particle Image Velocimetry (PIV) for Left Ventricle Assist Device (LVAD) validation.",
        view: "/project/lvad-thesis"
    },
    {
        category: "aerospace",
        imgsrc: pro1,
        videosrc: "/cfd_media3.mp4",
        title: "CFD Project",
        text: "Simulation Of A Rotating Propeller Using StarCCM+",
        view: "/project/cfd"
    },
    {
        category: "aerospace",
        imgsrc: pro2,
        title: "AIAA Competition",
        text: "Design Of An Austere Field Light Attack Aircraft",
        view: "/project/aiaa"
    },
    {
        category: "ai",
        imgsrc: ai3,
        title: "VFR PPL Assistant",
        text: "Custom GPT study aid grounded in official FAA source hierarchies and 'cite or flag' rules to assist student pilots in earning their Private Pilot License.",
        view: "/project/vfr-assistant"
    }
];

export default ProjectCardData;