// Kmong portfolio slides — Unrealli AI 미니진단 사례
// Wanted Design System tokens. 1080 wide.

const BRAND = "UNREALLI";
const FOOTNOTE = "※ 고객명과 식별 정보는 익명화한 포트폴리오용 사례입니다.";

// Shared building blocks ----------------------------------------------------
const SlideShell = ({ width = 1080, height = 1600, padding = 88, bg = "#FFFFFF", children, footnote = true, label }) => (
  <div
    data-screen-label={label}
    data-export-slide={label}
    style={{
      width, height, background: bg,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      padding: `${padding}px`,
      boxSizing: 'border-box',
    }}
  >
    {children}
    {footnote && (
      <div style={{
        position: 'absolute',
        left: padding, right: padding, bottom: 36,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 18, color: 'rgba(55,56,60,0.43)', letterSpacing: '0.01em',
      }}>
        <span style={{ fontWeight: 700, letterSpacing: '0.18em', fontSize: 16, color: 'rgba(55,56,60,0.61)' }}>{BRAND}</span>
        <span>{FOOTNOTE}</span>
      </div>
    )}
  </div>
);

const Chip = ({ children, tone = 'soft' }) => {
  const styles = tone === 'blue'
    ? { background: '#EAF2FE', color: '#0054D1', border: '1px solid rgba(0,102,255,0.18)' }
    : { background: 'rgba(112,115,124,0.08)', color: 'rgba(55,56,60,0.78)', border: '1px solid rgba(112,115,124,0.16)' };
  return (
    <span style={{
      ...styles,
      borderRadius: 999,
      padding: '14px 24px',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
      display: 'inline-flex', alignItems: 'center',
    }}>{children}</span>
  );
};

const SectionLabel = ({ children, color = '#0066FF' }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 12,
    fontSize: 20, fontWeight: 700, color, letterSpacing: '0.06em',
    textTransform: 'uppercase',
  }}>
    <span style={{ width: 28, height: 2, background: color, display: 'inline-block' }}></span>
    {children}
  </div>
);

// Slide 1 — Cover (1:1) -----------------------------------------------------
const Slide1 = () => (
  <SlideShell width={1080} height={1080} padding={80} label="01 표지">
    {/* Top label */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        background: '#EAF2FE', color: '#0054D1',
        padding: '12px 22px', borderRadius: 999,
        fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em',
      }}>
        <span style={{ width: 8, height: 8, background: '#0066FF', borderRadius: 999 }}></span>
        AI 업무활용 미니진단 · 익명 고객 사례
      </div>
      <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: '0.22em', color: 'rgba(55,56,60,0.61)' }}>{BRAND}</div>
    </div>

    {/* Spacer */}
    <div style={{ flex: 1 }}></div>

    {/* Big title */}
    <div>
      <div style={{ fontSize: 22, fontWeight: 600, color: '#0066FF', marginBottom: 28, letterSpacing: '-0.01em' }}>
        Case · 01
      </div>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 92, lineHeight: 1.14, letterSpacing: '-0.035em',
        fontWeight: 800, color: '#000', margin: 0,
      }}>
        에어컨 청소<br/>결과보고서<br/>업무 진단 사례
      </h1>
    </div>

    {/* Sub copy */}
    <div style={{
      marginTop: 40,
      fontSize: 26, lineHeight: 1.5,
      color: 'rgba(55,56,60,0.78)', letterSpacing: '-0.012em', fontWeight: 500,
    }}>
      현장 사진을 고객 신뢰 자료로 바꾸기 위한<br/>
      AI 업무활용 미니진단
    </div>

    <div style={{ flex: 1 }}></div>

    {/* Chips */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <Chip tone="blue">업무 흐름 진단</Chip>
      <Chip>대표사진 선정 병목</Chip>
      <Chip>AI 적용 지점</Chip>
      <Chip>자동화 3단계 로드맵</Chip>
    </div>

    {/* Decorative blue corner accent */}
    <div style={{
      position: 'absolute', right: -120, top: -120, width: 360, height: 360,
      background: 'radial-gradient(circle at center, rgba(0,102,255,0.08) 0%, transparent 70%)',
      pointerEvents: 'none',
    }}></div>
  </SlideShell>
);

// Slide 2 — Customer problem ------------------------------------------------
const Slide2 = () => (
  <SlideShell label="02 고객 문제">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <SectionLabel>01 / 고객 문제</SectionLabel>
      <div style={{ fontSize: 18, fontWeight: 600, color: 'rgba(55,56,60,0.43)' }}>Problem</div>
    </div>

    <h2 style={{
      marginTop: 36,
      fontSize: 56, lineHeight: 1.25, letterSpacing: '-0.03em',
      fontWeight: 800, color: '#000',
    }}>
      고객은 자동화가 필요하다는 건<br/>알았지만,<br/>
      <span style={{ color: '#0066FF' }}>어디서부터 바꿔야 할지</span> 몰랐습니다
    </h2>

    <div style={{
      marginTop: 48,
      fontSize: 24, lineHeight: 1.66, color: 'rgba(55,56,60,0.78)', fontWeight: 500,
      letterSpacing: '-0.012em',
    }}>
      에어컨 청소 후 고객에게 결과보고서를 전달해야 했습니다. 보고서에는 작업 전/후 사진, 작업 과정, 오염수 사진 등이 포함되었습니다.
      <div style={{ height: 24 }}></div>
      하지만 휴대폰 사진을 PC로 옮긴 뒤, PPT 양식에 하나씩 직접 삽입하는 방식이었습니다.
    </div>

    {/* Problem points */}
    <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {[
        ['01', '현장 사진이 많고 비슷한 컷이 많음'],
        ['02', '어떤 사진을 넣어야 할지 매번 판단해야 함'],
        ['03', '작업자·장소·기기별로 사진이 섞이면 정리가 복잡해짐'],
        ['04', '보고서 작성이 사람의 기억과 수작업에 의존함'],
      ].map(([n, text]) => (
        <div key={n} style={{
          display: 'flex', alignItems: 'center', gap: 24,
          padding: '28px 32px',
          background: 'rgba(112,115,124,0.05)',
          border: '1px solid rgba(112,115,124,0.16)',
          borderRadius: 20,
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 700,
            color: '#0066FF', letterSpacing: '0.04em', minWidth: 36,
          }}>{n}</div>
          <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(112,115,124,0.22)' }}></div>
          <div style={{ fontSize: 24, fontWeight: 600, color: '#1B1C1E', letterSpacing: '-0.012em' }}>{text}</div>
        </div>
      ))}
    </div>

    {/* Bottom emphasis */}
    <div style={{
      marginTop: 56,
      padding: '36px 40px',
      background: '#171719',
      borderRadius: 24,
      color: '#FFF',
    }}>
      <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.08em', marginBottom: 8 }}>
        KEY INSIGHT
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.022em', lineHeight: 1.4 }}>
        문제는 단순히 "사진을 넣는 작업"이 아니었습니다.
      </div>
    </div>
  </SlideShell>
);

const ExampleLabel = ({ children }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '8px 14px',
    background: 'rgba(112,115,124,0.08)',
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 800,
    color: 'rgba(55,56,60,0.61)',
    letterSpacing: '0.04em',
  }}>
    {children}
  </div>
);

const Callout = ({ n, title, body, style, line = 'left' }) => (
  <div style={{
    position: 'absolute',
    ...style,
    width: 286,
    padding: '18px 20px',
    background: '#FFFFFF',
    border: '1px solid rgba(112,115,124,0.18)',
    borderRadius: 18,
    boxShadow: '0 8px 22px rgba(23,23,25,0.08)',
  }}>
    <div style={{
      position: 'absolute',
      top: 28,
      [line === 'right' ? 'left' : 'right']: '100%',
      width: 42,
      height: 1,
      background: '#0066FF',
    }} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <div style={{
        width: 28, height: 28, borderRadius: 999,
        background: '#0066FF',
        color: '#FFF',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14, fontWeight: 800,
      }}>{n}</div>
      <div style={{ fontSize: 17, fontWeight: 800, color: '#1B1C1E', letterSpacing: '-0.01em' }}>{title}</div>
    </div>
    <div style={{ fontSize: 15, fontWeight: 500, color: 'rgba(55,56,60,0.74)', lineHeight: 1.48, letterSpacing: '-0.006em' }}>
      {body}
    </div>
  </div>
);

const ExampleImageCard = ({ src, label, children, imageWidth = 350, imageHeight = 438, imageAlign = 'left' }) => (
  <div style={{
    marginTop: 22,
    padding: '20px 24px',
    background: '#F7FBFF',
    border: '1px solid rgba(0,102,255,0.18)',
    borderRadius: 24,
    position: 'relative',
    minHeight: imageHeight + 84,
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
      <ExampleLabel>{label}</ExampleLabel>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(55,56,60,0.43)', letterSpacing: '0.08em' }}>ORIGINAL SAMPLE IMAGE</div>
    </div>
    <div style={{
      width: imageWidth,
      height: imageHeight,
      borderRadius: 18,
      overflow: 'hidden',
      background: '#FFF',
      border: '1px solid rgba(112,115,124,0.18)',
      boxShadow: '0 10px 26px rgba(23,23,25,0.12)',
      marginLeft: imageAlign === 'right' ? 'auto' : 0,
    }}>
      <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
    {children}
  </div>
);

const DiagnosisExamplePreview = () => (
  <ExampleImageCard
    src="assets/example-diagnosis.png"
    label="포트폴리오용 익명화 예시 · 핵심 문제 정의"
    imageWidth={320}
    imageHeight={400}
    imageAlign="right"
  >
    <Callout
      n="1"
      title="핵심 문제 정의"
      body="문제를 나열하는 대신 고객 관점에서 봐야 할 병목을 번호로 정리했습니다."
      style={{ left: 42, top: 104 }}
      line="right"
    />
    <Callout
      n="2"
      title="한 줄 진단"
      body="진단 결과를 다음 실행으로 연결할 수 있도록 짧은 문장으로 요약했습니다."
      style={{ left: 124, top: 300 }}
      line="right"
    />
  </ExampleImageCard>
);

const RoadmapExamplePreview = () => (
  <ExampleImageCard
    src="assets/example-roadmap.png"
    label="포트폴리오용 익명화 예시 · 실행 방향"
    imageWidth={430}
    imageHeight={538}
    imageAlign="right"
  >
    <Callout
      n="1"
      title="3단계 로드맵"
      body="바로 큰 시스템으로 가지 않고 단계별 확장 방향을 먼저 보여줍니다."
      style={{ left: 42, top: 124 }}
      line="right"
    />
    <Callout
      n="2"
      title="추천 실행 순서"
      body="지금 시작할 범위와 다음 확장 방향을 한눈에 확인할 수 있게 정리합니다."
      style={{ left: 112, top: 376 }}
      line="right"
    />
  </ExampleImageCard>
);

// Slide 3 — Diagnosis core --------------------------------------------------
const Slide3 = () => (
  <SlideShell label="03 진단 핵심">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <SectionLabel>02 / 진단 핵심</SectionLabel>
      <div style={{ fontSize: 18, fontWeight: 600, color: 'rgba(55,56,60,0.43)' }}>Diagnosis</div>
    </div>

    <h2 style={{
      marginTop: 36,
      fontSize: 64, lineHeight: 1.18, letterSpacing: '-0.032em',
      fontWeight: 800, color: '#000',
    }}>
      진짜 병목은<br/>
      <span style={{ color: 'rgba(55,56,60,0.43)', textDecoration: 'line-through', textDecorationThickness: '4px' }}>PPT 삽입</span>이<br/>아니었습니다
    </h2>

    <div style={{
      marginTop: 28,
      fontSize: 24, color: 'rgba(55,56,60,0.78)', fontWeight: 500, letterSpacing: '-0.012em',
    }}>
      표면 문제와 실제 병목을 구분했습니다.
    </div>

    {/* Comparison cards */}
    <div style={{ marginTop: 46, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Surface problem */}
      <div style={{
        padding: '30px 36px',
        background: 'rgba(112,115,124,0.06)',
        border: '1px solid rgba(112,115,124,0.18)',
        borderRadius: 24,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontSize: 17, fontWeight: 700, color: 'rgba(55,56,60,0.61)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          <span style={{ width: 8, height: 8, background: 'rgba(55,56,60,0.43)', borderRadius: 999 }}></span>
          표면 문제
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: '#1B1C1E', letterSpacing: '-0.022em' }}>
          "사진을 PPT에 넣는 과정이 부담됨"
        </div>
      </div>

      {/* vs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '0 8px' }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(112,115,124,0.22)' }}></div>
        <div style={{ fontSize: 16, fontWeight: 700, color: 'rgba(55,56,60,0.43)', letterSpacing: '0.18em' }}>VS</div>
        <div style={{ flex: 1, height: 1, background: 'rgba(112,115,124,0.22)' }}></div>
      </div>

      {/* Real bottleneck — emphasized */}
      <div style={{
        padding: '34px 40px',
        background: '#FFFFFF',
        border: '2px solid #0066FF',
        borderRadius: 24,
        boxShadow: '0 12px 32px rgba(0,102,255,0.12)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: -14, left: 32,
          background: '#0066FF', color: '#FFF',
          padding: '6px 16px', borderRadius: 999,
          fontSize: 14, fontWeight: 700, letterSpacing: '0.08em',
        }}>REAL BOTTLENECK</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontSize: 17, fontWeight: 700, color: '#0066FF',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          marginBottom: 16, marginTop: 8,
        }}>
          실제 병목
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            '대표사진 선정 기준을 더 명확히 할 필요',
            '보고서 목적을 고객 관점으로 재정리할 여지',
            '사진 선택·정리·문구 작성 흐름의 표준화 필요',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700,
                color: '#0066FF', letterSpacing: '0.04em',
                background: '#EAF2FE',
                width: 36, height: 36, borderRadius: 999,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>{i + 1}</div>
              <div style={{ fontSize: 24, fontWeight: 600, color: '#1B1C1E', letterSpacing: '-0.018em', lineHeight: 1.4, paddingTop: 2 }}>
                {t}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <DiagnosisExamplePreview />
  </SlideShell>
);

// Slide 4 — Diagnosis method (input/process/output) -------------------------
const Slide4 = () => {
  const FlowBox = ({ label, items, accent = '#0066FF' }) => (
    <div style={{
      flex: 1,
      padding: '24px 24px',
      background: '#FFF',
      border: '1px solid rgba(112,115,124,0.22)',
      borderRadius: 20,
      display: 'flex', flexDirection: 'column', gap: 12,
      minHeight: 130,
    }}>
      <div style={{ fontSize: 14, fontWeight: 800, color: accent, letterSpacing: '0.14em' }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: '#1B1C1E', letterSpacing: '-0.014em', lineHeight: 1.4 }}>
        {items}
      </div>
    </div>
  );

  const RoleCard = ({ tag, title, items, accent }) => (
    <div style={{
      padding: '28px 28px',
      background: '#FFF',
      border: '1px solid rgba(112,115,124,0.22)',
      borderRadius: 20,
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      <div style={{
        alignSelf: 'flex-start',
        fontSize: 13, fontWeight: 800,
        background: accent.bg, color: accent.fg,
        padding: '6px 12px', borderRadius: 999,
        letterSpacing: '0.06em',
      }}>{tag}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: '#1B1C1E', letterSpacing: '-0.018em' }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, fontSize: 17, fontWeight: 500, color: 'rgba(55,56,60,0.82)', letterSpacing: '-0.008em', lineHeight: 1.45 }}>
            <span style={{ color: accent.fg, fontWeight: 700 }}>·</span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <SlideShell label="04 진단 방식">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <SectionLabel>03 / 진단 방식</SectionLabel>
        <div style={{ fontSize: 18, fontWeight: 600, color: 'rgba(55,56,60,0.43)' }}>Method</div>
      </div>

      <h2 style={{
        marginTop: 36,
        fontSize: 52, lineHeight: 1.22, letterSpacing: '-0.03em',
        fontWeight: 800, color: '#000',
      }}>
        업무를 <span style={{ color: '#0066FF' }}>입력 → 처리 → 출력</span><br/>
        구조로 나눴습니다
      </h2>

      {/* Flow row */}
      <div style={{ marginTop: 48, display: 'flex', alignItems: 'stretch', gap: 12 }}>
        <FlowBox label="INPUT" items="현장 사진" />
        <div style={{ alignSelf: 'center', fontSize: 28, color: 'rgba(55,56,60,0.43)', fontWeight: 300 }}>→</div>
        <FlowBox label="PROCESS" items={
          <span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.5 }}>
            사진 취합 → 대표사진 선정<br/>→ PPT 삽입 → 문구 작성
          </span>
        } />
        <div style={{ alignSelf: 'center', fontSize: 28, color: 'rgba(55,56,60,0.43)', fontWeight: 300 }}>→</div>
        <FlowBox label="OUTPUT" items={<span>고객용<br/>결과보고서 PDF</span>} />
      </div>

      {/* Role separation header */}
      <div style={{
        marginTop: 56,
        fontSize: 22, fontWeight: 700, color: '#1B1C1E', letterSpacing: '-0.014em',
      }}>
        AI · 자동화 · 사람의 역할을 구분했습니다
      </div>

      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <RoleCard
          tag="AI"
          title="AI가 도울 수 있는 부분"
          accent={{ bg: '#EAF2FE', fg: '#0054D1' }}
          items={['대표사진 후보 추천', '고객용 문구 초안 작성', '사진 유형 분류 보조']}
        />
        <RoleCard
          tag="AUTOMATION"
          title="자동화가 도울 수 있는 부분"
          accent={{ bg: 'rgba(101,65,242,0.10)', fg: '#3A16C9' }}
          items={['폴더 구조 생성', '선택 사진 보고서 삽입', 'PDF 생성 흐름 정리']}
        />
        <RoleCard
          tag="HUMAN"
          title="사람이 해야 하는 부분"
          accent={{ bg: 'rgba(55,56,60,0.08)', fg: '#1B1C1E' }}
          items={['최종 사진 선택', '고객 맥락 판단', '품질 검수']}
        />
      </div>

      <div style={{ flex: 1 }}></div>

      <div style={{
        marginTop: 32,
        padding: '28px 36px',
        background: '#171719',
        borderRadius: 20,
        color: '#FFF',
      }}>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.018em', lineHeight: 1.45 }}>
          AI와 자동화를 구분해야 <span style={{ color: '#69A5FF' }}>현실적인 실행 방향</span>이 나옵니다.
        </div>
      </div>
    </SlideShell>
  );
};

// Slide 5 — Roadmap ---------------------------------------------------------
const Slide5 = () => {
  return (
    <SlideShell label="05 실행 방향" padding={80}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <SectionLabel>04 / 실행 방향</SectionLabel>
        <div style={{ fontSize: 18, fontWeight: 600, color: 'rgba(55,56,60,0.43)' }}>Roadmap</div>
      </div>

      <h2 style={{
        marginTop: 36,
        fontSize: 52, lineHeight: 1.22, letterSpacing: '-0.03em',
        fontWeight: 800, color: '#000',
      }}>
        바로 큰 시스템을 만들기보다,<br/>
        <span style={{ color: '#0066FF' }}>3단계로 확장하는 방향</span>을 제안했습니다
      </h2>

      <div style={{
        marginTop: 28,
        fontSize: 24,
        fontWeight: 500,
        color: 'rgba(55,56,60,0.78)',
        lineHeight: 1.55,
        letterSpacing: '-0.012em',
      }}>
        진단 요약서의 실행 방향 일부를 그대로 보여주고,<br/>
        단계와 추천 순서가 어떻게 정리되는지 짚었습니다.
      </div>

      <RoadmapExamplePreview />
    </SlideShell>
  );
};

// Slide 6 — Trust closing / CTA --------------------------------------------
const Slide6 = () => {
  const Check = ({ children }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '20px 24px',
      background: 'rgba(112,115,124,0.05)',
      border: '1px solid rgba(112,115,124,0.16)',
      borderRadius: 16,
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: 999, background: '#0066FF',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8.5L6.5 12L13 4.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div style={{ fontSize: 22, fontWeight: 600, color: '#1B1C1E', letterSpacing: '-0.014em' }}>{children}</div>
    </div>
  );

  return (
    <SlideShell label="06 마무리" padding={80}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <SectionLabel>05 / 마무리</SectionLabel>
        <div style={{ fontSize: 18, fontWeight: 600, color: 'rgba(55,56,60,0.43)' }}>About Us</div>
      </div>

      <h2 style={{
        marginTop: 36,
        fontSize: 56, lineHeight: 1.2, letterSpacing: '-0.032em',
        fontWeight: 800, color: '#000',
      }}>
        AI 도구보다 먼저,<br/>
        <span style={{ color: '#0066FF' }}>업무 흐름</span>을 진단합니다
      </h2>

      {/* Checklist summary */}
      <div style={{ marginTop: 44 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: 'rgba(55,56,60,0.61)', letterSpacing: '0.1em', marginBottom: 16 }}>
          이번 미니진단을 통해 정리한 것
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Check>현재 업무 흐름 정리</Check>
          <Check>핵심 병목 정의</Check>
          <Check>AI 적용 가능 지점 구분</Check>
          <Check>자동화 적용 가능 지점 구분</Check>
          <Check>현실적인 3단계 실행 방향 제안</Check>
        </div>
      </div>

      {/* About */}
      <div style={{
        marginTop: 40,
        padding: '32px 36px',
        background: '#171719',
        borderRadius: 24,
        color: '#FFF',
      }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: '#69A5FF', letterSpacing: '0.18em', marginBottom: 12 }}>
          {BRAND}
        </div>
        <div style={{ fontSize: 20, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, letterSpacing: '-0.008em' }}>
          Unrealli는 AI 도구 사용법만 설명하지 않습니다. 고객의 실제 업무를 기준으로 <strong style={{ fontWeight: 700, color: '#FFF' }}>입력 → 처리 → 출력</strong> 흐름을 나누고, AI가 할 일, 자동화가 할 일, 사람이 판단해야 할 일을 구분합니다.
        </div>
        <div style={{
          marginTop: 20, paddingTop: 20,
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
        }}>
          {[
            '비개발자도 이해할 수 있는 업무 기준 설명',
            '실제 업무 흐름 기반 진단',
            '과한 시스템보다 실행 가능한 1단계부터 제안',
            '진단 후 요약서 제공',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, fontSize: 15, color: 'rgba(255,255,255,0.78)', fontWeight: 500, lineHeight: 1.45 }}>
              <span style={{ color: '#69A5FF' }}>·</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }}></div>

      {/* CTA */}
      <div style={{
        marginTop: 32,
        padding: '36px 40px',
        background: '#0066FF',
        borderRadius: 24,
        color: '#FFF',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.16em', marginBottom: 12 }}>
          NEXT STEP
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.022em', lineHeight: 1.4 }}>
          자동화하고 싶은데 어디서부터<br/>
          시작해야 할지 모르겠다면,<br/>
          <span style={{ color: '#C9DEFE' }}>먼저 업무 흐름부터 진단해보세요.</span>
        </div>
      </div>
    </SlideShell>
  );
};

// Mount on canvas
const App = () => (
  <DesignCanvas title="크몽 포트폴리오 · AI 업무활용 미니진단" subtitle="에어컨 청소 결과보고서 업무 진단 사례 · 6장 세트">
    <DCSection id="cover" title="1. 메인 이미지 (1080×1080)">
      <DCArtboard id="s1" label="01 표지" width={1080} height={1080}>
        <Slide1/>
      </DCArtboard>
    </DCSection>
    <DCSection id="details" title="2-6. 상세 이미지 (1080×1600)">
      <DCArtboard id="s2" label="02 고객 문제" width={1080} height={1600}><Slide2/></DCArtboard>
      <DCArtboard id="s3" label="03 진단 핵심" width={1080} height={1600}><Slide3/></DCArtboard>
      <DCArtboard id="s4" label="04 진단 방식" width={1080} height={1600}><Slide4/></DCArtboard>
      <DCArtboard id="s5" label="05 실행 방향" width={1080} height={1600}><Slide5/></DCArtboard>
      <DCArtboard id="s6" label="06 마무리" width={1080} height={1600}><Slide6/></DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
