import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    min-height: 100vh;
    padding: 40px;
    background: #f9fafb;
`;

export const ProfileSection = styled.section`
    background: white;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const Name = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;

export const ProfileLink = styled.a`
    margin-top: 6px;
    font-size: 14px;
    color: #2563eb;
    text-decoration: none;


    &:hover {
    text-decoration: underline;
    }
`;

export const ProjectGrid = styled.section`
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
`;

export const ProjectCard = styled(motion.div)`
    background: white;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
`;

export const CardBody = styled.div`
    padding: 16px;
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
    
`;

export const Desc = styled.p`
    margin-top: 6px;
    font-size: 14px;
    color: #555;
`;

export const Meta = styled.div`
    margin-top: 12px;
    font-size: 12px;
    color: #777;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const Modal = styled(motion.div)`
    background: white;
    width: 90%;
    max-width: 900px;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 20px;
    padding: 24px;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const CloseButton = styled.button`
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
`;

export const ImageList = styled.div`
    margin-top: 24px;
    display: grid;
    gap: 16px;
`;

export const ImageItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const DetailImage = styled.img`
    width: 100%;
    border-radius: 12px;
`;

export const ImageCaption = styled.p`
    margin-top : -4px;
    font-size: 15px;
    color: black;
`;

export const VideoWrapper = styled.div`
    margin-top: 24px;
    position: relative;
    padding-top: 56.25%;

    iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 12px;
    }
`;

export const GithubLink = styled.a`
    margin-top: 4px;
    font-size: 12px;
    color: #2563eb;
    text-decoration: none;
    margin-left: 10px;

    &:hover {
    text-decoration: underline;
    }
`;