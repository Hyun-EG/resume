import profileImg from "../assets/images/profileImage.jpg";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__container">
        <div className="resume__container__header">
          <div className="resume__container__header__title">
            <p>반갑습니다,</p>
            <p>
              저는 박성현입니다
              <span className="colored-dot">.</span>
            </p>
          </div>
          <div className="resume__container__header__imgBox">
            <img
              className="resume__container__header__imgBox_img"
              src={profileImg}
              alt="프로필 사진"
            />
          </div>
        </div>
        <div className="resume__container__content">
          <p>제작한 웹의 가치를 타인이 알아주는것에 성취감을 느낍니다.</p>
          <p>사용자의 경험을 느끼고, 보여줄 수 있는 직관적인 분야를 찾았고,</p>
          <p>
            지금의 엔지니어링중 가장 앞단에서 임할 수 있는 FE개발자가
            되었습니다.
          </p>
        </div>

        <div className="resume__container__main">
          <div className="resume__container__main__box">
            <div className="resume__container__main__box__title">
              Project Experience
              <span className="colored-dot">.</span>
            </div>
          </div>
          <div className="resume__container__main__box__project">
            <div className="resume__container__main__box__project_title">
              <div>
                AI-KARB
                <span className="resume__container__main__box__project_title_comment">
                  (광고심의배분사이트)
                </span>
              </div>
              <a
                className="resume__container__main__box__project_title_link"
                href="https://github.com/Hyun-EG/final-project-ad-queue-AI"
                target="blank"
              >
                Github
                <span className="resume__container__main__box__project_title_link_git">
                  (https://github.com/Hyun-EG/final-project-ad-queue-AI)
                </span>
              </a>
            </div>
            <div className="resume__container__main__box__project_content">
              <span>2024.08.05 ~ 2024.09.20</span>
              <div className="resume__container__main__box__project_content_description">
                <span>
                  Description<span className="colored-dot">.</span>
                </span>
                <div className="resume__container__main__box__project_content_description_list">
                  해당 프로젝트는 기업 연계 프로젝트로 AI도입 이전에 동일광고와
                  지적광고를 분류하여, 실무자들에게 자동배분 해주고, 계정마다
                  업무량을 대시보드로 확인하고 권한에 따라 회원요청관리 및
                  사원정보관리를 할 수 있습니다.
                </div>
              </div>
              <div className="resume__container__main__box__project_content_toDo">
                <span>
                  Key Contributions<span className="colored-dot">.</span>
                </span>
                <div className="resume__container__main__box__project_content_toDo_list">
                  <li className="resume__container__main__box__project_content_toDo_list_ln">
                    헤더, 사이드바, 콘텐츠를 통합된 모듈화로 개발 효율을
                    높였습니다.
                  </li>
                  <li className="resume__container__main__box__project_content_toDo_list_ln">
                    상황에 맞는 유효성 검사 메시지와 직관적인 토스트 UI를 통해
                    사용자 편의성을 개선하였습니다.
                  </li>
                  <li className="resume__container__main__box__project_content_toDo_list_ln">
                    무한 스크롤 및 공통 컴포넌트의 재사용성을 높여 유지보수와
                    확장성을 고려한 개발을 진행했습니다.
                  </li>
                  <li className="resume__container__main__box__project_content_toDo_list_ln">
                    비회원 유저의 비정상적인 URL 접근을 차단하고, 404 페이지를
                    통해 안정적인 서비스 경험을 제공했습니다.
                  </li>
                </div>
              </div>
              <div className="resume__container__main__box__project_content_stack">
                <span>Tech Stack</span>
                <span className="colored-dot">.</span>
                <div className="resume__container__main__box__project_content_toDo_list">
                  <p className="resume__container__main__box__project_content_toDo_list_ln">
                    React TypeScript Sass Redux
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="resume__container__main__box__project">
            <div className="resume__container__main__box__project_title">
              <div>
                Aircnc
                <span className="resume__container__main__box__project_title_comment">
                  (숙박예약사이트)
                </span>
              </div>
              <a
                className="resume__container__main__box__project_title_link"
                href="https://github.com/Hyun-EG/mini-project-aircnc"
                target="blank"
              >
                Github
                <span className="resume__container__main__box__project_title_link_git">
                  (https://github.com/Hyun-EG/mini-project-aircnc)
                </span>
              </a>
            </div>
            <div className="resume__container__main__box__project_content">
              <span>2024.06.17 ~ 2024.07.07</span>
              <div className="resume__container__main__box__project_content_description">
                <span>
                  Description<span className="colored-dot">.</span>
                </span>
                <div className="resume__container__main__box__project_content_description_list">
                  숙박업소를 이용하는 사용자들을 위해 해당지역에 관련된
                  예약가능한 숙소를 모아보고 예약하는 사이트입니다.
                </div>
              </div>
              <div className="resume__container__main__box__project_content_toDo">
                <span>
                  Key Contributions<span className="colored-dot">.</span>
                </span>
                <div className="resume__container__main__box__project_content_toDo_list">
                  <li className="resume__container__main__box__project_content_toDo_list_ln">
                    사용자 경험을 고려하여, 모바일, 태블릿, 데스크탑 기준으로
                    반응형 디자인으로 개선하였습니다.
                  </li>
                  <li className="resume__container__main__box__project_content_toDo_list_ln">
                    지역별 숙소 탐색이 편하도록, 필터링하여 검색하고,
                    무한스크롤로 살펴볼 수 있도록 하였습니다.
                  </li>
                  <li className="resume__container__main__box__project_content_toDo_list_ln">
                    지도에 표시된 마커와 정보를 커스텀하여 해당숙소 정보와
                    위치를 파악할 수 있습니다.
                  </li>
                  <li className="resume__container__main__box__project_content_toDo_list_ln">
                    Geolocation API를 활용하여 사용자가 내 위치에서 반경
                    1키로내에 근접한 숙소를 확인할 수 있도록 하였습니다.
                  </li>
                </div>
              </div>
              <div className="resume__container__main__box__project_content_stack">
                <span>Tech Stack</span>
                <span className="colored-dot">.</span>
                <div className="resume__container__main__box__project_content_toDo_list">
                  <p className="resume__container__main__box__project_content_toDo_list_ln">
                    React TypeScript Styled-components Redux
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume__container__main__box">
            <div
              className="resume__container__main__box__title"
              style={{ fontSize: "2vw" }}
            >
              Skills
              <span className="colored-dot">.</span>
            </div>
            <div className="resume__container__main__box__project">
              <div className="resume__container__main__box__project_content">
                <div className="resume__container__main__box__project_content_skillList">
                  <div
                    style={{
                      width: "50vw",
                      fontSize: "1.2vw",
                      marginBottom: "3vh",
                    }}
                  >
                    HTML CSS JavaScript TypeScript React Redux tailwind Vite
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume__container__main__box">
            <div
              className="resume__container__main__box__title"
              style={{ fontSize: "2vw" }}
            >
              Education <span className="colored-dot">.</span>
            </div>
            <div className="resume__container__main__box__project">
              <div className="resume__container__main__box__project_content">
                <div className="resume__container__main__box__project_content_skillList">
                  <div style={{ marginBottom: "3vh" }}>
                    <div>2016.03 - 2022.02</div>
                    <div>서일대 컴퓨터전자공학과 졸업</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume__container__main__box">
            <div
              className="resume__container__main__box__title"
              style={{ fontSize: "2vw" }}
            >
              Contact
              <span className="colored-dot">.</span>
            </div>
            <div
              className="resume__container__main__box__project"
              style={{ marginBottom: "6vh", border: "none" }}
            >
              <div className="resume__container__main__box__project_content">
                <div className="resume__container__main__box__project_content_skillList">
                  <a href="coidee@naver.com" target="blank">
                    이메일
                  </a>

                  <a href="coidee2031@gmail.com" target="blank">
                    G메일
                  </a>

                  <a
                    href="https://www.notion.so/68ffbecaa827441e877ff82df91f794f?v=86e11c9f22d74e84bca21e62a2a1a171"
                    target="blank"
                  >
                    블로그
                  </a>

                  <a href="https://github.com/Hyun-EG" target="blank">
                    깃허브
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
