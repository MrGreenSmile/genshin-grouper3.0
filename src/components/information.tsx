import { useState } from "react";
import version_information from "./versions";

export interface informationState {
  isinfo: React.Dispatch<React.SetStateAction<boolean>>;
  forinfo: boolean;
}

function Information({ isinfo, forinfo }: informationState) {
  const [toSummary, forSummary] = useState(true);
  const [toHowtoUse, forHowtoUse] = useState(false);
  const [toVersion, forVersion] = useState(false);
  function summary_view() {
    forSummary(true);
    forHowtoUse(false);
    forVersion(false);
  }
  function how2use_view() {
    forSummary(false);
    forHowtoUse(true);
    forVersion(false);
  }
  function version_view() {
    forSummary(false);
    forHowtoUse(false);
    forVersion(true);
  }

  return (
    <>
      <div
        className="information-modall-bg"
        onClick={() => isinfo(!forinfo)}
        key=""
      ></div>
      <div className="information-modall" key="information-container">
        <button
          onClick={() => summary_view()}
          className="information-summary-btn"
        >
          개요
        </button>
        <button
          onClick={() => how2use_view()}
          className="information-summary-btn"
        >
          사용법
        </button>
        <button
          onClick={() => version_view()}
          className="information-summary-btn"
        >
          버전 정보
        </button>
        <span className="information-closer" onClick={() => isinfo(!forinfo)}>
          ⓧ
        </span>

        {toSummary ? (
          <SiteSummary />
        ) : toHowtoUse ? (
          <HowtoUse />
        ) : (
          <VersionView />
        )}
      </div>
    </>
  );
}

function SiteSummary() {
  return (
    <div>
      <p>겐신 조합을 맞춰드립니다.</p>
      <p>
        먼저 주의해주시길, 조합 또는 정보가 부족하거나 오류가 있을 수 있으니,
        참고용으로만 봐쥬시길 바랍니다.
      </p>
      <p>
        여기 있는 조합은 가능한 모든 조합을 다루고 있으니, 최고의 조합은 아닐 수
        있습니다.
      </p>
      <p className="image-resource">이미지 출처 : Honey Hunter World</p>
    </div>
  );
}
function HowtoUse() {
  return (
    <div>
      <p>갖고 있거나 알고싶은 캐릭터들을 터치(클릭)해 선택합니다.</p>
      <p>
        <div>--for Mobile--</div>
        하단의 '선택된 캐릭터'를 터치하면 선택된 캐릭터와 결과를 확인할 수
        있습니다.
      </p>
      <p>
        '선택된 캐릭터' 하단에 선택한 캐릭터들의 카드가 표시됩니다. 캐릭터의
        카드를 터치(클릭)하면 상세 페이지로 이동합니다.
      </p>
      <p>'지금 가능한 조합'에 선택된 캐릭터가 모두 포함된 조합이 표시됩니다.</p>
      <p>
        '해볼만한 조합'에 선택된 캐릭터가 하나 이상 포함된 조합이 표시됩니다.
      </p>
      <p>우측 하단에 Top을 터치(클릭)해 상단으로 이동합니다.</p>
    </div>
  );
}
function VersionView() {
  return (
    <div>
      {version_information.map((version) => (
        <p>
          {version[0]}
          <ul className="information-version">
            {version.slice(1).map((list) => (
              <li>{list}</li>
            ))}
          </ul>
        </p>
      ))}
    </div>
  );
}

export default Information;
