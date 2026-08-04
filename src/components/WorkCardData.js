import pro1 from "../assets/main/cfdsim.png";
import pro2 from "../assets/main/seniordesign.png";
import ai3 from "../assets/vfr/vfr_assistant_feature.svg";
import mlvsdl from "../assets/ml/ml_vs_dl_feature.svg";
import trainingMethods from "../assets/mltm/training_methods_feature.svg";
import dataChallenges from "../assets/dc/data_challenges_feature.svg";
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
        text: "A deployed custom GPT that helps student pilots study for the FAA written test, built so it must cite an FAA source or flag that it could not.",
        view: "/project/vfr-assistant"
    },
    {
        category: "ai",
        imgsrc: trainingMethods,
        title: "ML Training Methods Guide",
        text: "All four training paradigms explained through one seven-step lens, down to XGBoost, K-Means, and PPO. Built by interrogating the course AI tutor.",
        view: "/project/ml-training-methods"
    },
    {
        category: "ai",
        imgsrc: dataChallenges,
        title: "Data Challenges in ML",
        text: "Nineteen ways data breaks ML systems, each tied to a documented failure and a mitigation with its cost named. A pre-deployment risk register.",
        view: "/project/data-challenges"
    },
    {
        category: "ai",
        imgsrc: mlvsdl,
        title: "Machine Learning vs. Deep Learning",
        text: "Why an SVM is right for churn prediction and a CNN is right for autonomous driving, argued in both directions for each case.",
        view: "/project/ml-vs-dl"
    }
];

export default ProjectCardData;