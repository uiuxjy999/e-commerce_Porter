import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import './MainAboutSection.scss';

// jquery.ripples는 jQuery가 글로벌(window.$)에 있어야 작동하는 경우가 많습니다.
window.jQuery = $;
window.$ = $;

const MainAboutSection = () => {
  const rippleRef = useRef(null);

  useEffect(() => {
    // 1. jQuery를 글로벌에 먼저 할당합니다.
    window.jQuery = $;
    window.$ = $;

    // 2. ripples 플러그인을 동적으로 불러와서 확실한 순서를 보장합니다.
    // ESM import 호이스팅 문제를 피하기 위해 동적 임포트를 사용합니다.
    const initRipples = async () => {
      try {
        await import('jquery.ripples');
        const $el = $(rippleRef.current);

        if ($el.length > 0 && typeof $el.ripples === 'function') {
          $el.ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
          });
        }
      } catch (err) {
        console.error('Ripples effect failed to load:', err);
      }
    };

    initRipples();

    return () => {
      try {
        const $el = $(rippleRef.current);
        if ($el.length > 0 && typeof $el.ripples === 'function') {
          $el.ripples('destroy');
        }
      } catch (err) {
        // cleanup 실패 시 무시
      }
    };
  }, []);

  return (
    <section className="main-about-section">
      <div className="about-content">
        
        {/* 상단 이미지 영역 (SCSS에서 background-image로 처리) */}
        <div className="image-wrap" ref={rippleRef}>
          {/* jquery.ripples를 위해 비워둡니다 */}
        </div>

        {/* 하단 오렌지색 박스 영역 */}
        <div className="orange-box">
          
          {/* 좌측 텍스트 묶음 */}
          <div className="left-text">
            <h2>THE SINGLE STITCH</h2>
            <p className="explore-text">Explore About PORTER</p>
          </div>

          {/* 우측 텍스트 묶음 */}
          <div className="right-text">
            <h3 className="title-ko">일침입혼(一針入魂), 한 땀에 담은 타협 없는 장인 정신</h3>
            <p className="desc-ko">
              1962년부터 이어져 온 요시다 가방의 철학은 진정한 포터(PORTER)의 본질이자 기술력<br />
              의 정점입니다. 단순한 가방을 넘어, 사용자의 일상과 함께 호흡하고 진화하며 고유한 가<br />
              치를 더해가는 <span className="bold-text">영원한 동반자</span>를 만듭니다. 보이지 않는 디테일에서 완성되는 시대를 초월<br />
              한 <span className="bold-text">모던 기능주의</span>. 당신의 평생을 함께할 <span className="bold-text">완벽한 '삶의 도구'</span>를 경험해 보세요.
            </p>
            <p className="desc-en">
              Since 1962, Yoshida Kaban's philosophy has defined the true essence of PORTER. More than just a<br />
              bag, it is a lifelong companion that evolves with your everyday journey. Timeless modern<br />
              functionalism born from invisible details. Discover the perfect 'Tool for Life'
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MainAboutSection;