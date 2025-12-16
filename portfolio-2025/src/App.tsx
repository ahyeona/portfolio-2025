import { useState } from 'react'
import { CardBody, CloseButton, Container, Desc, DetailImage, GithubLink, ImageCaption, ImageItem, ImageList, Meta, Modal, ModalHeader, ModalOverlay, Name, ProfileLink, ProfileSection, ProjectCard, ProjectGrid, Thumbnail, Title, VideoWrapper } from './App.style';
import { AnimatePresence } from 'framer-motion';

type ProjectImage = {
  src: string;
  caption: string;
};

type ProjectDesc = {
  title: string;
  desc: string;
}

type Project = {
  id: number;
  title: string;
  deployUrl?: string;
  team: string;
  description: string;
  role: string;
  stack: string[];
  period: string;
  thumbnail: string;
  github: string;
  images: ProjectImage[];
  video?: string;
  projectDesc?: ProjectDesc[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "MyPick",
    deployUrl: "https://my-pick.vercel.app",
    team: "1인",
    description: "나만의 영화 북마크 서비스",
    role: "frontend, backend, deploy",
    stack: ["React", "TypeScript", "Vite", "Zustand", "Node.js", "express", "Mysql"],
    period: "2025.11 ~ 2025.12",
    thumbnail: "/mypick/main.png",
    github: "https://github.com/ahyeon/movie-app",
    images: [
      {
        src: "/mypick/flowchart.png",
        caption: "플로우차트",
      },
      {
        src: "/mypick/wireframe.png",
        caption: "와이어프레임",
      },
      {
        src: "/mypick/erd.png",
        caption: "ERD",
      },
      {
        src: "/mypick/main.png",
        caption: "",
      },
      {
        src: "/mypick/main_2.png",
        caption: "",
      },
      {
        src: "/mypick/main_3.png",
        caption: "메인 페이지 : 영화 인기 목록 검색",
      },
      {
        src: "/mypick/main_keyword.png",
        caption: "메인 페이지 : 영화 키워드 검색",
      },
      {
        src: "/mypick/main_genre.png",
        caption: "메인 페이지 : 영화 장르별 검색",
      },
      {
        src: "/mypick/main_login.png",
        caption: "메인 페이지 : 로그인 되지 않은 상태에서 아이템 클릭 시 로그인 페이지로 이동",
      },
      {
        src: "/mypick/login.png",
        caption: "로그인 페이지",
      },
      {
        src: "/mypick/signup.png",
        caption: "회원가입 페이지",
      },
      {
        src: "/mypick/detail.png",
        caption: "상세 modal",
      },
      {
        src: "/mypick/detail_create.png",
        caption: "상세 modal - mypick 추가",
      },
      {
        src: "/mypick/mypick.png",
        caption: "마이픽 페이지",
      },
      {
        src: "/mypick/mypick_dark.png",
        caption: "마이픽 페이지 - 다크모드",
      },
      {
        src: "/mypick/main_dark.png",
        caption: "메인 페이지 - 다크모드",
      },
      {
        src: "/mypick/detail_dark.png",
        caption: "상세 모달 - 다크모드",
      },
    ],
    video: "/mypick/video.mp4"
  },
  {
    id: 2,
    title: "Nobroker 부동산 매매 사이트",
    team: "4인",
    description: "중개사 없이 매물을 거래할 수 있는 사이트",
    role: "팀장, Backend, Frontend, Deploy",
    stack: ["React", "Node.js (express)", "Mysql", "React-query", "AWS"],
    period: "2023. 07. 28 ~ 2023. 08. 28",
    thumbnail: "/nobroker/nobroker.png",
    github: "https://github.com/zam0ng/React_Project_NoBroker",
    images: [
      {
        src: "/nobroker/nobroker_erd.png",
        caption: "ERD",
      },
      {
        src: "/nobroker/nobroker_main.png",
        caption: "",
      },
      {
        src: "/nobroker/nobroker.png",
        caption: "메인페이지",
      },
      {
        src: "/nobroker/nobroker_list.png",
        caption: "매물 목록 페이지 - 거래 가능한 매물 목록을 띄워줌. 찜하기, 조건별 검색이 가능함. 구글 맵 api를 활용하였음.",
      },
      {
        src: "/nobroker/nobroker_detail.png",
        caption: "매물 상세 페이지 - 매물의 상세 정보를 보여줌. 댓글, 대댓글, 찜하기 기능이 있고 거래 신청이 가능함",
      },
      {
        src: "/nobroker/nobroker_voteList.png",
        caption: "매물 투표 목록 페이지 - 등록된 매물의 진위 여부를 판별하기 위한 기능. 사업자 회원들만 투표 가능함",
      },
      // {
      //   src: "/nobroker/nobroker_main.png",
      //   caption: "마이페이지 - 등록, 구매한 매물 목록을 확인할 수 있고, 매물 거래가 가능함",
      // },
    ],
    projectDesc: [
      {
        title:
          "작업내용",
        desc: `매물 상세
front : 특정 매물의 상세 정보를 띄워줌. 여러 이미지를 보여주기 위해 이미지 슬라이드 기능을 구현함.
back : mysql에서 매물의 상세 정보를 프론트에 반환하는 api를 작성함
매물 투표
front, back : 투표 기능 작성
deploy : AWS EC2 배포`
      },
      {
        title:
          "담당 역할",
        desc: `팀장, 매물 상세 페이지, 매물 투표 페이지, AWS EC2 배포`
      }
    ]
  },
  {
    id: 3,
    title: "Internode 티켓 예매 사이트",
    team: "4인",
    description: "티켓 예매 사이트",
    role: "Frontend, Backend",
    stack: ["Node.js", "express", "javascript", "Mysql"],
    period: "2023. 06. 02 ~ 2023. 06. 26",
    thumbnail: "/internode/internode.png",
    github: "https://github.com/zerohoney97/interNode",
    images: [
      {
        src: "/internode/internode_erd.png",
        caption: "ERD",
      },
      {
        src: "/internode/internode.png",
        caption: "",
      },
      {
        src: "/internode/internode_list2.png",
        caption: "메인페이지 : 공연 목록 - 예매 가능한 공연 목록 확인 가능",
      },
      {
        src: "/internode/internode_detail1.png",
        caption: "",
      },
      {
        src: "/internode/internode_detail2.png",
        caption: "",
      },
      {
        src: "/internode/internode_detail3.png",
        caption: "상세페이지",
      },
      {
        src: "/internode/internode_ticketing.png",
        caption: "예매 페이지 : socket.io를 사용하여 공연 예매 구현",
      },
      {
        src: "/internode/internode_mypage.png",
        caption: "",
      },
      {
        src: "/internode/internode_addReview.png",
        caption: "마이페이지 - 리뷰 : 공연에 대한 리뷰 작성 가능, 마이페이지: 개인 정보 수정 및 예매 내역 확인 가능",
      },
      {
        src: "/internode/internode_freeboard.png",
        caption: "",
      },
      {
        src: "/internode/internode_insertFreeboard.png",
        caption: "자유게시판 : 자유로운 게시글 작성",
      },
      {
        src: "/internode/internode_chat.png",
        caption: "문의하기",
      },
      {
        src: "/internode/internode_admin_user.png",
        caption: "",
      },
      {
        src: "/internode/internode_admin_chat.png",
        caption: "",
      },
      {
        src: "/internode/internode_admin_chat_detail.png",
        caption: "관리자 : 유저 관리 및 공연 등록. socket.io를 사용하여 채팅 기능 구현",
      },
      {
        src: "/internode/internode_signup.png",
        caption: "회원가입 페이지",
      },
    ],
    projectDesc: [
      {
        title:
          "작업내용",
        desc: `공연 예매 기능 구현 : socket.io 사용, 마이 페이지 : 예매 내역/공연 후기 목록 출력, 작성, 수정, 삭제 기능`
      },
      {
        title:
          "담당 역할",
        desc: `공연 예매 페이지, 마이페이지 작성`
      }
    ]
  },
  {
    id: 4,
    title: "Bounswap 탈중앙화 거래소 (협약 프로젝트)",
    team: "5인",
    description: "Uniswap의 분산형 자동화 마켓 메이커(AMM)를 기반으로 사용자에게 토큰 교환, 유동성 공급 기능과 다양한 수익창출의 기회를 제공하는 탈중앙화 거래소(DEX)",
    role: "contract, deploy",
    stack: ["React", "TypeScript", "Solidity", "AWS", "react-query"],
    period: "2023.10.23 ~ 2023. 12. 05",
    thumbnail: "/bounswap/bounswap.png",
    github: "https://github.com/9oodam/BounswapContract",
    images: [
      {
        src: "/bounswap/bounswap_architecture.png",
        caption: "컨트랙트 아키텍처",
      },
      {
        src: "/bounswap/bounswap.png",
        caption: "swap 페이지 : 플랫폼 내 예치된 코인 및 토큰을 자유롭게 교환할 수 있는 swap 페이지",
      },
      {
        src: "/bounswap/bounswap_tokens.png",
        caption: "token dashboard 페이지",
      },
      {
        src: "/bounswap/bounswap_tokenDetail.png",
        caption: "token detail 페이지",
      },
      {
        src: "/bounswap/bounswap_pools.png",
        caption: "pool dashboard 페이지",
      },
      {
        src: "/bounswap/bounswap_poolDetail.png",
        caption: "pool detail 페이지 : add liquidity - 사용자가 원하는 토큰 2개를 페어로 플랫폼에 존재하는 풀에 원하는 양만큼 1:1로 예치하고 증서로 LP토큰을 부여받음, 해당 풀에서 스왑이 일어나면 유동성 공급자는 지분에 비례하여 수수료를 분배받음",
      },
      {
        src: "/bounswap/bounswap_stake.png",
        caption: "stake dashboard 페이지 : staking - 특정 LP토큰을 스테이킹 풀에 예치한 기간과 양에 따라 메인넷 코인(BNC)를 보상으로 부여",
      },
      {
        src: "/bounswap/bounswap_governance.png",
        caption: "governance 페이지 - governance : 커뮤니티의 방향성에 대한 제안과 투표로 의사를 표할 수 있음",
      },
      {
        src: "/bounswap/bounswap_sidebar.png",
        caption: "sidebar 페이지 : 사용자가 보유중인 코인, 토큰 목록과 유동성을 제공한 풀의 목록을 출력",
      },
      {
        src: "/bounswap/bounswap_mobile.gif",
        caption: "mobile 구현",
      },
    ],
    projectDesc: [
      {
        title:
          "작업내용",
        desc: `contract : data, governance 컨트랙트 작성. data 컨트랙트는 프론트와 상호작용하는 컨트랙트 중 하나로, pair 기능과 관련된 데이터를 기록하는 컨트랙트이다. governance 컨트랙트는 거버넌스 기능을 담당하는 컨트랙트로, 의제 제출과 투표 기능을 담당하는 컨트랙트이다.
front : react query를 활용하여 컨트랙트에게 응답받은 데이터를 기록
deploy : AWS S3 정적 배포`
      },
      {
        title:
          "담당 역할",
        desc: `Data, Governance 컨트랙트 작성, 컨트랙트 데이터 프론트 출력, AWS S3 프론트 배포`
      }
    ]
  },
];

export const App = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Container>
      <ProfileSection>
        <Name>김아현 | 풀스택 개발자</Name>
        <ProfileLink href="mailto:ahhyeon741@gmail.com">📧 ahhyeon741@gmail.com</ProfileLink>
        <ProfileLink
          href="https://github.com/ahyeona"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 github.com/ahyeona
        </ProfileLink>
      </ProfileSection>

      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} onClick={() => setSelected(project)}>
            <Thumbnail src={project.thumbnail} />
            <CardBody>
              <Title>
                {project.title}
                <GithubLink href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  {project.deployUrl}
                </GithubLink>
              </Title>
              <Desc>{project.description}</Desc>
              <Meta>
                <span>개발인원: {project.team}</span>
                <span>역할: {project.role}</span>
                <span>기간: {project.period}</span>
                <span>스택: {project.stack.join(", ")}</span>
                <GithubLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </GithubLink>
              </Meta>
            </CardBody>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <AnimatePresence>
        {selected && (
          <ModalOverlay onClick={() => setSelected(null)}>
            <Modal
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <h2>
                  {selected.title}
                </h2>
                <CloseButton onClick={() => setSelected(null)}>✕</CloseButton>
              </ModalHeader>

              {selected.deployUrl &&
                <GithubLink href={selected.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <h3>{selected.deployUrl}</h3>
                </GithubLink>
              }

              <h5>git repo :
                <GithubLink href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  {selected.github}
                </GithubLink>
              </h5>

              <p>{selected.description}</p>
              {selected?.projectDesc?.map((item) => (
                <div>
                  <span style={{ fontWeight: "bold" }}>{item.title}</span>
                  <p>{item.desc}</p>
                </div>
              ))}

              <ImageList>
                {selected.images.map((img, idx) => (
                  <ImageItem key={idx}>
                    <DetailImage src={img.src} />
                    <ImageCaption>{img.caption}</ImageCaption>
                  </ImageItem>
                ))}
              </ImageList>


              {selected.video && (
                <VideoWrapper>
                  <iframe src={selected.video} allowFullScreen />
                </VideoWrapper>
              )}
            </Modal>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
}
export default App
